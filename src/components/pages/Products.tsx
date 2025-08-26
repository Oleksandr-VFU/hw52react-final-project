import { useRef, useState } from "react"
import { MdRefresh } from "react-icons/md"
import useFetch from "../../hooks/useFetch"
import { createUrl } from "../../utils/mockapi"
import { API_ITEMS_PER_PAGE_LIMIT } from "../../utils/mockapi"
import type { ProductInterface } from "../../types/Product.interface"
import { debounce } from "../../utils/debounce"
import Product from "../products/Product"
import AddProduct from "../products/AddProduct"
import { SORT_BY_LIST, ORDER_LIST } from "../../data/mockData"

const Products = () => {
  const [page, setPage] = useState<number>(1)
  const [reload, setReload] = useState('0')
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')
  const {data: cars, isLoading, error} = useFetch<ProductInterface>(createUrl(page, name, sort, order), undefined, reload)
  const debouncedSetName = debounce(setName, 1000)

  const inputRef = useRef<HTMLInputElement>(null)

  const resetFilters = () => {
    setName('')
    setSort('')
    setOrder('asc')
    setPage(1)
    inputRef.current && (inputRef.current.value = '')
  }

  return (
    <div>
      <h1>Cars</h1>
      <div className="products-filter">
        <div className="form-group">
          <label htmlFor="filter">Фільтр за назвою</label>
          <input ref={inputRef} id="filter" className="products-filter__input" type="text" placeholder="Фільтрувати за назвою..." onChange={(e) => debouncedSetName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="sort">Сортувати за</label>
          <select className="products-filter__select" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORT_BY_LIST.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order">Порядок</label>
          <select id="order" className="products-filter__select" onChange={(e) => setOrder(e.target.value)}>
            {ORDER_LIST.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <button className="products-filter__reset" onClick={resetFilters}><MdRefresh /></button>
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