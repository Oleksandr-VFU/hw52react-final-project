import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { createUrl } from "../utils/mockapi"
import { API_ITEMS_PER_PAGE_LIMIT } from "../utils/mockapi"

interface ProductInterface {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
}

const Products = () => {
  const [page, setPage] = useState<number>(1)
    const {data: cars, isLoading, error} = useFetch<ProductInterface>(createUrl(page))

  return (
    <div>
      <h1>Cars</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div>
          <div  className="pagination">
            <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
            <button disabled={cars.length < API_ITEMS_PER_PAGE_LIMIT} onClick={() => setPage((prev) => prev + 1)}>Next</button>
          </div>
          <ul>
            {cars.length > 0 && cars.map((car) => (
              <li key={car.id}>
                <h2>{car.name}</h2>
                <p>{car.description}</p>
                <p>{car.price}</p>
                <p>{car.image}</p>
                <p>{car.category}</p>
              </li>
            ))}
          </ul>
        </div>
        
      )}
    </div>
  )
}

export default Products