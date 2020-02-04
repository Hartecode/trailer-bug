import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { standardStorybookSchema } from '../../../../utils/storybook';
import { ViewerComponent } from './viewer.component';
import { viewerSchema } from './viewer.module';

const testVideoList = [
  {
    title: 'Test Trailer 1',
    type: 'youtube',
    url: 'https://www.youtube.com/embed/Fru8IkuDp_k'
  },
  {
    title: 'Test Trailer 2',
    type: 'youtube',
    url: 'https://www.youtube.com/embed/PaWXNMplPgs'
  },
  {
    title: 'Test Trailer 3',
    type: 'youtube',
    url: 'https://www.youtube.com/embed/jZvFEtR8RH0'
  },
  {
    title: 'Test Trailer 4',
    type: 'youtube',
    url: 'https://www.youtube.com/embed/VNdHd1asf9s'
  }
];

storiesOf('Template/Video viewer', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(viewerSchema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: ViewerComponent,
    props: {
      videoList: testVideoList
    }
  }));
