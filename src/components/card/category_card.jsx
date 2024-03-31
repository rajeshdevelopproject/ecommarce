import { useEffect, useState } from "react";
import electronics from "@/../../public/img/electronics.jpg";
import jaw from "@/../../public/img/jewelery.jpg";
import men from "@/../../public/img/mens.jpg";
import women from "@/../../public/img/women.jpg";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./category.css";
const CategoryCard = () => {
  let [catergory, setCategory] = useState([]);
  let [isloading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        let img = {
          electronics: "electronics",
          jewelery: "jaw",
          men: "men",
          women: "women",
        };
        for (let x of json) {
          if (img.indexOf(x[0:3])){
            
          }
        }

        setCategory(json);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      });
  }, []);

  return (
    <>
      {isloading ? (
        <div>Page is Loading..................</div>
      ) : (
        <div className="main_div">
          {catergory.map((currentvalue, index) => {
            return (
              <>
                <div className="gategory_details">
                  <div>
                    <img src=""></img>
                  </div>
                  <div>content</div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CategoryCard;
