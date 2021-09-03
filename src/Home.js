import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => { // settimeout to 1 sec, just to simulate a real call on internet
            fetch('http://localhost:8000/blogss') // this returns a promise, so resolve with `then`
                .then(res => {
                    if (!res.ok) {
                        throw Error(`data not fetched - ${res.status} ${res.statusText}`);
                    }
                    return res.json(); // this converts json into javascript object and returns a promise, so resolve with `then`
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Home;