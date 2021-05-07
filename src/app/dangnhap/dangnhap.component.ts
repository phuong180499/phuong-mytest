import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  onSubmit(formSignIn:any){
    console.log(formSignIn.value);
    throw new Error('From is invalid'); //lỗi từ không hợp lệ
  }
  constructor() { }

  ngOnInit(): void {
  }

}
