import useFetch from "../../hooks/useFetch"
import { createUrl } from "../utils/mockapi"

interface ProductInterface {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
}

const Products = () => {
    const {data: cars, isLoading, error} = useFetch<ProductInterface>(createUrl(1, 12))
    console.log(cars)
  return (
    <div>
      <h1>Cars</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!cars.length && (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <h2>{car.name}</h2>
              <p>{car.description}</p>
              <p>{car.price}</p>
              <p>{car.image}</p>
              <p>{car.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Products