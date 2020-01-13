import {action} from '@storybook/addon-actions';
import {withA11y} from '@storybook/addon-a11y';
import {storiesOf, moduleMetadata} from '@storybook/angular';
import {landingSchema} from '../../landing.module';
import {OpeningComponent} from './opening.component';
import {cardProps} from '../../../../shared/layout/card/card.component.story';
import {imageArray, imageCodes, unsplashApi} from '../../components/image-carousel/image-carousel.component.story';

const movies = Array(6).fill(cardProps({}));

storiesOf('Template/Opening', module)
.addDecorator(moduleMetadata(landingSchema))
.addDecorator(withA11y)
.add('sample', () => ({
  component: OpeningComponent,
  props: {
    popularMovies: movies,
    featuredPosters: imageArray(imageCodes, unsplashApi)
  }
}));
