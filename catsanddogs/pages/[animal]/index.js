import { useEffect, useState } from "react";
import PageBody from "../../components/PageBody";
import { useRouter } from "next/router";

const animals = () => {
  const router = useRouter();
  const { animal } = router.query;
  const [animals, setAnimals] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(JSON.parse(json).map((x) => x.url));
      // console.log(JSON.parse(json).map(x=> x.url))
      setAnimals(
        JSON.parse(json).map((x) => {
          return x.url;
        })
      );
      // import x from url
      console.log(animals);
      // console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const url = `/api/getpics/${animal}`;
    fetchData(url);
  }, [animal]);

  if (animal && animals.length) {
    return <PageBody title={animal} images={animals} />;
  } else {
    <div>
      <h1>Loading...</h1>
    </div>;
  }
};

export default animals;
