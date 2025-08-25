import { useState, FormEvent } from "react"
import type { ProductInterface } from "../../types/Product.interface"

interface ProductFormProps {
  onSubmit: (product: ProductInterface) => void
  initialData?: ProductInterface
}

const ProductForm = ({onSubmit}: ProductFormProps) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({id, name, description, price, category, image})
        setId(0)
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
              <option value="">Select a category...</option>
              <option value="сoupe">Coupe</option>
              <option value="electric">Electric</option>
              <option value="hatchback">Hatchback</option>
              <option value="pickup">Pickup</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="Van">Van</option>
            </select>
        </div>
        <div className="form-group">
            <button className="form-button" type="submit">Submit</button>
        </div>
    </form>
  )
}

export default ProductForm