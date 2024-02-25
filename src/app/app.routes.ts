import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

export const routes: Routes = [
    {path: 'trangchu',component: TrangChuComponent},
  { path: '**', component: NotFoundComponent },
];
