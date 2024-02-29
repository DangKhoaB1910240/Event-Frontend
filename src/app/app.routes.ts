import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { NhaToChucComponent } from './nha-to-chuc/nha-to-chuc.component';
import { SuKienComponent } from './su-kien/su-kien.component';

export const routes: Routes = [
  { path: '', redirectTo: '/trangchu', pathMatch: 'full' },
    {path: 'trangchu',component: TrangChuComponent},
    {path: 'dangnhap',component: LoginComponent},
    {path: 'dangky',component: RegisterComponent},
    {path: 'gioithieu',component: GioiThieuComponent},
    {path: 'nhatochuc',component: NhaToChucComponent},
    {path: 'sukien',component: SuKienComponent},
    { path: '**', component: NotFoundComponent },
];
