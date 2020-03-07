import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsModelComponent } from './no-results-model.component';

describe('NoResultsModelComponent', () => {
  let component: NoResultsModelComponent;
  let fixture: ComponentFixture<NoResultsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoResultsModelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
