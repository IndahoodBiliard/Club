import { FoodType, bearListData } from '@/data/defaultData'
export async function generateStaticParams() {
  const posts = bearListData
  return posts.map((post) => ({
    id: post.id,
  }))
}
export default function Page({ params }: { params: { id: string} }) {
  const dataDetail = bearListData.find(data=> data.id = params.id)
  return <h1>My Page {params.id} {dataDetail?.name}</h1>
}
