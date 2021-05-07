import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NhanvienService } from '../services/nhanvien.services';
@Component({
  selector: 'app-nhanvien-edit',
  templateUrl: './nhanvien-edit.component.html',
  styleUrls: ['./nhanvien-edit.component.scss']
})
export class NhanvienEditComponent implements OnInit,OnDestroy {

  public id!: number;
  public subscription: Subscription = new Subscription;
  public nhanvien:any;

  constructor(private router: Router, private activateRoute: ActivatedRoute, public service: NhanvienService) { }

  ngOnInit(): void {              // show id
    this.subscription = this.activateRoute.params.subscribe(params=>{  //get param từ url-> trả về mảng param
      this.id = params['id'];
      // alert(this.id);
    });

    this.service.GetSingle(this.id).subscribe(data => {
      this.nhanvien = data;
    })
  }
  GotoNhanvien(){
    this.router.navigate(['/nhanviens']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  SaveForm(){
    debugger;
    this.service.Update(this.id,this.nhanvien).subscribe((response: any) =>{
       if (response) {
          alert('Save success');
          this.router.navigate(['/nhanviens']);  //trở về trang nhanviens
       }
    })
  }



}
