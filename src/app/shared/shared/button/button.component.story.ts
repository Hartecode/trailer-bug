import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { sharedSchema } from '../shared.module';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(moduleMetadata(sharedSchema))
  .addDecorator(withA11y)
  .add('empty', () => ({
    component: ButtonComponent,
    props: {},
    template: `<app-button><button>yes</button></app-button>`
  }))
  .add('emoji', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯'
    }
  }));
