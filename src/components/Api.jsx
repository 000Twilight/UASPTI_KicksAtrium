import axios from "axios";

const apiKey = "c9b940af29msh75a51aef55d2896p1fae7cjsn7f32975281b2";
const apiUrl = "https://kohls.p.rapidapi.com/products/list";
const limit = 100;
const keyword = "air max";
const dimensionValueID = "Product:Athletic Shoes & Sneakers";

const getProducts = async () => {
  const options = {
    method: "GET",
    url: `${apiUrl}?limit=${limit}&keyword=${keyword}&${dimensionValueID}`,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "kohls.p.rapidapi.com",
    },
  };
  // console.log(options.url);

  try {
    const response = await axios.request(options);
    // console.log(response);
    // console.log(response.data.payload.products);
    return response.data.payload.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const forumData = async () => {
  try {
    const products = await getProducts();

    const filteredProducts = products.filter((item) => {
      const name = item.productTitle.toLowerCase();
      const totalLetters = name.replace(/\s/g, "").length;
      return totalLetters <= 40 && name.includes("sneakers");
    });

    let resultProducts = [];

    if (filteredProducts.length >= 12) {
      resultProducts = filteredProducts.slice(0, 12);
    } else {
      resultProducts = filteredProducts;
      const remainingProductsCount = 12 - filteredProducts.length;
      const remainingProducts = products
        .filter((item) => !filteredProducts.includes(item))
        .slice(0, remainingProductsCount);
      resultProducts = resultProducts.concat(remainingProducts);
    }

    return resultProducts.map((item) => ({
      image: item.image.url,
      name: item.productTitle,
      id: item.webID,
      // rating: item.rating.avgRating,
      // price: item.prices[0].regularPrice.minPrice,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
