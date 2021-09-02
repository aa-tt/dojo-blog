const BlogList = ({blogs, title, handleDelete}) => {

    // const handleDelete = (id) => { } // writing a handleDelete here will only delete from blogs here but wont delete from actual source array which is in Home.js. So pass this function as prop to be used as callback
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;