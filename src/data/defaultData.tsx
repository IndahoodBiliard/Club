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
  price: string;
}

export const carouselHomePage: CarouselHomePageType[] = [
  {
    id: "1",
    src: "/Club/carousel/carousel1.mov",
    subtitle: "Lorem ipsum dolor. Culpa molestiae asperiores quisquam.",
    title: "Lorem ipsum, dolor sit a. Eligendi, quidem!",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "2",
    src: "/Club/carousel/carousel1.mov",
    subtitle: "223Lorem ipsum dolor. Culpa molestiae asperiores quisquam.",
    title: "223Lorem ipsum, dolor sit a. Eligendi, quidem!",
    desc: "233Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "3",
    src: "/Club/carousel/carousel1.mov",
    subtitle: "44Lorem ipsum dolor. Culpa molestiae asperiores quisquam.",
    title: "44Lorem ipsum, dolor sit a. Eligendi, quidem!",
    desc: "44Lorem ipsum dolor sit amet consectetur.",
  },
];

export let bearListData: FoodType[] = [
  {
    id: "1",
    src: 'https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo-assets/images/man-hold-beer-after1logo.jpg',
    name: "beer1",
    price: '12.000d'
  },
  {
    id: "2",
    src: 'https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo-assets/images/man-hold-beer-after1logo.jpg',
    name: "beer2",
    price: '12.000d'
  },
];

for (let i = 1; i <= 10; i++) {
  const foodItem: FoodType = {
    id: `food${i}`,
    src: 'https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo-assets/images/man-hold-beer-after1logo.jpg',
    name: `Món ăn ${i}`,
    price: `${i * 10}$`,
  };
  bearListData.push(foodItem);
}

interface ListMenuProps {
  title: string,
  href: string,
  data: any[]
}

export const dataListMenu = [
  {
    key: 'discount',
    title: 'Discount',
    href: '/beer',
    data: bearListData
  },
  {
    key: 'beer',
    title: 'Beer',
    href: '/beer',
    data: bearListData
  },
  {
    key: 'cocktaiils',
    title: 'Cocktaiils',
    href: '/cocktaiils',
    data: bearListData
  },
  {
    key: 'milktea',
    title: 'Milk tea',
    href: '/milktea',
    data: bearListData
  },
  {
    key: 'food',
    title: 'Food',
    href: '/food',
    data: bearListData
  },
  {
    key: 'food23',
    title: 'food2',
    href: '/food23',
    data: bearListData
  },
  {
    key: 'food33',
    title: 'Food22',
    href: '/food33',
    data: bearListData
  }
]

