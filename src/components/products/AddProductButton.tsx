import { useState } from "react"
import Modal from "../modals/Modal"

const AddProductButton = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

  return (
    <>
        <button onClick={handleOpen}>Додати новий автомобіль</button>
        {showModal && <Modal onClose={handleClose}>Закрити</Modal>}
    </>
  )
}

export default AddProductButton