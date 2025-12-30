/**
 * Article data structure for managing organic content on the website.
 * 
 * To add a new article:
 * 1. Add a new object to the articles array below
 * 2. Use a unique id (e.g., "2", "3", etc.)
 * 3. Create a URL-friendly slug (lowercase, hyphens instead of spaces)
 * 4. Write an excerpt (short description shown in article listings)
 * 5. Add your HTML content in the content field (you can use Tailwind prose classes)
 * 6. Set the publishedDate in YYYY-MM-DD format
 * 7. Optionally add a category (e.g., "Dining", "Events", "Local News")
 * 
 * The article will automatically appear on the /articles page and be accessible at /article/[slug]
 */

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  publishedDate: string;
  category?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Best Mexican Restaurants in Apex, NC",
    slug: "best-mexican-restaurants-apex-nc",
    excerpt: "Discover the top Mexican restaurants in Apex, NC, from authentic tacos to family-friendly dining experiences.",
    content: `
      <article class="prose prose-lg max-w-none">
        <h1>Best Mexican Restaurants in Apex, NC</h1>
        <p class="lead">Apex, North Carolina, is home to a vibrant dining scene, and Mexican cuisine holds a special place in the hearts of locals. Whether you're craving authentic street tacos, sizzling fajitas, or fresh guacamole, Apex has something to satisfy every Mexican food lover.</p>
        
        <h2>1. La Cocina Mexican Restaurant</h2>
        <p>Located in the heart of downtown Apex, La Cocina offers an authentic Mexican dining experience with a warm, family-friendly atmosphere. Their menu features traditional dishes like carne asada, enchiladas, and their famous tableside guacamole.</p>
        <p><strong>Must-try:</strong> The sizzling fajitas and their house margaritas</p>
        
        <h2>2. El Dorado Mexican Grill</h2>
        <p>El Dorado is known for its extensive menu and generous portions. This family-owned restaurant has been serving the Apex community for years, with favorites like their loaded nachos and flavorful burritos.</p>
        <p><strong>Must-try:</strong> The El Dorado Special Burrito</p>
        
        <h2>3. Taqueria El Toro</h2>
        <p>For those seeking authentic street-style tacos, Taqueria El Toro is the place to go. This casual spot offers traditional Mexican street food with fresh ingredients and bold flavors.</p>
        <p><strong>Must-try:</strong> The al pastor tacos and horchata</p>
        
        <h2>4. Mi Cancun Mexican Restaurant</h2>
        <p>Mi Cancun brings the flavors of the Yucatan Peninsula to Apex. Their menu includes unique regional specialties alongside classic Mexican favorites, all served in a colorful, festive atmosphere.</p>
        <p><strong>Must-try:</strong> The cochinita pibil and fresh ceviche</p>
        
        <h2>Tips for Dining at Mexican Restaurants in Apex</h2>
        <ul>
          <li>Many restaurants offer lunch specials Monday through Friday</li>
          <li>Call ahead for reservations on weekends, especially for larger groups</li>
          <li>Don't forget to ask about daily specials and seasonal menu items</li>
          <li>Most restaurants are family-friendly and welcome children</li>
        </ul>
        
        <p>Whether you're a longtime resident or just visiting Apex, these Mexican restaurants offer delicious food and warm hospitality that will keep you coming back for more.</p>
      </article>
    `,
    publishedDate: "2025-01-15",
    category: "Dining"
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};

