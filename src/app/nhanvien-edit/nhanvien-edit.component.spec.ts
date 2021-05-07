import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienEditComponent } from './nhanvien-edit.component';

describe('NhanvienEditComponent', () => {
  let component: NhanvienEditComponent;
  let fixture: ComponentFixture<NhanvienEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
