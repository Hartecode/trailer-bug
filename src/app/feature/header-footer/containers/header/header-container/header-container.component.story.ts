import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { provideRoutes } from '@angular/router';
import { LazyLoaderService } from 'src/app/module-injecter/services/lazy-loader/lazy-loader.service';
import { LAZY_WIDGETS } from 'src/app/module-injecter/utils/tokens';
import {
  lazyArrayToObj,
  lazyWidgets
} from 'src/app/module-injecter/utils/widgets';
import { standardStorybookSchema } from 'src/app/utils/storybook';
import { HeaderContainerComponent } from './header-container.component';

const schema: NgModule = {
  declarations: [HeaderContainerComponent],
  imports: [CommonModule, MatIconModule, FormsModule],
  providers: [
    {
      provide: LAZY_WIDGETS,
      useFactory: lazyArrayToObj
    },
    LazyLoaderService,
    provideRoutes(lazyWidgets)
  ]
};

storiesOf('Template/header', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(schema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: HeaderContainerComponent,
    props: {}
  }));
