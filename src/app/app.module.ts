import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NhanvienDetailComponent } from './nhanvien-detail/nhanvien-detail.component';
import { NhanvienOverviewComponent } from './nhanvien-overview/nhanvien-overview.component';
import { NhanvienProjectsComponent } from './nhanvien-projects/nhanvien-projects.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.services';
import { NhanvienService } from './services/nhanvien.services';
import { checkLoginGuard } from './guard/check-login.guard';
import { checkSaveFormGuard } from './guard/check-save-form.guard';
import { NhanvienEditComponent } from './nhanvien-edit/nhanvien-edit.component';
import { NhanvienAddComponent } from './nhanvien-add/nhanvien-add.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    DangnhapComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    NhanvienComponent,
    HomeComponent,
    NotfoundComponent,
    NhanvienDetailComponent,
    NhanvienOverviewComponent,
    NhanvienProjectsComponent,
    LoginComponent,
    NhanvienEditComponent,
    NhanvienAddComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    NhanvienService,
    checkLoginGuard,
    checkSaveFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
