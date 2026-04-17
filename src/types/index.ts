export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
  lang?: string;
}
