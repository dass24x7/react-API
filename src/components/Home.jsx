import React, {useState} from 'react'
import "./Home.css"
function Home() {
    const [data, setData] = useState(0);

    const updatevalue = () => {
        setData(data+1)
    }
    return (
        <div className='text-center'>
            <h1>{data}</h1>
            <button onClick={updatevalue}>Incrise-Value+</button>
        </div>
    )
}

export default Home;
