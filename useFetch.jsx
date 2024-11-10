import { useEffect, useState } from "react"

const useFetch = (URI) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(URI)
                if(!res.ok) throw new Error("Could not fetch data")
                const fetchedData = await res.json()
                setData(fetchedData)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }
        }

        fetchData()
    }, [])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch
