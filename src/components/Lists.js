import React, {useState, useEffect} from 'react'


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
        {data.map(list => (
            <div key={list.id}>
            <h2>{list.name}</h2>
            <h3>Category: {list.category}</h3>
            <hr />
            </div>  
        ))}
    </>
)
}

export default Lists