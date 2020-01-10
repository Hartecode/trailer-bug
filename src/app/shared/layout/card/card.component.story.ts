import {action} from '@storybook/addon-actions';
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
    data: cardProps({}),
    showVideo: action('show video'),
    showPage: action('go to the page')
  }
}))
.add('none-perfect image', () => ({
    component: CardComponent,
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
  }))
  .add('long description', () => ({
    component: CardComponent,
    props: {
        data: cardProps({
            description: 'Panda Ipsum the cool ipsum with giant black-and-white panda eat bamboo in the cool ipsum all about pandas. The red panda loves leaves to dance and the ipsum all about pandas. The panda dances. There are two main types of pandas, the forest. Panda Ipsum panda eat bamboo in the family Ailuridae. Panda, panda, panda, panda, panda, panda, panda, panda, panda eat bamboo in the cool tiny panda relaxing in the cool ipsum with giant panda bear giant panda dancing bear. It is the forest. Cute panda is believed that ovulation period, they are only ovulate once each year. During that ovulation period, they are only living species of the red panda eat bamboo in the family Ailuridae. Panda, panda, panda, panda, panda, panda red panda.'
        }),
        showVideo: action('show video'),
        showPage: action('go to the page')
    }
  }));
