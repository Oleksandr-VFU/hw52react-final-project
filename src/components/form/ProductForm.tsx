import { useState, FormEvent } from "react"
import type { ProductInterface } from "../../types/Product.interface"
import { CAR_CATEGORIES, INITIAL_CAR } from "../../data/mockData"
import InputField from "./InputField"
import SelectField from "./SelectField"

interface ProductFormProps {
  onSubmit: (product: Partial<ProductInterface>) => void
}

const ProductForm = ({onSubmit}: ProductFormProps) => {
    const [name, setName] = useState(INITIAL_CAR.name as string)
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
        <InputField id="name" value={name} label="Name" placeholder="Product Name..." required onChangeInput={(e) => setName(e.target.value)} />
        <InputField id="description" value={description ?? ''} label="Description" placeholder="Product Description..." textArea={true} onChangeTextArea={(e) => setDescription(e.target.value)} />
        <InputField id="price" value={price ?? ''} label="Price" placeholder="Product Price..." required onChangeInput={(e) => setPrice(e.target.value)} />
        <InputField id="image" type="url" value={image ?? ''} label="Image" placeholder="Product Image..." required onChangeInput={(e) => setImage(e.target.value)} />
        <SelectField id="category" value={category ?? ''} label="Category" options={CAR_CATEGORIES.map((category) => ({ value: category, text: category }))} onChangeSelect={(e) => setCategory(e.target.value)} />
        <div className="form-group">
            <button className="form-button" type="submit">Submit</button>
        </div>
    </form>
  )
}

export default ProductForm