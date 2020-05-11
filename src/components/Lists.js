import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom' 


let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = ''
  }

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

    const handleDelete = (id) => {
        fetch(`${baseURL}/lists/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            let lists = data.filter( item => item.id !== id);
            // console.log(list_items)
            setData(lists);
            
        })
    }
    
return (
        <div className="list-container">
            {data.map(list => (
                <div className="list-lists" key={list.id}>
                    <Link to={`/lists/${list.id}`}>
                    <h2>{list.name}</h2>
                    <h3>Category: {list.category}</h3>
                    </Link>
                    <button onClick={() => handleDelete(list.id)}>X</button>
                </div>  
            ))}
        </div>
)
}

export default Lists