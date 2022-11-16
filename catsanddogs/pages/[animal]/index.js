import PageBody from "../../components/PageBody";

const animals = ({ date, animalType, animalsImg }) => {
  return (
    <div>
      <PageBody title={animalType} images={animalsImg} />
      <p>Data Fetched on last build: {new Date(date).toLocaleString()}</p>
    </div>
  );
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
  const animalType = params.animal;
  const url = `http://localhost:3000/api/getpics/${animalType}`;
  console.log(url);
  const animalsImg = await fetchData(url);
  console.log(animalsImg);

  const date = new Date().toISOString();

  return {
    props: { date, animalType, animalsImg },
    revalidate: 10,
  };
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(JSON.parse(json).map((x) => x.url));
    // console.log(JSON.parse(json).map(x=> x.url))

    // import x from url
    console.log(animals);
    // console.log(json);
    return JSON.parse(json).map((x) => x.url);
  } catch (error) {
    console.log("error", error);
  }
};

export default animals;
