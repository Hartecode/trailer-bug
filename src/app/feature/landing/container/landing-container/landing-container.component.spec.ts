import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { landingSchema } from '../../landing.module';
import { LandingContainerComponent } from './landing-container.component';

const changedSchema = {
  ...landingSchema,
  imports: [...landingSchema.imports, HttpClientTestingModule]
};

describe('LandingContainerComponent', () => {
  let component: LandingContainerComponent;
  let fixture: ComponentFixture<LandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(changedSchema).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
