import { useState, useEffect } from "react";
import Datas from "./Datas";

function App() {
  const [datas, setData] = useState([]);
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
    <div>
      <Datas datas={datas} />
    </div>
  );
}

export default App;
