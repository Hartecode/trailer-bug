import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { withA11y } from '@storybook/addon-a11y';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { standardStorybookSchema } from '../../../../utils/storybook';
import { NoResultsModelComponent } from './no-results-model.component';

const schema = {
  declarations: [NoResultsModelComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NoResultsModelComponent]
};

storiesOf('Template/No Results Model', module)
  .addDecorator(moduleMetadata(standardStorybookSchema(schema)))
  .addDecorator(withA11y)
  .add('sample', () => ({
    component: NoResultsModelComponent,
    props: {}
  }));
