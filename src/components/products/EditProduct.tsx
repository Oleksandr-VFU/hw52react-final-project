import { ReactNode, useState } from "react"
import Modal from "../modals/Modal"
import ProductForm from "../form/ProductForm"
import type { ProductInterface } from "../../types/Product.interface"
import { useUpdate } from "../../hooks/useUpdate"
import { API_URL } from "../../utils/mockapi"
import { INITIAL_CAR } from "../../data/mockData"

interface EditProductProps {
    children: ReactNode
    product: ProductInterface
    reload: () => void
}

const EditProduct = ({children, product, reload}: EditProductProps) => {
    const [showModal, setShowModal] = useState(false)
    const {update} = useUpdate(API_URL)
    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    const handleSubmit = async (product: Partial<ProductInterface>) => {
        try {
            const updateCar = await update(product)
            console.log('New Product:', updateCar)
            handleClose()
            reload()
        } catch (error) {
            console.error(error)
        }
        
    }

  return (
    <>
        <button className="product-item__edit" onClick={handleOpen}>{children}</button>
        {showModal && (
            <Modal onClose={handleClose}>
                <h2 className="modal__title">Редагувати Автомобіль #{product.id}, {product.name}</h2>
                <ProductForm onSubmit={handleSubmit} product={product} />
            </Modal>
        )}
    </>
  )
}

export default EditProduct