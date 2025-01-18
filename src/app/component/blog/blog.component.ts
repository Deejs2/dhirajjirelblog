import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'Journey to Jiri: The Switzerland of Nepal',
      slug: 'journey-to-jiri',
      author: 'Dhiraj Jirel',
      date: 'Poush 28, 2081',
      category: 'Travel',
      tags: ['Nature', 'Tour', 'Travel', 'Adventure', 'Jiri, Nepal', 'Kalinchowk', 'Maghe Sakranti'],
      image: 'assets/Jiri-bazaar-beautiful-picture.JPG',
      description: 'Our adventure to Jiri, often referred to as the "Switzerland of Nepal," was a memorable experience.',
      content: `
        <p>Our adventure to Jiri, often referred to as the "Switzerland of Nepal," was a memorable experience. A group of ten friends embarked on this journey, reserving an electric van and departing from Chabahil, Kathmandu, at 7:00 AM.</p>
      
              <h2 class="section-title">The Start of the Journey</h2>
              <p>We stopped at Sukute Beach for breakfast, enjoying a traditional Nepali meal of roti and tarkari. Afterward, we continued to Charikot, where we had lunch at 1:00 PM. Spending about 40 minutes there, we then headed toward Jiri, driving along smooth and scenic roads. By 3:50 PM, we arrived at Greenland Hotel in Jiri.</p>
      
              <img src="assets/greenland-hotel-jiri.jpg" class="img-fluid py-3" alt="Greenland Hotel Of Jiri">
              <img src="assets/greenland-hotel.jpg" class="img-fluid py-3" alt="Greenland Hotel Of Jiri Another Image">
      
              <p>After freshening up and changing clothes, we strolled down to Lincoln Town and visited the Jiri Airport. We also relaxed at the fish pond area, lighting a fire and soaking in the natural beauty. As dusk approached, we returned to the hotel through a jungle path.</p>
      
              <h2 class="section-title">Evening Delights</h2>
              <p>The Greenland Hotel impressed us with its delicious food, clean and warm rooms, and welcoming atmosphere. After dinner, we enjoyed the rooftop ambiance, sipping on tongba (a local beverage) and beer while savoring sukuti (fried dried meat) and instant noodles. It was a night filled with laughter and camaraderie.</p>
      
              <h2 class="section-title">Morning Bliss</h2>
              <p>The next morning, the breathtaking view of Jiri's Lincoln Bazaar and Jiri Airport from the hotel rooftop made my day. After tea and a hearty lunch, we headed to Panch Danda. Along with two friends, I performed a pooja and climbed the hill with snacks and juice. We reunited with our group at the top, taking in the magnificent views and capturing the moment with photographs.</p>
      
              <img src="assets/dhiraj-jirel-with-friends-at-jiri-panch-danda.JPG" class="img-fluid py-3" alt="Sunrise at Panch Danda">
      
              <p>That evening, we enjoyed a barbecue, music, and dancing, making it another memorable night.</p>
      
              <h2 class="section-title">Celebrating Maghe Sakranti</h2>
              <p>On Maghe Sakranti, some of us visited our maternal homes to celebrate with family, while others joined their hosts. After enjoying traditional festivities, we regrouped and headed to Kalinchowk, adding a new member to our party. By 8:00 PM, we reached Kuri Village, where the illuminated nightscape and freezing temperatures created a magical atmosphere. We enjoyed dinner and warm fires before calling it a night.</p>
      
              <h2 class="section-title">Hiking to Kalinchowk Temple</h2>
              <p>At 5:30 AM, we began our hike to Kalinchowk Temple. The cold weather was worth enduring for the stunning sunrise and panoramic views. After worshipping at the temple and taking photographs, we explored another hill for even better vistas. The descent to Kuri Village was quicker, with some friends opting for a cable car ride.</p>
      
              <img src="assets/dhiraj-jirel-with-friends-at-kalinchowk-temple.JPG" class="img-fluid py-3" alt="Kalinchowk Temple">
      
              <h2 class="section-title">The Journey Home</h2>
              <p>After packing our belongings, three friends returned to Jiri while the rest of us headed back to Kathmandu. We stopped for lunch in Charikot, marking the end of an exhausting yet rewarding trip. Despite the fatigue, the memories we made during this journey will be cherished forever.</p>
              `
    }
  ];

  constructor(private router: Router) { }

  onClickBlog(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }

  currentPage = 1;
  itemsPerPage = 2;

  get paginatedPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.blogPosts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.blogPosts.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}