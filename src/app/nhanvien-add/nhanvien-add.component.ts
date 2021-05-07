import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NhanvienService } from '../services/nhanvien.services';

@Component({
  selector: 'app-nhanvien-add',
  templateUrl: './nhanvien-add.component.html',
  styleUrls: ['./nhanvien-add.component.scss']
})
export class NhanvienAddComponent implements OnInit {

  public id!: number;
  public nhanvien:any;

  constructor(private router: Router, private activateRoute: ActivatedRoute, public service: NhanvienService) { }

  ngOnInit(): void {              // show id
    this.nhanvien= {};
  }
  GotoNhanvien(){
    this.router.navigate(['/nhanviens']);
  }

  SaveForm(){
    this.service.Add(this.nhanvien).subscribe((response: any) =>{
       if (response) {
          alert('Add success');
          this.router.navigate(['/nhanviens']);  //trở về trang nhanviens
       }
    })

   }
}
