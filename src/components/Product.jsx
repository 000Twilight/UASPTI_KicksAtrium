import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import Loading from "./Loading";
import axios from "axios";

function Product({ fullShop, forumData }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        let result = [];

        if (fullShop) {
          const fullShopResult = await fullShop();
          result = result.concat(fullShopResult);
        }

        if (forumData) {
          const forumDataResult = await forumData();
          result = result.concat(forumDataResult);
        }

        const selectedProduct = result.find((item) => item.id === id);
        setProduct(selectedProduct);
        // console.log(selectedProduct);

        const apiKey = "c9b940af29msh75a51aef55d2896p1fae7cjsn7f32975281b2";
        const apiUrl = "https://kohls.p.rapidapi.com/products/detail";

        const options = {
          method: "GET",
          url: apiUrl,
          params: {
            webID: selectedProduct.id,
          },
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "kohls.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        // console.log(response);
        // console.log(response.data);
        const productData = response.data.payload.products[0];
        // console.log(productData);
        // console.log(productData.metaInfo[0].metaDescription);
        // console.log(productData.price.regularPrice.minPrice);
        // console.log(productData.images[0].url);
        // console.log(productData.images[0].altText);
        // console.log(productData.avgRating);

        setProduct(() => ({
          price: productData.price.regularPrice.minPrice,
          details: productData.metaInfo[0].metaDescription,
          rating: productData.avgRating,
          name: productData.productTitle,
          image: productData.images[0].url,
          alt: productData.images[0].altText,
          id: productData.webID,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  function ratingStar(rating) {
    const fullStar = Math.floor(rating);
    const Starleft = rating - fullStar;

    const stars = [];

    for (let i = 0; i < fullStar; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-indigo-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    }

    if (Starleft >= 0.5) {
      stars.push(
        <svg
          key="half-star"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-indigo-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-indigo-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    }
    return stars;
  }

  const ratingStars = ratingStar(product.rating);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.alt}
            className="lg:w-1/2 w-full object-contain object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {ratingStars}
                <span className="text-gray-600 ml-3">
                  {product.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.details}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>6.5</option>
                    <option>7</option>
                    <option>7.5</option>
                    <option>8</option>
                    <option>8.5</option>
                    <option>9</option>
                    <option>9.5</option>
                    <option>10</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              {isInCart(product) && (
                <ButtonAddMore
                  onClick={() => {
                    increase(product);
                  }}
                  className="btn"
                >
                  Add to Cart
                </ButtonAddMore>
              )}
              {!isInCart(product) && (
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//Styled Components
const Button = styled.button`
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 10px;
`;

const ButtonAddMore = styled(Button)`
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
  }
`;

export default Product;
