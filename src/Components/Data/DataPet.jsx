import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

function DataPet() {
  const { products, setPage } = useContext(GlobalContext);
  console.log(products);
  return (
    <div className="p-4">
      <div className="item">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.productImg} />
            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <p>{product.productTitle}</p>
            <p className="text-sm text-gray-500">Lifespan: {product.lifeSpan}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
      </div>
    </div>
  )
}

export default DataPet