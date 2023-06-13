import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from './Loading';
import "./FullShop.css";

function FullShop({ fullShop }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [shopReady, setShopReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fullShop(search + "sneakers");
        setShopReady(result.length > 0);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [fullShop, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (

    <div>
      <div className="search-bar mt-5 flex justify-center">
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="flex text-center justify-center bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={search}
          onChange={handleSearch}
          placeholder="Search for products..."
        />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                  <Link
                    className="block relative h-48 rounded overflow-hidden"
                    to={`/Shop/Product/${item.id}`}
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                    <span className="mt-1 font-medium">
                      ${item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default FullShop;
