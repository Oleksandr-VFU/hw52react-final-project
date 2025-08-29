import axios from "axios"
import { ProductInterface } from "../types/Product.Interface"

export const useUpdate = (url: string) => {
    const update = async (data: Partial<ProductInterface>) => {
        try {
            const response = await axios.put(`${url}/${data.id}`, data)
            return response.data
        } catch (error) {
            console.error(`Error updating car: ${(error as Error).message}`)
            throw new Error('Failed to update car')
        }
    }

    return { update }
}