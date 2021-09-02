import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect fetch data, auth, etc..');
        console.log(blogs);
    }, []); // add dependency array - blank, to have no dependency which means only on first render useEffect will run, otherwise it runs for each render

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;