import { createContext, useContext, useEffect, useState } from "react";

const productContextDefaultValues: {
  products: any[];
  fetchProducts: (productId: number) => void;
} = {
  products: [],
  fetchProducts: () => {},
};

async function fetchProducts(productId: number) {
  let results = await fetch("/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{
        categories: productLists(ids: "156126", locale: de_DE) {
           name
           articleCount
           childrenCategories: childrenProductLists {
             list {
               name
               urlPath
             }
           }
           categoryArticles: articlesList(first: 50) {
             articles {
               name
               variantName
               prices {
                 currency
                 regular {
                   value
                 }
               }
               images(
                 format: WEBP
                 maxWidth: 200
                 maxHeight: 200
                 limit: 1
               ) {
                 path
               }
             }
           }
         }
       }`,
    }),
  });
  const data = await results.json();
  return data;
}

export const ProductContext = createContext(productContextDefaultValues);

export function useProductState() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchInitialData() {
      const products = await fetchProducts(156126);

      setProducts(products);
    }

    fetchInitialData().catch((error) => console.error(error));
  }, []);

  return {
    products,
    fetchProducts,
    setProducts,
  };
}

export function useProducts() {
  return useContext(ProductContext);
}
