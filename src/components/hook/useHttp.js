import { useCallback, useState } from "react";

const useHttp = () => {

    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers ={}) => {

        setLoad(true)
        try {
            
            if (body) {
                body = JSON.stringify(body)
                headers["Content-type"] = 'application/json'
            }

            const response = await fetch(url, {method, headers, body})
            const data = response
            
            if (!response.ok) {
                throw new Error('Something request error')
            }

            return data

        } catch (e) {
            setError(e.message)
            throw e
        } finally {
            setLoad(false)
        }

    }, [])

    const clearError = useCallback(() => {setError(false)}, [])

    return {error, load, request, clearError, setLoad}
}

export default useHttp