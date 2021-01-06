import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditRowComponent } from './new-or-edit-row.component';

describe('NewOrEditRowComponent', () => {
  let component: NewOrEditRowComponent;
  let fixture: ComponentFixture<NewOrEditRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrEditRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
