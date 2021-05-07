import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienOverviewComponent } from './nhanvien-overview.component';

describe('NhanvienOverviewComponent', () => {
  let component: NhanvienOverviewComponent;
  let fixture: ComponentFixture<NhanvienOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
