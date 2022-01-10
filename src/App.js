import { useEffect } from "react";
import Datas from "./Datas";

function App() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=UUMZnsGDZEnSVVpHXB6zxU6T0n7rbFtSU3bLA2fg`;
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="App">
      <Datas />
    </div>
  );
}

export default App;
