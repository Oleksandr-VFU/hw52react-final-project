import { useState } from "react"
import Modal from "../modals/Modal"
import ProductForm from "../form/ProductForm"
import type { ProductInterface } from "../../types/Product.interface"

const AddProductButton = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    const handleSubmit = (product: ProductInterface) => {
        console.log('New Product:', product)
        handleClose()
    }

  return (
    <>
        <button className="add-product-btn" onClick={handleOpen}>Додати Автомобіль</button>
        {showModal && (
            <Modal onClose={handleClose}>
                <h2 className="modal__title">Додати новий автомобіль</h2>
                <ProductForm onSubmit={handleSubmit} />
            </Modal>
        )}
    </>
  )
}

export default AddProductButton