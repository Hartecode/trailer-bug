import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { cardProps } from '../../../../shared/layout/card/card.component.story';
import { standardStorybookSchema } from '../../../../utils/storybook';
import {
  imageArray,
  imageCodes,
  unsplashApi
} from '../../components/image-carousel/image-carousel.component.story';
import { OpeningComponent } from './opening.component';
import { openingSchema } from './opening.module';

const movies = Array(6).fill(cardProps({}));

storiesOf('Template/Opening', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(openingSchema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: OpeningComponent,
    props: {
      popularMovies: movies,
      popularTV: movies,
      featuredPosters: imageArray(imageCodes, unsplashApi)
    }
  }));
