import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { landingSchema } from '../../landing.module';
import { ImageCarouselComponent } from './image-carousel.component';

export const unsplashApi = (code: string) =>
  `https://source.unsplash.com/${code}/1600x900`;

export const imageCodes = [
  '_9a-3NO5KJE',
  '6Ox3fPG-qvo',
  'b4lS_gXkQp0',
  'fFO5DsFV5gk',
  '94c2BwxqwXw',
  'wFUyCqW9tS4'
];

export const imageArray = (imgArr: string[], fuc: (c: string) => string) =>
  imgArr.map((val, i) => ({
    src: fuc(val),
    alt: `panda ${i + 1}`,
    title: `Panda ${i + 1}`
  }));

storiesOf('Image Carousel', module)
  .addDecorator(moduleMetadata(landingSchema))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: ImageCarouselComponent,
    props: {
      images: imageArray(imageCodes, unsplashApi)
    }
  }));
