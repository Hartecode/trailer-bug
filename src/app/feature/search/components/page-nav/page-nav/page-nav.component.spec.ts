import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pageNavSchema } from '../page-nav.module';
import { PageNavComponent } from './page-nav.component';

describe('PageNavComponent', () => {
  let component: PageNavComponent;
  let fixture: ComponentFixture<PageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(pageNavSchema).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
