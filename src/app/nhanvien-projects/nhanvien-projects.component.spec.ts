import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienProjectsComponent } from './nhanvien-projects.component';

describe('NhanvienProjectsComponent', () => {
  let component: NhanvienProjectsComponent;
  let fixture: ComponentFixture<NhanvienProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
