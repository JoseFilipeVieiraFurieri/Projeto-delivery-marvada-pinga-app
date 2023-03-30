import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";

function ProductDeck() {
  const [protoArr, setProtoArr] = React.useState([]);

  React.useEffect(async () => {
    const productList = await axios.get("http://localhost:3001/products");

    setProtoArr([...productList.data]);
  }, []);

  return (
    <div>
      {protoArr.map((e) => (
        <ProductCard id={e.id} key={e.id} product={e} />
      ))}
    </div>
  );
}

export default ProductDeck;