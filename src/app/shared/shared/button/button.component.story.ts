import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import {sharedSchema} from '../shared.module';
import { ButtonComponent } from './button.component';

// const moduleMetaData: ()

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
    text: '😀 😎 👍 💯',
  },
}));


// emoji.story = {
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const withSomeEmojiAndAction = () => ({
//   component: ButtonComponent,
//   props: {
//     text: '😀 😎 👍 💯',
//     onClick: action('This was clicked OMG'),
//   },
// });

// withSomeEmojiAndAction.story = {
//   name: 'with some emoji and action',
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const buttonWithLinkToAnotherStory = () => ({
//   component: ButtonComponent,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// buttonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
