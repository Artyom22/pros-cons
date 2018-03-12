import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProsConsComponent } from './edit-pros-cons.component';

describe('EditProsComponent', () => {
  let component: EditProsConsComponent;
  let fixture: ComponentFixture<EditProsConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProsConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProsConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
