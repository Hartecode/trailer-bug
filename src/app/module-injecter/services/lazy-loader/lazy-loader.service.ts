import {
  Compiler,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
  ViewContainerRef
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LAZY_WIDGETS } from '../../utils/tokens';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  private state: DynamicRegions = {
    appContainer: {}
  };

  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_WIDGETS)
    private lazyWidgets: {
      [key: string]: () => Promise<NgModuleFactory<unknown> | Type<unknown>>;
    }
  ) {}

  public registerRegion(val: RegisterRegion) {
    this.state[val.key] = {
      regionRef: val.ref
    };
  }

  public removeComponent(region: keyof DynamicRegions): boolean {
    const removedMethod = this.state[region].removeComponent;
    if (removedMethod) {
      return removedMethod();
    }
    return false;
  }

  public async load(
    name: string,
    regionKey: keyof DynamicRegions,
    componentInputs?: ComponentInput[],
    componentOutputs?: ComponentOutput[]
  ) {
    const region = this.state[regionKey].regionRef;
    region.clear();
    const ngModuleOrNgModuleFactory = await this.lazyWidgets[name]();
    const subscriptions: Subscription[] = [];
    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      moduleFactory = await this.compiler.compileModuleAsync(
        ngModuleOrNgModuleFactory
      );
    }

    // TODO: FIGURE OUT TYPE
    // tslint:disable-next-line: no-any
    const entryComponent = (moduleFactory.moduleType as any).entry;
    const moduleRef = moduleFactory.create(this.injector);

    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      entryComponent
    );

    const componentRef = region.createComponent(compFactory);

    this.state[regionKey] = {
      componentRef,
      regionRef: region,
      removeComponent: () => {
        if (componentRef) {
          componentRef.destroy();
          return true;
        }
        return false;
      }
    };

    if (componentInputs && componentInputs.length > 0 && componentRef) {
      componentInputs.forEach(v => {
        // TODO: FIGURE OUT TYPE
        // tslint:disable-next-line: no-any
        (componentRef.instance as any)[v.input] = v.data;
      });
    }

    if (componentOutputs && componentOutputs.length > 0 && componentRef) {
      componentOutputs.forEach(v => {
        // TODO: FIGURE OUT TYPE
        // tslint:disable-next-line: no-any
        const outputObservable = componentRef.instance[
          v.output
          // tslint:disable-next-line: no-any
        ] as Observable<any>;
        subscriptions.push(
          outputObservable.subscribe(event => {
            v.method(event);
          })
        );
      });
    }

    componentRef.onDestroy(() => {
      subscriptions.forEach(s => {
        s.unsubscribe();
      });
    });
  }
}

export interface ComponentInput {
  input: string;
  data: unknown;
}

export interface ComponentOutput {
  output: string;
  // tslint:disable-next-line: ban-types
  method: Function;
}

export interface DynamicRegions {
  appContainer: {
    regionRef?: ViewContainerRef;
    componentRef?: ComponentRef<unknown>;
    removeComponent?: () => boolean;
  };
}

export interface RegisterRegion {
  key: keyof DynamicRegions;
  ref: ViewContainerRef;
}
