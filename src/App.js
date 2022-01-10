import { useState, useEffect } from "react";
import Datas from "./Datas";

function App() {
  const [datas, setData] = useState([]);
  const [isLiked, setIsLiked] = useState([]);

  // const url = "https://course-api.com/react-tours-project";
  const url = `https://api.nasa.gov/planetary/apod?api_key=UUMZnsGDZEnSVVpHXB6zxU6T0n7rbFtSU3bLA2fg`;
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData([data]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Datas datas={datas} />
    </main>
  );
}

export default App;
