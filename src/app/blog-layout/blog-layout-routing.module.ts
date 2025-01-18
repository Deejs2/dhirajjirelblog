import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../component/blog/blog.component';
import { SingleBlogComponent } from '../component/single-blog/single-blog.component';
import { BlogLayoutComponent } from './blog-layout.component';

const routes: Routes = [
  {path: '', component: BlogLayoutComponent, children: [
    {path: '', component: BlogComponent},
    {path: 'blog/:slug', component: SingleBlogComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogLayoutRoutingModule { }
