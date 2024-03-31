import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import CategoryCard from "../components/card/category_card";
const Home = () => {
  let [name, setName] = useState("");
  name = useSelector((state) => {
    return state.userdetails.user.name;
  });
  useEffect(() => {});
  return (
    <div>
      <Header></Header>
      <CategoryCard></CategoryCard>
      <p>Data is loading</p>
    </div>
  );
};
export default Home;
