import { Routes } from '@angular/router';
export const routes: Routes = [
    {path: '', loadChildren: () => import('./blog-layout/blog-layout.module').then(m => m.BlogLayoutModule)}
];
