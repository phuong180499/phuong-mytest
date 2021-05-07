import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NhanvienDetailComponent } from '../nhanvien-detail/nhanvien-detail.component';


@Injectable()
export class checkSaveFormGuard implements CanDeactivate<NhanvienDetailComponent>{

    canDeactivate(component:NhanvienDetailComponent){
        alert('you can not leave this page witgout saving data');
        return true;
    }
}
