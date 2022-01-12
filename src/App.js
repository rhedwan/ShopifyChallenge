import Datas from "./Datas";
import { useFetch } from "./useFetch";

function App() {
  // const [isLiked, setIsLiked] = useState([]);

  const apiKey = "UUMZnsGDZEnSVVpHXB6zxU6T0n7rbFtSU3bLA2fg";
  // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2017-07-10
  `;
  const datas = useFetch(url);
  return (
    <main>
      <Datas datas={datas} />
    </main>
  );
}

export default App;
