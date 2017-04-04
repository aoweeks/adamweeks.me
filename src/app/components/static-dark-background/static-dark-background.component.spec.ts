import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDarkBackgroundComponent } from './static-dark-background.component';

describe('StaticDarkBackgroundComponent', () => {
  let component: StaticDarkBackgroundComponent;
  let fixture: ComponentFixture<StaticDarkBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDarkBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDarkBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
