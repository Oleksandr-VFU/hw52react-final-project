import axios from "axios";
import { useEffect, useRef, useState } from "react";

export interface UseFetchResult<T> {
    data: T[]
    isLoading: boolean
    error: string | null
}

const useFetch = <T>(url: string, limit?: number): UseFetchResult<T> => {
      const [data, setData] = useState<T[]>([])
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [error, setError] = useState<string | null>(null)

      const cancelTokenSource = useRef(axios.CancelToken.source())

      useEffect(() => {
        const currentCancelTokenSource = cancelTokenSource.current
        const fetchData = async () => {
          setIsLoading(true)
          setError(null)
          try {
            const response = await axios.get<T[]>(url, {
                params: {
                    _limit: limit
                },
                cancelToken: currentCancelTokenSource.token
              })
              
            if (response.status !== 200) {
                throw new Error(`Error: Request failed with status code ${response.status}`)
            }
            setData(response.data)
          } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request Cancelled:', error.message)
            } else {
                setError(`Error fetching data: ${((error as Error).message)}`)
            }
            
          } finally {
              setIsLoading(false)
          }  
        }

        if (url) {
            fetchData()
        }
        
        // return () => {
        //     currentCancelTokenSource.cancel('Operation cancelled due to new request')
        // }
      }, [url, limit])

    return { data, isLoading, error }
}
export default useFetch