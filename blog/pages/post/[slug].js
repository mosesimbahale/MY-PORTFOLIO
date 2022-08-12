import NavBar from "../../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import style from "../../components/Post.module.css";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl6otvuej18wv01uj57on4q1u/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      author {
        name
      }
      content {
        html
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const post = data.post;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="m-8">
        <div>
          <h2 className="text-pink-600 font-extrabold text-9xl">
            {post.title}
          </h2>
        </div>
        <p className="text-xs">{post.author.name}</p>
        <div
          className={`post ${style.post}`}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </div>
  );
}
