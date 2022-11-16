import { useEffect, useState } from "react";
import PageBody from "../../components/PageBody";
import { useRouter } from "next/router";

const animals = () => {
  const router = useRouter();
  const { animal } = router.query;

  if (animal && animals.length) {
    return (
      <div>
        <PageBody title={animal} images={animals} />
        <p>Data Fetched on last build: {new Date(date).toLocaleString()}</p>
      </div>
    );
  } else {
    return <div>Loading image...</div>;
  }
};

export const getStaticPaths = async () => {
  // Get all of the paths
  // This will be run on build

  return {
    paths: [{ params: { animal: "cats" } }, { params: { animal: "dogs" } }],
    // Any paths not returned by getStaticPaths will result in a 404 page
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const url = `/api/getpics/${params.animal}`;
  const animals = fetchData(url);

  const date = new Date().toISOString();

  return {
    props: { date, animals },
  };
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(JSON.parse(json).map((x) => x.url));
    // console.log(JSON.parse(json).map(x=> x.url))

    // import x from url
    console.log(animals);
    // console.log(json);
  } catch (error) {
    console.log("error", error);
  }
  return JSON.parse(json).map((x) => x.url);
};

export default animals;
