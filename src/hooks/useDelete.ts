import axios from "axios"

export const useDelete = (url: string) => {
    const deleteProduct = async (id: string) => {
        try {
            const response = await axios.delete(`${url}/${id}`)
            console.log('Product deleted:', response.data)
            return response.data
        } catch (error) {
            console.error(`Error deleting data: ${(error as Error).message}`)
            throw new Error('Failed to delete data')
        }
    }

    return {deleteProduct}
}