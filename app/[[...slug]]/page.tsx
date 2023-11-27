export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>My Page Slug: /{params.slug?.join('/')}</div>;
}
