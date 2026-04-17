import { MenuCategory } from '../types';

export const menuSaintDenis: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    subtitle: 'Pour commencer',
    items: [
      { name: 'Gyoza Porc & Chou', description: '6 raviolis japonais grillés, sauce ponzu maison', price: '7,50 €' },
      { name: 'Edamame', description: 'Fèves de soja vapeur, fleur de sel', price: '4,50 €' },
      { name: 'Karaage', description: 'Poulet frit japonais, mayonnaise yuzu, citron vert', price: '9,00 €' },
      { name: 'Takoyaki', description: '6 boulettes de poulpe, sauce okonomiyaki, bonite séchée', price: '8,00 €' },
      { name: 'Agedashi Tofu', description: 'Tofu frit léger, bouillon dashi, daikon râpé', price: '7,00 €' },
      { name: 'Nori & Fromage Frais', description: 'Feuilles de nori, fromage frais à l\'aneth', price: '5,00 €' },
    ],
  },
  {
    id: 'ramens',
    title: 'Ramens',
    subtitle: 'Nos bouillons mijotés 12h',
    items: [
      { name: 'Tonkotsu', description: 'Bouillon de porc crémeux, chashu, œuf mollet, bambou, nori, ciboulette', price: '14,00 €', tag: 'signature' },
      { name: 'Shoyu', description: 'Bouillon de poulet à la sauce soja, chashu, bambou, maïs, nori', price: '13,00 €' },
      { name: 'Miso', description: 'Bouillon miso riche, porc effiloché, maïs, beurre, ciboulette, nori', price: '13,50 €' },
      { name: 'Shio', description: 'Bouillon clair au sel, chashu léger, bambou, œuf mollet, yuzu', price: '13,00 €' },
      { name: 'Spicy Tonkotsu', description: 'Tonkotsu relevé au togarashi, chashu, kimchi, nori, œuf mollet', price: '15,00 €', tag: 'piquant' },
      { name: 'Ramen Végétarien', description: 'Bouillon kombu-shiitake, tofu soyeux, légumes saisonniers, nori, bambou', price: '12,50 €' },
    ],
  },
  {
    id: 'supplements',
    title: 'Suppléments',
    subtitle: 'Personnalisez votre bol',
    items: [
      { name: 'Œuf mollet ajouté', price: '2,00 €' },
      { name: 'Supplément chashu (2 tranches)', price: '3,00 €' },
      { name: 'Bambou (menma)', price: '1,50 €' },
      { name: 'Maïs grillé', price: '1,50 €' },
      { name: 'Beurre Maïs', price: '1,00 €' },
      { name: 'Nori supplémentaire (3 feuilles)', price: '1,00 €' },
      { name: 'Portion de riz', price: '2,50 €' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'La douceur finale',
    items: [
      { name: 'Mochi Glacé', description: 'Pâte de riz gluant, glace vanille ou matcha (2 pièces)', price: '4,50 €' },
      { name: 'Cheesecake Matcha', description: 'Cheesecake japonais léger, coulis de thé vert, sésame', price: '6,50 €' },
      { name: 'Dorayaki', description: 'Deux crêpes moelleuses fourrées à la crème de haricots rouges', price: '4,00 €' },
    ],
  },
  {
    id: 'boissons',
    title: 'Boissons',
    subtitle: 'Chaudes & froides',
    items: [
      { name: 'Ramune', description: 'Limonade japonaise, parfums variés', price: '4,00 €' },
      { name: 'Thé Matcha Chaud', price: '3,50 €' },
      { name: 'Thé Hojicha', description: 'Thé torréfié japonais, saveur boisée', price: '3,50 €' },
      { name: 'Bière Kirin (33cl)', price: '6,00 €' },
      { name: 'Sake', description: 'Nihonshu traditionnel, chaud ou froid', price: '5,50 €' },
      { name: 'Eau Plate / Pétillante (50cl)', price: '2,50 €' },
      { name: 'Soda (Coca, Fanta, Sprite)', price: '3,00 €' },
    ],
  },
];
