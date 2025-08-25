import { useState, FormEvent } from "react"
import type { ProductInterface } from "../../types/Product.interface"
import { CAR_CATEGORIES, INITIAL_CAR } from "../../data/mockData"

interface ProductFormProps {
  onSubmit: (product: Partial<ProductInterface>) => void
}

const ProductForm = ({onSubmit}: ProductFormProps) => {
    const [name, setName] = useState(INITIAL_CAR.name)
    const [description, setDescription] = useState(INITIAL_CAR.description)
    const [price, setPrice] = useState(INITIAL_CAR.price)
    const [category, setCategory] = useState(INITIAL_CAR.category)
    const [image, setImage] = useState(INITIAL_CAR.image)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({name, description, price, category, image})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setImage('https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg')
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label" htmlFor="name">Name:</label>
            <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name..." required/>
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description..." required/>
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="price">Price:</label>
            <input className="form-control" type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price..." required/>
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="image">Image URL:</label>
            <input className="form-control" type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Product Image..." required/>
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="category">Category:</label>
            <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Оберіть необхідну категорію...</option>
              {CAR_CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
        </div>
        <div className="form-group">
            <button className="form-button" type="submit">Submit</button>
        </div>
    </form>
  )
}

export default ProductForm