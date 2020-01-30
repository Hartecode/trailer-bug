import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpeningModule } from '../../templates/opening/opening.module';
import { LandingContainerComponent } from './landing-container.component';

export const landingContainerSchema = {
  declarations: [LandingContainerComponent],
  imports: [CommonModule, OpeningModule],
  exports: [LandingContainerComponent]
};

@NgModule(landingContainerSchema)
export class LandingContainerModule {}
