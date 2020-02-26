import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { standardStorybookSchema } from '../../../utils/storybook';
import { VideoThumbnailComponent } from './video-thumbnail.component';
import { videoThumbnailSchema } from './video-thumbnail.module';

const sampleProp = {
  index: 1,
  title: 'Rick and Morty',
  images: {
    alt: 'Rick and Morty',
    smallSrc: 'https://img.youtube.com/vi/vx5-fQ67yDA/default.jpg',
    largeSrc: 'https://img.youtube.com/vi/vx5-fQ67yDA/sddefault.jpg'
  }
};

storiesOf('shared/layout/Video Thumbnail', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(videoThumbnailSchema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: VideoThumbnailComponent,
    props: {
      thumbnail: sampleProp,
      selected: action('clicked')
    }
  }));
