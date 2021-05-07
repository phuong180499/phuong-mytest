import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable()
export class NhanvienService{
    private apiUrl = "https://60867c9ea3b9c200173b6014.mockapi.io/api/nhanviens/";
    dataUrl: string | undefined;
    result: any;
    response: any;

    constructor(private _http: HttpClient){

    }
    // GetList(): any[] {
    //     let nhanviens:any[] = [
    //         {Id: 1, Name: "Phạm Công Kiên"},
    //         {Id: 2, Name: "Hoàng Mai Anh"},
    //         {Id: 3, Name: "Nguyễn Đình Tuấn"},
    //         {Id: 4, Name: "Nguyễn Thị Phương"},
    //         {Id: 5, Name: "Nguyễn Thị Linh"},
    //       ];
    //       return nhanviens;
    // }

    GetList(): Observable <any>{
        return this._http.get(this.apiUrl); //trả về 1 đtg observablemap sang json

    }
    Search(keyword: string): Observable <any>{
      return this._http.get(this.apiUrl +"?search="+ keyword); //trả về 1 đtg observablemap sang json

    }
    GetSingle(id: number): Observable <any>{
        return this._http.get(this.apiUrl + id);

    }
    Update(id:number,data: any): Observable <any>{
        return this._http.put(this.apiUrl + id,data);

    }
    Add(data: any): Observable <any>{
        return this._http.post(this.apiUrl,data);

    }
    Delete(id:number): Observable <any>{
      return this._http.delete(this.apiUrl+id);

  }


}
