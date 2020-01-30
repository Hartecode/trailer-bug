import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { cardProps } from '../../../../shared/layout/card/card.component.story';
import {
  imageArray,
  imageCodes,
  unsplashApi
} from '../../components/image-carousel/image-carousel.component.story';
import { OpeningComponent } from './opening.component';
import { openingSchema } from './opening.module';

const movies = Array(6).fill(cardProps({}));

const changedSchema = {
  ...openingSchema,
  imports: [...openingSchema.imports, BrowserAnimationsModule]
};

storiesOf('Template/Opening', module)
  .addDecorator(moduleMetadata(changedSchema))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: OpeningComponent,
    props: {
      popularMovies: movies,
      featuredPosters: imageArray(imageCodes, unsplashApi)
    }
  }));
