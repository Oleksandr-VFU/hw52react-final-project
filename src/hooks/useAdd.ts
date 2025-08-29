import axios from "axios"
import { ProductInterface } from "../types/Product.Interface"

export const useAdd = (url: string) => {
    const add = async (data: Partial<ProductInterface>) => {
        try {
            const response = await axios.post(url, data)
            return response.data
        } catch (error) {
            console.error(`Error adding car: ${(error as Error).message}`)
            throw new Error('Failed to add car')
        }
    }

    return { add }
}