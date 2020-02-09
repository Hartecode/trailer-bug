import {
  Compiler,
  Inject,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
  ViewContainerRef
} from '@angular/core';
import { LAZY_WIDGETS } from '../../utils/tokens';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_WIDGETS)
    private lazyWidgets: {
      [key: string]: () => Promise<NgModuleFactory<unknown> | Type<unknown>>;
    }
  ) {}

  async load(name: string, container: ViewContainerRef) {
    const ngModuleOrNgModuleFactory = await this.lazyWidgets[name]();

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

    const comp = container.createComponent(compFactory);
  }
}
