import {withA11y} from '@storybook/addon-a11y';
import {storiesOf, moduleMetadata} from '@storybook/angular';
import {layoutSchema} from '../layout.module';
import {CardComponent, Card} from './card.component';

const cardProps = ({
    id = '123',
    image = {
        src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kMsijYa8gOJXrmhHLOi2bGTKLO6.jpg',
        alt: 'dracula'
    },
    title = 'Dracula',
    description = 'In Transylvania in 1897, the blood-drinking Count is drawing his plans against Victorian London. And be warned: the dead travel fast.',
    releaseDate = 'June 22, 2018'
}): Card => ({
    id,
    image,
    title,
    description,
    releaseDate
});

storiesOf('Card', module)
.addDecorator(moduleMetadata(layoutSchema))
.addDecorator(withA11y)
.add('sample', () => ({
  component: CardComponent,
  props: {
      data: cardProps({})
  }
}));
