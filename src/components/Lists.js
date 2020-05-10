import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom' 


function Lists(props) {
    const [data, setData] = useState([])
    

   const getLists = () => {
        fetch('http://localhost:3000/lists')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        getLists();
    }, []) 

    
return (
    <>
        <h1>Lists</h1>
        <div className="list-container">
            {data.map(list => (
                <div className="list-lists" key={list.id}>
                    <Link to={`/lists/${list.id}`}>
                    <h2>{list.name}</h2>
                    </Link>
                    <h3>Category: {list.category}</h3>
                </div>  
            ))}
        </div>
    </>
)
}

export default Lists