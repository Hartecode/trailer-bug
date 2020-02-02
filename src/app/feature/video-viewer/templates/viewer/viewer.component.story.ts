import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { standardStorybookSchema } from '../../../../utils/storybook';
import { ViewerComponent } from './viewer.component';
import { viewerSchema } from './viewer.module';

storiesOf('Template/Video viewer', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(viewerSchema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: ViewerComponent,
    props: {}
  }));
