import { useState, useEffect } from "react";

const useFetch = (url) => { // pass url to this hook function
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const abortController = new AbortController();


        setTimeout(() => { // settimeout to 1 sec, just to simulate a real call on internet
            fetch(url, {signal: abortController.signal}) // this returns a promise, so resolve with `then`
                .then(res => {
                    if (!res.ok) {
                        throw Error(`data not fetched - ${res.status} ${res.statusText}`);
                    }
                    return res.json(); // this converts json into javascript object and returns a promise, so resolve with `then`
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);
        
        return () => abortController.abort();
    }, [url]); // rerun on change of dependency, which is `url`

    return { data, isPending, error }; // return from this hook function a meaningful object
}

export default useFetch;