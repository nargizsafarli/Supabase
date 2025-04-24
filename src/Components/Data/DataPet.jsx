import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import pet from "./pet.module.css"

function DataPet() {
  const { products, setPage } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    setCurrentPage(pageNum);
  }
  console.log(products);
  return (
    <div className={pet.container}>
      <div className={pet["container-item"]}>
        {products.map((product) => (
          <div key={product.id} className={pet.card}>
            <img src={product.productImg} className={pet.img} />
            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <p>{product.productTitle}</p>
            <p className="text-sm text-gray-500">Lifespan: {product.lifeSpan}</p>
          </div>
        ))}
      </div>

      <div className={pet.butoon}>
        {[1, 2, 3].map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum)}
            className={currentPage === pageNum ? pet.active : ""}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DataPet