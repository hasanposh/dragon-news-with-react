import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSidesNav from "../Shared/RightSidesNav/RightSidesNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSidesNav />
        </div>
      </div>
    </div>
  );
};

export default News;
