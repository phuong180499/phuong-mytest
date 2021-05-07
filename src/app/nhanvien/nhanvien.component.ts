import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../services/nhanvien.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss'],
  providers: [NhanvienService],

})
export class NhanvienComponent implements OnInit {
  public nhanviens: any[] | undefined;
  public pages: number[] | undefined;
  public currentPage: number | undefined;
  public keyword!: string;
  constructor(private nhanvienService: NhanvienService,
    private router: Router, private activatedRouter: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // this.nhanviens = this.nhanvienService.GetList();
    this.activatedRouter.queryParams.subscribe(params => {        //phaan trang
      this.currentPage = params['pageNumber'] || 1;
      console.log(this.currentPage);
    });
    this.LoadData();

    this.pages = [1, 2, 3, 4, 5];    //phân trang
  }
  Search(){
    this.nhanvienService.Search(this.keyword).subscribe((response: any) => {   //subscribe observable đấy ->gán trả về dl tên respon
      this.nhanviens = response;
      console.log(response);
    }, (error: any) => {                //sai link -> lỗi 404
      console.log(error);
    });
  }
  Delete(id: number) {
    let confirmResult = confirm("Are you sure to delete nhan vien?");
    if (confirmResult) {
      this.nhanvienService.Delete(id).subscribe(response => {
        if (response) {
          alert('Delete ok');
          this.LoadData();
        }
      })
    }
  }
  LoadData() {
    this.nhanvienService.GetList().subscribe((response: any) => {   //subscribe observable đấy ->gán trả về dl tên respon
      this.nhanviens = response;
      console.log(response);
    }, error => {                //sai link -> lỗi 404
      console.log(error);
    });
  }
}
