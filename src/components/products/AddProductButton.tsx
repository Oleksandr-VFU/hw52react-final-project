import { useState } from "react"
import Modal from "../modals/Modal"
import ProductForm from "../form/ProductForm"
import type { ProductInterface } from "../../types/Product.interface"
import { useAdd } from "../../hooks/useAdd"
import { API_URL } from "../../utils/mockapi"

const AddProductButton = () => {
    const [showModal, setShowModal] = useState(false)
    const {add} = useAdd(API_URL)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    const handleSubmit = async (product: Partial<ProductInterface>) => {
        try {
            const newCar = await add(product)
            console.log('New Product:', newCar)
            handleClose()
        } catch (error) {
            console.error(error)
        }
        
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