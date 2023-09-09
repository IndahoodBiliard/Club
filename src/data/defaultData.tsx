export interface CarouselHomePageType  {
    id: string
    src: string,
    name: string
}
export interface FoodType  {
    id: string,
    name: string
}

export const carouselHomePage : CarouselHomePageType[] = [
    {
        id: '1',
        src: 'https://video.richardmille.com/desktop/the-brand-history-rm-homepage.mp4',
        name: '213412312313'
    },
    {
        id: '2',
        src: 'https://video.richardmille.com/tablet/header-collection-women-04_1.mp4',
        name: '213412312313'
    },
    {
        id: '3',
        src: 'https://video.richardmille.com/desktop/the-brand-history-rm-homepage.mp4',
        name: '213412312313'
    }
]

export const  foodListData: FoodType[] = [
    {
        id: '1',
        name: 'asdasd'
    },
    {
        id: '2',
        name: 'asdasd2'
    }
]