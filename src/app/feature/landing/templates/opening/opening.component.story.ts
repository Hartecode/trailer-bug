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
}))
.add('none-perfect image', () => ({
    component: OpeningComponent,
    props: {
        data: cardProps({
            title: 'Panda',
            image: {
                src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.mentalfloss.com%2Fsites%2Fdefault%2Ffiles%2F502507-iStock-513942824.jpg%3Fresize%3D767x516&f=1&nofb=1',
                alt: 'panda'
            }
        }),
        showVideo: action('show video'),
        showPage: action('go to the page')
    }
  }));
