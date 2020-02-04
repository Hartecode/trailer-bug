import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { standardStorybookSchema } from '../../../../utils/storybook';
import { VideoThumbnailComponent } from './video-thumbnail.component';
import { videoThumbnailSchema } from './video-thumbnail.module';

storiesOf('Video Thumbnail', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(videoThumbnailSchema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: VideoThumbnailComponent,
    props: {
      thumbnail: {
        index: 1,
        title: 'Test Movie Trailer'
      },
      selected: action('clicked')
    }
  }));
