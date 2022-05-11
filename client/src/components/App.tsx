import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductContext, useProductState } from "../hooks/useProducts";
import Layout from "./layout/Layout";
import ProductList from "./product-list/ProductList";

const App = () => {
  const product = useProductState();
  return (
    <ProductContext.Provider value={product}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductList />}>
              <Route path=":categoryName" element={<ProductList />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} />  */}
          </Routes>
        </Layout>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
