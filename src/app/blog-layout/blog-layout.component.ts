import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface LatestPost {
  image: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.css'
})
export class BlogLayoutComponent {

  latestPosts: LatestPost[] = [
    {
      image: 'assets/latest-1.jpg',
      title: 'Thoughtful living in los Angeles',
      date: '03 Mar 2024'
    },
    {
      image: 'assets/latest-2.jpg',
      title: 'Vivamus molestie gravida turpis',
      date: '03 Mar 2024'
    }
  ];

}
