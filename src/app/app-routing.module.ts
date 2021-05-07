import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NhanvienDetailComponent } from './nhanvien-detail/nhanvien-detail.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NhanvienOverviewComponent } from './nhanvien-overview/nhanvien-overview.component';
import { NhanvienProjectsComponent } from './nhanvien-projects/nhanvien-projects.component';
import { LoginComponent } from './login/login.component';
import { checkLoginGuard } from './guard/check-login.guard';
import { checkSaveFormGuard } from './guard/check-save-form.guard';
import { NhanvienEditComponent } from './nhanvien-edit/nhanvien-edit.component';
import { NhanvienAddComponent } from './nhanvien-add/nhanvien-add.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  // {path :'', redirectTo: 'nhanviens', pathMatch: 'full'},  //mặc định ấn trang home là về trang nhân viên
  {path:'nhanviens',component: NhanvienComponent, canActivate: [checkLoginGuard] },
  {path: 'nhanvien-edit/:id', component: NhanvienEditComponent},
  {path: 'nhanvien-add', component:NhanvienAddComponent},
  {path: 'login', component: LoginComponent},

  {path: 'nhanvien-detail/:id', component: NhanvienDetailComponent, canDeactivate: [checkSaveFormGuard], children:[
    {path:'',component:NhanvienOverviewComponent},
    {path:'projects',component:NhanvienProjectsComponent},
  ]},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
