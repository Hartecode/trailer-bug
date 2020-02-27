import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { featureSchema } from '../../feature-page.module';
import { FeaturePageComponent } from './feature-page.component';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(featureSchema).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
