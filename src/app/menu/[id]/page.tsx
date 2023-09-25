import { FoodType, signature } from '@/data/defaultData'
export async function generateStaticParams() {
  const posts = signature
  return posts.map((post) => ({
    id: post.id,
  }))
}
export default function Page({ params }: { params: { id: string} }) {
  const dataDetail = signature.find(data=> data.id = params.id)
  return <h1>My Page {params.id} {dataDetail?.name}</h1>
}
