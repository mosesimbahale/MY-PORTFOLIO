import NavBar from "../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl6otvuej18wv01uj57on4q1u/master"
);

const QUERY = gql`
  {
    projects {
      id
      slug
      title
      projectImage {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="grid p-4 border-2 border-pink-600 h-56 content-center">
        <h2 className="text-black bg-pink-600 text-9xl font-extrabold">
          Projects
        </h2>
      </div>
      <div className="grid place-content-center m-4">
        {projects.map(({ id, title, slug, projectImage }) => (
          <div key={id}>
            <div className="grid grid-cols-2 items-center">
              <div>
                <Image
                  src={projectImage.url}
                  alt="blog project cover image"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <h2 className="text-pink-600 text-3xl font-bold">
                  <Link href={`/project/${slug}`}>
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