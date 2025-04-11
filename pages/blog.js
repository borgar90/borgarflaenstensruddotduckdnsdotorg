

import { getPosts } from "../lib/ghost"; // Norsk: Importerer Ghost API-funksjoner
import Link from "next/link";

// Norsk: Statisk genererer siden med innlegg
export async function getStaticProps() {
  const posts = await getPosts();
  console.log("🚀 Hentet innlegg:", posts);
  return {
    props: { posts },
    revalidate: 60 // Norsk: Rebuilder siden maks hvert minutt
  };
}

export default function Blog() {
  const {posts} = getStaticProps();
  return (
    posts?.length > 0 ? (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blogg</h1>
      {posts?.map(post => (
        <div key={post.id} className="mb-10 border-b pb-6">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`}>
            <span className="text-blue-500 hover:underline">Les mer →</span>
          </Link>
        </div>
      ))}
    </div>
    ) : (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Ingen innlegg funnet</h1>
      </div>
    )
  );
}
