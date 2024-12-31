import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const result = await fetch("https://meme-api.com/gimme/20");
    const data = await result.json();
    console.log(data);
    setMemes(data?.memes);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {!memes? <Shimmer/> :  memes.map((meme, i) => <MemeCard key={i} data={meme} />)   }
    </div>
  );
};

export default Body;
