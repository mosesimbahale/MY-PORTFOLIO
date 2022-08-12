import NavBar from "../../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl6otvuej18wv01uj57on4q1u/master"
);

const QUERY = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      description
      projectImage {
        url
      }
      demoUrl
      sourceUrl
    }
  }
`;

export const SLUGLIST = gql`
  {
    projects {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const project = data.project;

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = await graphcms.request(SLUGLIST);

  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: "blocking",
  };
}

export default function Project({ project }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="m-8">
        <div>
          <h2 className="text-pink-600 font-extrabold text-9xl">{project.title}</h2>
        </div>
        <Image
          src={project.projectImage.url}
          alt="project image"
          width={300}
          height={300}
        />
        <p>{project.description}</p>
        <Link href={project.demoUrl}>
          <a className="hover:text-pink-600 pr-2 font-bold">DEMO</a>
        </Link>
        <Link href={project.sourceUrl}>
          <a className="hover:text-pink-600 pr-2 font-bold">SOURCE</a>
        </Link>
      </div>
    </div>
  );
}