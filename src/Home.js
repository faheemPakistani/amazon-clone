import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        />
        <div className="home_row">
          <Product
            id={1}
            title="The LeanLean LeansLeantLeanLeanLeanLeanLeanLeanLeanartup"
            image="https://sc02.alicdn.com/kf/He7048bf8312f49f289e2e9aa23d4745fW/220907832/He7048bf8312f49f289e2e9aa23d4745fW.jpg_.webp"
            price={29.99}
            rating={5}
          />
          <Product
            id={2}
            title="The Lean startup"
            image="https://static-01.daraz.com.bd/p/1226a4daeec43fb355991c674ac74c23.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={3}
            title="The Lean startup"
            image="https://static-01.daraz.pk/p/b25ad65c86abeb065b11059dfd144d60.jpg"
            price={29.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={4}
            title="The Lean startup"
            image="https://www.iprintsol.pk/wp-content/uploads/2019/10/Polo-T-shirt-600x563.png"
            price={29.99}
            rating={5}
          />
          <Product
            id={5}
            title="The Lean startup"
            image="http://thestore.pk/image/cache/data/Kids%20Psl%20/Grey-background-islamabad-450x450.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={6}
            title="The Lean startup"
            image="https://www.telemart.pk/uploads/product_image/product_129653_1.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={7}
            title="The Lean startup"
            image="https://cdn.shopify.com/s/files/1/1621/3373/products/active-t-shirt-star-wars-trooper-t-shirt-15968887013464_large.png?v=1605471214"
            price={29.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={8}
            title="The LeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLeanLean startup"
            image="https://www.iprintsol.pk/wp-content/uploads/2019/10/Polo-T-shirt-600x563.png"
            price={29.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
