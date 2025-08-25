import type {ReactNode} from 'react'
import {createPortal} from 'react-dom'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const modalRoot = document.getElementById('modal-root')

const Modal = ({children, onClose}: ModalProps) => {
    if (!modalRoot) return null
  return createPortal (
    <div className="modal-overlay">
        <div className="modal">
            <span className="modal__close" onClick={onClose}>x</span>
            <h2>Додати автомобіль</h2>
        </div>
        {children}
    </div>,
    modalRoot
  )
}

export default Modal