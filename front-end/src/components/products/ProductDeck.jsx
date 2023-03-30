import React from 'react';
import ProductCard from './ProductCard';

function ProductDeck() {
  const [protoArr, setProtoArr] = React.useState([]);
  const magicNumber = 11;
  React.useEffect(() => {
    const arr = Array(magicNumber).fill(1);

    setProtoArr([...arr]);
  }, []);

  return (
    <div>
      {protoArr.map((e, index) => (
        <ProductCard id={ index + 1 } key={ index + 1 } />
      ))}
    </div>
  );
}

export default ProductDeck;
