import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { standardStorybookSchema } from 'src/app/utils/storybook';
import { FooterContainerComponent } from './footer-container.component';

const schema: NgModule = {
  declarations: [FooterContainerComponent],
  imports: [CommonModule]
};

storiesOf('Template/footer', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(schema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: FooterContainerComponent,
    props: {}
  }));
