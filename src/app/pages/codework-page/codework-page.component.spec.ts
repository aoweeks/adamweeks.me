import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeworkPageComponent } from './codework-page.component';

describe('CodeworkPageComponent', () => {
  let component: CodeworkPageComponent;
  let fixture: ComponentFixture<CodeworkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeworkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
