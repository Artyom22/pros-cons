import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProsConsComponent } from './add-pros-cons.component';

describe('AddProsComponent', () => {
  let component: AddProsConsComponent;
  let fixture: ComponentFixture<AddProsConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProsConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProsConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
