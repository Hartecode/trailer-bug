import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpeningComponent } from './opening.component';
import { openingSchema } from './opening.module';

describe('OpeningComponent', () => {
  let component: OpeningComponent;
  let fixture: ComponentFixture<OpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(openingSchema).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
