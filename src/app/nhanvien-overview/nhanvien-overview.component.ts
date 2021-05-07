import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription}from 'rxjs';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nhanvien-overview',
  templateUrl: './nhanvien-overview.component.html',
  styleUrls: ['./nhanvien-overview.component.scss']
})
export class NhanvienOverviewComponent implements OnInit,OnDestroy {
  public parentRouterId: Number | undefined; 
  public sub: Subscription | undefined;
  constructor(private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activateRoute.parent?.params.subscribe(params=>{
      this.parentRouterId = params['id'];
      alert('child get id: '+ this.parentRouterId);
    });
  }
  ngOnDestroy(){

  }

}
