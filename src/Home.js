import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => { // settimeout to 1 sec, just to simulate a real call on internet
            fetch('http://localhost:8000/blogs') // this returns a promise, so resolve with `then`
                .then(res => {
                    return res.json(); // this converts json into javascript object and returns a promise, so resolve with `then`
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Home;