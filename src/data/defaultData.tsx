import React from "react";

export interface CarouselHomePageType {
  id: string;
  src: string;
  subtitle: string;
  title: string;
  desc: string;
}
export interface FoodType {
  id: string;
  src: string;
  name: string;
  subTitle: string;
  detail: string;
  price: string;
}

export const carouselHomePage: CarouselHomePageType[] = [
  {
    id: "1",
    src: "/Club/carousel/carousel1.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "INDAHOOD  / n / :",
    desc: "Homiee thich uong gi, chung toi ban cai do.",
  },
  {
    id: "2",
    src: "/Club/carousel/carousel2.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "I’ll be die,\n Hiphop never die.",
    desc: "Chung toi khong choi HipHop, HipHop choi chung toi.",
  },
  {
    id: "3",
    src: "/Club/carousel/carousel3.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "PEACE!",
    desc: "INDAHOOD khong chi la INDAHOOD, INDAHOOD la mot he tu tuong",
  },
];

export let signature: FoodType[] = [
  {
    id: "1",
    src: '/Club/menu/images.jpg',
    name: "Vừa Đấm Vừa Xoa",
    subTitle: "Shot ăn chơi",
    detail: "Cointreau, Baileys, Syrup Blue Caracao",
    price: '12.000d'
  },
  {
    id: "2",
    src: '/Club/menu/images.jpg',
    name: "Vạn Sự Tuỳ Duyên",
    subTitle:"Your Choice Your Desition",
    detail: "Tuỳ duyên nên tuỳ ý bạn chọn",
    price: '12.000d'
  },
  {
    id: "3",
    src: '/Club/menu/images.jpg',
    name: "Mật Ngọt Chết Ruồi",
    subTitle:"Trà Sữa Cùng Cồn",
    detail: "Rum, Baileys, Cream, Cốt Dừa, Đường",
    price: '12.000d'
  },
  {
    id: "4",
    src: '/Club/menu/images.jpg',
    name: "Hồng Nhan Bạc Phận",
    subTitle: "Ngọt Ngào Kh Béo",
    detail: 'Gin, Rasberry, Chanh, Đường, Egg White',
    price: '12.000d'
  },
  {
    id: "5",
    src: '/Club/menu/images.jpg',
    name: "Than Thân Trách Phận",
    subTitle: "Đắng, Cay, Ngọt, nhưng thiếu Bùi",
    detail: 'Vodka, Gin, Tabasco, Rasberry, Bitter, Rasberry',
    price: '12.000d'
  },
  {
    id: "6",
    src: '/Club/menu/images.jpg',
    name: "InDaHood!!!!",
    subTitle: "Ngọt, Béo",
    detail: 'Vodka, Kahlua, Cream, Baileys',
    price: '12.000d'
  },
];

export let cocktail: FoodType[] = [
  {
    id: "1",
    src: '/Club/menu/images.jpg',
    name: "Whisky Sour",
    subTitle: "Chua Chua Ít Ngọt",
    detail: "Whisky, Chanh, Đường, Egg White",
    price: '12.000d'
  },
  {
    id: "2",
    src: '/Club/menu/images.jpg',
    name: "Long island Iced Tea",
    subTitle:"Trà Đá Xỉn",
    detail: "Rum, Tequila, Vodka, Gin, Cointreau, Chanh, Coke",
    price: '12.000d'
  },
  {
    id: "3",
    src: '/Club/menu/images.jpg',
    name: "Magarita",
    subTitle:"Chua Mặn Cùng Chút Ngọt",
    detail: "Tequila, Cointreau, Chanh, Đường",
    price: '12.000d'
  },
  {
    id: "4",
    src: '/Club/menu/images.jpg',
    name: "Blue Magarita",
    subTitle: "Như Magarita Nhưng Khác Màu",
    detail: 'Tequila, Blue Caracao, Chanh, Đường',
    price: '12.000d'
  },
  {
    id: "5",
    src: '/Club/menu/images.jpg',
    name: "Gin Fizz",
    subTitle: "Giải Khát Có Cồn",
    detail: 'Gin, Chanh, Đường, Soda',
    price: '12.000d'
  },
];

// for (let i = 1; i <= 10; i++) {
//   const foodItem: FoodType = {
//     id: `food${i}`,
//     src: '/Club/menu/images.jpg',
//     name: `Món ăn ${i}`,
//     price: `${i * 10}$`,
//   };
//   bearListData.push(foodItem);
// }

export interface ListMenuProps {
  key: string,
  name: string,
  title: string,
  href: string,
  data: FoodType[]
}

export const dataListMenu: ListMenuProps[] = [
  {
    key: 'discount',
    title: 'Discount',
    name: 'Discount',
    href: '/menu',
    data: signature
  },
  {
    key: 'signature',
    title: 'Signature',
    name: 'Sít nây chờ của quán',
    href: '/menu',
    data: signature
  },
  {
    key: 'beer',
    title: 'Beer',
    name: 'Beer',
    href: '/menu',
    data: signature
  },
  {
    key: 'cocktail',
    title: 'Cocktaiils',
    name: 'Cocktail mà quán nào cũng có',
    href: '/menu',
    data: cocktail
  },
  {
    key: 'milktea',
    title: 'Milk tea',
    name: 'Milk tea',
    href: '/menu',
    data: cocktail
  },
  {
    key: 'gas',
    title: 'Gas',
    name: 'Gas',
    href: '/menu',
    data: cocktail
  },
  {
    key: 'foods',
    title: 'Foods',
    name: 'Foods',
    href: '/menu',
    data: cocktail
  },
]

