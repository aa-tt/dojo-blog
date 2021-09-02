import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario'); // useState hook function that returns initial value supplied to it (which is mario here) and a callback function to change state of variable 'name' in template

    const handleClick = () => {
        setName('luigi');
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;