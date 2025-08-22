import axios from "axios";
import { useEffect, useState } from "react";

export interface UseFetchResult<T> {
    data: T[]
    isLoading: boolean
    error: string | null
}

const useFetch = <T>(url: string): UseFetchResult<T> => {
      const [data, setData] = useState<T[]>([])
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [error, setError] = useState<string | null>(null)

      useEffect(() => {
          const fetchData = async () => {
          try {
              setIsLoading(true)
              setError(null)
              const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
              await delay(1000)
              const response = await axios.get(url)

          if (response.status !== 200) {
              throw new Error(`Error: Request failed with status code ${response.status}`)
          }
          setData(response.data as T[])
          } catch (error) {
              setError(error as string)
          } finally {
              setIsLoading(false)
          }  
        }

        if (url) {
            fetchData()
        }    
      }, [url])

    return { data, isLoading, error }
}
export default useFetch