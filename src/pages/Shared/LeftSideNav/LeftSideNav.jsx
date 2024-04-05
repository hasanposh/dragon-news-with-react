import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useState(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">All Categories</h2>
      {categories.map((category) => (
        <Link
        className="block text-xl hover:opacity-100 opacity-60 font-semibold"
        key={category.id}
        to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
