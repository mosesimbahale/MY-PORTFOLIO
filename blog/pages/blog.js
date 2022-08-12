import NavBar from "../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl6otvuej18wv01uj57on4q1u/master"
);

const QUERY = gql`
  {
    posts {
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="grid p-4 border-2 border-pink-600 h-56 content-center">
        <h2 className="text-black bg-pink-600 text-9xl font-extrabold">Blog</h2>
      </div>
      <div className="grid place-content-center m-4">
        {posts.map(({ id, title, slug, coverPhoto }) => (
          <div key={id}>
            <div className="grid grid-cols-2 items-center">
              <div>
                <Image
                  src={coverPhoto.url}
                  alt="blog post cover image"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <h2 className="text-pink-600 text-3xl font-bold">
                  <Link href={`/post/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}