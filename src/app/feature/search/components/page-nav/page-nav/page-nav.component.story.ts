import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { pageNavSchema } from '../page-nav.module';
import { PageNavComponent } from './page-nav.component';

storiesOf('Search/components/Page-nav', module)
  .addDecorator(moduleMetadata(pageNavSchema))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: PageNavComponent,
    props: {
      data: {
        name: 'Page',
        currentPage: 3,
        totalPages: 200
      },
      previous: action('go back'),
      next: action('go foward')
    }
  }));
