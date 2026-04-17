import { MenuCategory } from '../types';

export const menuAboukir: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    subtitle: 'Pour commencer',
    items: [
      { name: 'Gyoza Bœuf & Gingembre', description: '6 raviolis japonais grillés, sauce soja-sésame', price: '7,50 €' },
      { name: 'Edamame au Sel Marin', description: 'Fèves de soja vapeur, fleur de sel de Guérande', price: '4,50 €' },
      { name: 'Karaage & Kimchi', description: 'Poulet frit japonais, kimchi maison, mayonnaise épicée', price: '9,50 €' },
      { name: 'Takoyaki', description: '6 boulettes de poulpe, mayonnaise japonaise, oignons verts', price: '8,00 €' },
      { name: 'Sunomono', description: 'Salade de concombre au vinaigre de riz et sésame', price: '5,50 €' },
      { name: 'Croquettes de Tofu Pané', description: 'Tofu panko, sauce teriyaki, pickles', price: '7,00 €' },
    ],
  },
  {
    id: 'ramens',
    title: 'Ramens',
    subtitle: 'Nos bouillons mijotés 12h',
    items: [
      { name: 'Tonkotsu Classic', description: 'Bouillon de porc onctueux, chashu, œuf mollet, bambou, nori', price: '14,00 €', tag: 'signature' },
      { name: 'Shoyu Tokyo', description: 'Bouillon clair à la sauce soja, poulet, bambou, menma, nori', price: '13,00 €' },
      { name: 'Miso Hokkaido', description: 'Bouillon miso beurré, chashu, maïs, beurre, ciboulette', price: '13,50 €' },
      { name: 'Tantanmen', description: 'Bouillon sésame-soja, viande hachée épicée, pak-choï, œuf mollet', price: '14,50 €', tag: 'spécialité' },
      { name: 'Ramen Noir', description: 'Tonkotsu à l\'huile de chashu noire, chashu double, bambou, œuf', price: '15,50 €' },
      { name: 'Ramen Végétalien', description: 'Bouillon kombu-légumes, tofu, champignons shiitake, maïs, nori', price: '12,50 €' },
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
      { name: 'Champignons shiitake', price: '2,00 €' },
      { name: 'Nori supplémentaire (3 feuilles)', price: '1,00 €' },
      { name: 'Portion de riz blanc', price: '2,50 €' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'La douceur finale',
    items: [
      { name: 'Mochi Glacé Matcha', description: 'Pâte de riz gluant, glace thé vert (2 pièces)', price: '4,50 €' },
      { name: 'Panna Cotta Sésame Noir', description: 'Crème légère au sésame noir, miel de yuzu', price: '6,00 €' },
      { name: 'Anmitsu', description: 'Gelée kanten, azuki, mochi, sirop de canne', price: '5,50 €' },
    ],
  },
  {
    id: 'boissons',
    title: 'Boissons',
    subtitle: 'Chaudes & froides',
    items: [
      { name: 'Ramune Citron', description: 'Limonade japonaise, parfums variés', price: '4,00 €' },
      { name: 'Thé Matcha Latte', description: 'Matcha cérémoniel, lait vapeur', price: '4,50 €' },
      { name: 'Thé Sencha', description: 'Thé vert japonais traditionnel', price: '3,50 €' },
      { name: 'Bière Asahi (33cl)', price: '6,00 €' },
      { name: 'Sake Junmai', description: 'Sake pur riz, fruité et sec', price: '6,00 €' },
      { name: 'Eau Plate / Pétillante (50cl)', price: '2,50 €' },
      { name: 'Soda (Coca, Fanta, Sprite)', price: '3,00 €' },
    ],
  },
];
