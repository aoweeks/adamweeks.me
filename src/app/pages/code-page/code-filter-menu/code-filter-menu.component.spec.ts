import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFilterMenuComponent } from './code-filter-menu.component';

describe('CodeFilterMenuComponent', () => {
  let component: CodeFilterMenuComponent;
  let fixture: ComponentFixture<CodeFilterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFilterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
