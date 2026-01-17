// app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "hello-world" },
  ];
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}
