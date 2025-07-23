import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Post {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent implements OnInit {

  post: any;
  slug: any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.router.snapshot.params['slug'];
    this.post = this.postList.find(post => post.slug === this.slug);
  }

  onClickGoBack() {
    window.history.back();
  }

  postList: Post[] = [{
    title: 'Journey to Jiri: The Switzerland of Nepal',
    slug: 'journey-to-jiri',
    author: 'Dhiraj Jirel',
    date: 'Poush 28, 2081',
    category: 'Travel & Nature',
    tags: ['Nature', 'Tour', 'Travel', 'Adventure', 'Jiri, Nepal', 'Kalinchowk', 'Maghe Sakranti'],
    image: 'assets/Jiri-bazaar-beautiful-picture.JPG',
    content: `
      <p>Our adventure to Jiri, often referred to as the "Switzerland of Nepal," was a memorable experience. A group of ten friends embarked on this journey, reserving an electric van and departing from Chabahil, Kathmandu, at 7:00 AM.</p>
    
            <h2 class="section-title">The Start of the Journey</h2>
            <p>We stopped at Sukute Beach for breakfast, enjoying a traditional Nepali meal of roti and tarkari. Afterward, we continued to Charikot, where we had lunch at 1:00 PM. Spending about 40 minutes there, we then headed toward Jiri, driving along smooth and scenic roads. By 3:50 PM, we arrived at Greenland Hotel in Jiri.</p>
    
            <img src="assets/greenland-hotel-jiri.jpg" class="img-fluid py-3" alt="Greenland Hotel Of Jiri" loading="lazy">
            <img src="assets/greenland-hotel.jpg" class="img-fluid py-3" alt="Greenland Hotel Of Jiri Another Image" loading="lazy">
    
            <p>After freshening up and changing clothes, we strolled down to Lincoln Town and visited the Jiri Airport. We also relaxed at the fish pond area, lighting a fire and soaking in the natural beauty. As dusk approached, we returned to the hotel through a jungle path.</p>
    
            <h2 class="section-title">Evening Delights</h2>
            <p>The Greenland Hotel impressed us with its delicious food, clean and warm rooms, and welcoming atmosphere. After dinner, we enjoyed the rooftop ambiance, sipping on tongba (a local beverage) and beer while savoring sukuti (fried dried meat) and instant noodles. It was a night filled with laughter and camaraderie.</p>
    
            <h2 class="section-title">Morning Bliss</h2>
            <p>The next morning, the breathtaking view of Jiri's Lincoln Bazaar and Jiri Airport from the hotel rooftop made my day. After tea and a hearty lunch, we headed to Panch Danda. Along with two friends, I performed a pooja and climbed the hill with snacks and juice. We reunited with our group at the top, taking in the magnificent views and capturing the moment with photographs.</p>
    
            <img src="assets/dhiraj-jirel-with-friends-at-jiri-panch-danda.JPG" class="img-fluid py-3" alt="Sunrise at Panch Danda" loading="lazy">
    
            <p>That evening, we enjoyed a barbecue, music, and dancing, making it another memorable night.</p>
    
            <h2 class="section-title">Celebrating Maghe Sakranti</h2>
            <p>On Maghe Sakranti, some of us visited our maternal homes to celebrate with family, while others joined their hosts. After enjoying traditional festivities, we regrouped and headed to Kalinchowk, adding a new member to our party. By 8:00 PM, we reached Kuri Village, where the illuminated nightscape and freezing temperatures created a magical atmosphere. We enjoyed dinner and warm fires before calling it a night.</p>
    
            <h2 class="section-title">Hiking to Kalinchowk Temple</h2>
            <p>At 5:30 AM, we began our hike to Kalinchowk Temple. The cold weather was worth enduring for the stunning sunrise and panoramic views. After worshipping at the temple and taking photographs, we explored another hill for even better vistas. The descent to Kuri Village was quicker, with some friends opting for a cable car ride.</p>
    
            <img src="assets/dhiraj-jirel-with-friends-at-kalinchowk-temple.JPG" class="img-fluid py-3" alt="Kalinchowk Temple" loading="lazy">
    
            <h2 class="section-title">The Journey Home</h2>
            <p>After packing our belongings, three friends returned to Jiri while the rest of us headed back to Kathmandu. We stopped for lunch in Charikot, marking the end of an exhausting yet rewarding trip. Despite the fatigue, the memories we made during this journey will be cherished forever.</p>
            `
  },

  {
    title: "Ambition Hack Fest 2082 – Team BROGRAMMERS Shine with Social Impact Solution",
    slug: "ambition-hackfest-2082-brogrammers",
    author: "Dhiraj Jirel",
    date: "Ashwin 15, 2082",
    category: "Hackathon",
    tags: ["Hackathon", "Angular", "Spring Boot", "PostgreSQL", "Khalti", "Social Impact", "BROGRAMMERS", "Ambition College"],
    image: "assets/hackfest/price-receive.JPG",
    // "content": "The vibrant tech atmosphere at *Ambition Hack Fest 2082*, hosted by Ambition College, witnessed the spirit of innovation, collaboration, and social impact come to life. Over the span of **2 nights and 3 days**, creative minds from across the region came together to build meaningful technology solutions. Among them stood **Team BROGRAMMERS**, who emerged victorious in the *Social Impact Track*, securing a prize of **NPR 10,000**.\n\n### About Our Project\nOur team focused on building a full-stack **web application** tailored for real-world social impact. The stack we chose included:\n\n- **Frontend**: Angular\n- **Backend**: Spring Boot\n- **Database**: PostgreSQL\n- **Payment Integration**: Khalti (Sandbox)\n\nThis seamless blend of technologies allowed us to create a scalable, responsive, and secure platform with digital payment features, addressing real problems in a digital-first way.\n\n### Team BROGRAMMERS\nOur synergy and diverse skillset helped us tackle the project challenges with confidence. The team members were:\n\n- **Utsab Dahal** – Angular & Spring Boot Developer\n- **Pasang Gelbu Sherpa** – Spring Boot Developer\n- **Chitra Prsd Acharya** – Angular Developer\n- **Dhiraj Jirel** – Angular & Spring Boot Developer\n\nWe divided the responsibilities strategically, enabling us to work in parallel and meet critical milestones within the tight hackathon schedule.\n\n### The Experience\nFrom sleepless coding nights to passionate debugging sessions, the experience was unforgettable. Ambition Hack Fest not only provided the perfect competitive environment but also offered mentorship, networking opportunities, and a chance to learn from fellow developers and industry experts.\n\nThe recognition in the **Social Impact category** further validated our goal to build something that creates a difference. We are proud of our product, and even prouder of the teamwork and dedication we showcased.\n\n### Final Thoughts\nWinning is always rewarding, but the real victory was the journey itself—collaborating, learning, innovating, and delivering. We thank Ambition College for organizing such an inspiring event and look forward to many more hackathons in the future.\n\n> \"We code not just to build apps, but to build a better future.\" – BROGRAMMERS\n\nStay tuned as we continue to evolve this project into something impactful beyond the hackathon!"
    content: `
      <p> The vibrant tech atmosphere at *Ambition Hack Fest 2082*, hosted by Ambition College, witnessed the spirit of innovation, collaboration, and social impact come to life. Over the span of **2 nights and 3 days**, creative minds from across the region came together to build meaningful technology solutions. Among them stood **Team BROGRAMMERS**, who emerged victorious in the *Social Impact Track*, securing a prize of **NPR 10,000**.</p>

      <h3>About Our Project</h3>
      <p>Our team focused on building a full-stack **web application** tailored for real-world social impact. The stack we chose included:</p>
      <ul>
        <li><strong>Frontend</strong>: Angular</li>
        <li><strong>Backend</strong>: Spring Boot</li>
        <li><strong>Database</strong>: PostgreSQL</li>
        <li><strong>Payment Integration</strong>: Khalti (Sandbox)</li>
      </ul>
      <p>This seamless blend of technologies allowed us to create a scalable, responsive, and secure platform with digital payment features, addressing real problems in a digital-first way.</p>

      <h3>Team BROGRAMMERS</h3>
      <p>Our synergy and diverse skillset helped us tackle the project challenges with confidence. The team members were:</p>
      <ul>
        <li><strong>Utsab Dahal</strong> – Angular & Spring Boot Developer</li>
        <li><strong>Pasang Gelbu Sherpa</strong> – Spring Boot Developer</li>
        <li><strong>Chitra Prsd Acharya</strong> – Angular Developer</li>
        <li><strong>Dhiraj Jirel</strong> – Angular & Spring Boot Developer</li>
      </ul>
      <p>We divided the responsibilities strategically, enabling us to work in parallel and meet critical milestones within the tight hackathon schedule.</p>

      <img src="assets/hackfest/mentor-suggestion.JPG" class="img-fluid py-3" alt="Team BROGRAMMERS" loading="lazy">

      <h3>The Experience</h3>
      <p>From sleepless coding nights to passionate debugging sessions, the experience was unforgettable. Ambition Hack Fest not only provided the perfect competitive environment but also offered mentorship, networking opportunities, and a chance to learn from fellow developers and industry experts.</p>

      <p>The recognition in the **Social Impact category** further validated our goal to build something that creates a difference. We are proud of our product, and even prouder of the teamwork and dedication we showcased.</p>

      <img src="assets/hackfest/hackthon-presentation.JPG" class="img-fluid py-3" alt="Team BROGRAMMERS" loading="lazy">

      <h3>Final Thoughts</h3>
      <p>Winning is always rewarding, but the real victory was the journey itself—collaborating, learning, innovating, and delivering. We thank Ambition College for organizing such an inspiring event and look forward to many more hackathons in the future.</p>

      <blockquote> "We code not just to build apps, but to build a better future." – BROGRAMMERS </blockquote>

      <p>Stay tuned as we continue to evolve this project into something impactful beyond the hackathon!</p>
      `
  },

  {
    title: "A Wild Day Out at Shivapuri National Park – Nature, Adventure, and Friendship",
    slug: "shivapuri-day-out-adventure-colleagues",
    author: "Dhiraj Jirel",
    date: "Jestha 10, 2082",
    category: "Travel & Nature",
    tags: ["Shivapuri", "Hiking", "Nature", "Adventure", "Waterfall", "Rain", "Friends", "College Life"],
    image: "assets/travel/sivapuri-gate.jpg",
    content: `
      <p>Sometimes, the best memories are made when things don’t go as planned—and our recent <strong>day out to Shivapuri National Park</strong> was a perfect example of that. What started as a simple nature trip with colleagues quickly turned into a thrilling adventure filled with <strong>jungles, waterfalls, surprises, and rain-soaked laughter</strong>.</p>

      <h3>Into the Wild</h3>
      <p>Our journey began with excitement as we entered the lush green trails of <strong>Shivapuri National Park</strong>, surrounded by the chirping of birds and the fresh scent of nature. As we trekked deeper into the forest, the trail became more exciting—narrow paths, thick trees, and a true jungle experience. It was both peaceful and adventurous.</p>

      <h3>Discovery and Detour</h3>
      <p>While wandering, we stumbled upon a <strong>hidden waterfall</strong>, cascading down the rocks, untouched and serene. We spent some time there enjoying the cool mist and taking group photos. But as we moved forward, we <strong>took a wrong turn and got lost</strong> in the maze-like trails of the jungle.</p>

      <p>It took us almost <strong>two hours</strong> of retracing steps, navigating steep slopes, and using phone maps with weak signals to finally <strong>find our way out</strong>. It was exhausting yet exciting—an adventure none of us will forget.</p>

      <img src="assets/travel/enjoying-waterfall.jpg" class="img-fluid py-3" alt="Enjoying Waterfall" loading="lazy" width="100%">

      <h3>Rain, Umbrellas & Laughter</h3>
      <p>As we reached the end of the trail and thought the adventure was over, <strong>rain suddenly poured down</strong>, soaking us completely. Even those with umbrellas couldn’t escape it. Instead of rushing for cover, we embraced the moment—<strong>laughing, singing, and dancing</strong> in the rain like kids.</p>

      <h3>A Day to Remember</h3>
      <p>This trip wasn’t just about the destination, but the experience. From getting lost in the jungle to finding joy in the rain, it reminded us how powerful nature can be and how memorable time spent with friends can become when shared in the wild.</p>

      <blockquote>"We got lost in the forest, but found happiness in the moment."</blockquote>

      <p>Here's to more adventures, more laughter, and more wild days like this with great people.</p>
    `
  }

  ];
};
