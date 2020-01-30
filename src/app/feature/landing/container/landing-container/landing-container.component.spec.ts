import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LandingContainerComponent } from './landing-container.component';
import { landingContainerSchema } from './landing-container.module';

const changedSchema = {
  ...landingContainerSchema,
  imports: [...landingContainerSchema.imports, HttpClientTestingModule]
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
