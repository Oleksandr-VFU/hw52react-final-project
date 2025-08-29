import { useEffect, useRef, useState } from "react"
import { MdRefresh } from "react-icons/md"
import { createUrl } from "../../utils/mockapi"
import { API_ITEMS_PER_PAGE_LIMIT } from "../../utils/mockapi"
import { debounce } from "../../utils/debounce"
import Product from "../products/Product"
import AddProduct from "../products/AddProduct"
import { SORT_BY_LIST, ORDER_LIST } from "../../data/mockData"
import SelectField from "../form/SelectField"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { fetchAllProducts, selectProducts, selectProductsError, selectProductsLoading, selectProductsTotalCount } from "../../redux/slices/productsSlice"
import { selectIsLoggedIn } from "../../redux/slices/authSlice"
import Loading from "../../ui/Loading.tsx"
import Pagination from "../products/Pagination"

const Products = () => {
  const [page, setPage] = useState<number>(1)
  const [reload, setReload] = useState('0')
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')
  const debouncedSetName = debounce(setName, 1000)

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectProducts)
  const totalProducts = useSelector(selectProductsTotalCount)
  const isLoading = useSelector(selectProductsLoading)
  const error = useSelector(selectProductsError)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const totalPages = Math.ceil(totalProducts / API_ITEMS_PER_PAGE_LIMIT)

  useEffect(() => {
    dispatch(fetchAllProducts(createUrl(page, name, sort, order)))
  }, [dispatch, page, name, sort, order, reload])

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
        <div className="products-filter-panel">
          <div className="products-filter">
            <div className="products-filter__group">
              <label className="products-filter__label" htmlFor="filter">Фільтр за назвою</label>
              <input ref={inputRef} id="filter" className="products-filter__input" type="text" placeholder="Фільтрувати за назвою..." onChange={(e) => debouncedSetName(e.target.value)}/>
            </div>
            <SelectField
              id="sort"
              label="Сортувати за"
              options={SORT_BY_LIST}
              value={sort}
              onChangeSelect={(e) => setSort(e.target.value)}
            />
            <SelectField
              id="order"
              label="Порядок"
              options={ORDER_LIST}
              value={order}
              onChangeSelect={(e) => setOrder(e.target.value)}
            />
          </div>
          <button className="products-filter__reset" onClick={resetFilters}><MdRefresh /></button>
        </div>
      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">
            {isLoggedIn && <AddProduct />}
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
          {products.length > 0 ? (
            <ul className="products-list">
              {products.map((car) => (
                <Product key={car.id} product={car} reload={() => setReload(car.id.toString())} />
              ))}
            </ul>
          ) : (
            <p>No cars found!</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Products