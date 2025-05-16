export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Tips & Tricks" | "Cautions" | "Destination";
  image: string;
  author: string;
  date: string;
  slug: string;
}
