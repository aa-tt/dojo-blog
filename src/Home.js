const Home = () => {

    const handleClick = (e) => {
        console.log("Hello", e);
    }

    const handleClickAgain = (e, name) => {
        console.log("Hello " + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button> {/* // just pass reference, don't call it by adding () as handleClick() */}
            {/* <button onClick={handleClickAgain('mario')}>Click me again</button>  this will fire wout clicking and should be done as next line, wrapped in an anonymous function */}
            <button onClick={(e) => handleClickAgain(e, 'mario')}>Click me again</button> 
        </div>
    );
}
 
export default Home;