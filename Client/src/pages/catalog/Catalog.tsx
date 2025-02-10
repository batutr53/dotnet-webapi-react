import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { IProduct } from "../../model/IProduct";
import { CircularProgress } from "@mui/material";
import request from "../../api/request";

export default function Catalog() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    request.Catalog.list()
      .then(response => setProducts(response.data))
      .finally(() => setloading(false));
  }, []);
 if(loading) return <CircularProgress/>
  return (
        <div>
            <ProductList products={products} />
        </div>
  );
};