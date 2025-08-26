import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { createUrl } from "../../utils/mockapi"
import { API_ITEMS_PER_PAGE_LIMIT } from "../../utils/mockapi"
import type { ProductInterface } from "../../types/Product.interface"
import Product from "../products/Product"
import AddProduct from "../products/AddProduct"

const Products = () => {
  const [page, setPage] = useState<number>(1)
  const [reload, setReload] = useState('0')
  const [name, setName] = useState('')
    const {data: cars, isLoading, error} = useFetch<ProductInterface>(createUrl(page, name), undefined, reload)

  return (
    <div>
      <h1>Cars</h1>
      <div className="products-filter">
        <input type="text" placeholder="Фільтрувати за назвою..." onChange={(e) => setName(e.target.value)}/>
      </div>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">
            <AddProduct />
            <div className="pagination">
              <button className="pagination__btn" disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
              <button className="pagination__btn" disabled={cars.length < API_ITEMS_PER_PAGE_LIMIT} onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
          </div>
          {cars.length > 0 ? (
            <ul className="products-list">
              {cars.map((car) => (
                <Product key={car.id} product={car} reload={() => setReload(car.id.toString())} />
              ))}
            </ul>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Products