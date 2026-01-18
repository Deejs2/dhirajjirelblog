import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface LatestPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
}

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.css'
})
export class BlogLayoutComponent {

  latestPosts: LatestPost[] = [
    {
      title: "One Night Camping at Chapakharka – Embracing Nature and Friendship",
      slug: "one-night-camping-chapakharka",
      author: "Dhiraj Jirel",
      date: "Poush 18, 2082",
      category: "Travel & Nature",
      tags: ["Camping", "Chapakharka", "Nature", "Friends", "Adventure", "Bonfire", "Stargazing"],
      image: "assets/camping/chapakharka-camping-group-photo.jpeg",
      description: "An unforgettable one-night camping experience at Chapakharka with friends, filled with nature, adventure, bonfires, and stargazing."
    },

    {
      title: "Ambition Hack Fest 2082 – Team BROGRAMMERS Shine with Social Impact Solution",
      slug: "ambition-hackfest-2082-brogrammers",
      author: "Dhiraj Jirel",
      date: "Ashwin 15, 2082",
      category: "Hackathon",
      tags: ["Hackathon", "Angular", "Spring Boot", "PostgreSQL", "Khalti", "Social Impact", "BROGRAMMERS", "Ambition College"],
      image: "assets/hackfest/team-brogrammers.JPG",
      description: "Team BROGRAMMERS secured the Social Impact Track prize at Ambition Hack Fest 2082 with an innovative web app built using Angular, Spring Boot, PostgreSQL, and Khalti integration."
    }, 

    {
      title: "A Wild Day Out at Shivapuri National Park – Nature, Adventure, and Friendship",
      slug: "shivapuri-day-out-adventure-colleagues",
      author: "Dhiraj Jirel",
      date: "Jestha 10, 2082",
      category: "Travel & Nature",
      tags: ["Shivapuri", "Hiking", "Nature", "Adventure", "Waterfall", "Rain", "Friends", "College Life"],
      image: "assets/travel/lost-in-forest-while-exploring.jpg",
      description: "An unforgettable day trip with colleagues to Shivapuri National Park filled with jungle trails, a hidden waterfall, getting lost, unexpected rain, and laughter in the wild."
    },

    {
      title: 'Journey to Jiri: The Switzerland of Nepal',
      slug: 'journey-to-jiri',
      author: 'Dhiraj Jirel',
      date: 'Poush 28, 2081',
      category: 'Travel & Nature',
      tags: ['Nature', 'Tour', 'Travel', 'Adventure', 'Jiri, Nepal', 'Kalinchowk', 'Maghe Sakranti'],
      image: 'assets/Jiri-bazaar-beautiful-picture.JPG',
      description: 'Our adventure to Jiri, often referred to as the "Switzerland of Nepal," was a memorable experience.',
    }
  ];

}
