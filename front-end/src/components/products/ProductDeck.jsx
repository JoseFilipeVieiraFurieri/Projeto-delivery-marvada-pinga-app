import React from "react";
import ProductCard from "./ProductCard";

function ProductDeck() {
  const [protoArr, setProtoArr] = React.useState([]);

  React.useEffect(() => {
    const arr = Array(11).fill(1);

    setProtoArr([...arr]);
  });

  return (
    <div>
      {protoArr.map((e, index) => (
        <ProductCard id={index + 1} />
      ))}
    </div>
  );
}

export default ProductDeck;