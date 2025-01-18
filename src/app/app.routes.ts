import { Routes } from '@angular/router';
import { PolicyTermOfUseComponent } from './component/policy-term-of-use/policy-term-of-use.component';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./blog-layout/blog-layout.module').then(m => m.BlogLayoutModule)},
    {path: 'privacy-policy-terms-of-use', component: PolicyTermOfUseComponent}
];
