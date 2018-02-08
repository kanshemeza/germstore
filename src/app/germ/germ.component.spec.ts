import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermComponent } from './germ.component';

describe('GermComponent', () => {
  let component: GermComponent;
  let fixture: ComponentFixture<GermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
