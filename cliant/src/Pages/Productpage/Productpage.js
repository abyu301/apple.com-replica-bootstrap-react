import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

const Productpage = () => {
  const [products, setProducts] = useState([]);
  console.log(first)
  const { productid } = useParams();

  useEffect(() => {
    fetch("/iphones.json")
      .then((response) => response.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (produc) => produc.product_url === productid
        );
        setProducts(singleProduct);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productid]);

  console.log(products);

  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {products.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let details = product.product_description;

              return (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="product-image">
                        <img src={img} alt={title} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
};

export default Productpage;
