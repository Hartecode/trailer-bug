// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { withA11y } from '@storybook/addon-a11y';
// import { storiesOf, addDecorator } from '@storybook/angular';

// import { Button } from '@storybook/angular/demo';

// addDecorator(withA11y);

// export default {
//   title: 'Button',
// };

// export const text = () => ({
//   component: Button,
//   props: {
//     text: 'Hello Button',
//   },
// });

// export const emoji = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//   },
// });

// emoji.story = {
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const withSomeEmojiAndAction = () => ({
//   component: Button,
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
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// buttonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
