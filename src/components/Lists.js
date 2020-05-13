import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom' 
import ListsForm from './ListsForm.js'


let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = 'https://mylist-app-api.herokuapp.com/'
  }

function Lists(props) {
    const [data, setData] = useState([]);
    const [formShow, setFormShow] = useState(false);
    

   const getLists = () => {
        fetch(`${baseURL}/lists`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json)
        })
        .catch(err => console.log(err))
    }

    useEffect( () => {
        getLists();
    }, []) 

    const handleAdd = (event, formInputs) => {
        event.preventDefault();
        fetch(`${baseURL}/lists`, {
          body: JSON.stringify(formInputs),
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }).then(createdList => createdList.json())
        .then(jsonedList => setData([...data,jsonedList]))
        .catch(error => console.log(error))
      }

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
    <>
        <div className="form-container">
            {!formShow ? 
                <button onClick={() => setFormShow(true)}>Add a List</button>
            : <div className="lists-form">
                <ListsForm setFormShow={setFormShow} handleSubmit={handleAdd} />
                <button onClick={() => setFormShow(false)}>Close Form</button>
              </div>
            }
        </div>
        <div className="lists-container">
            {data ?
            data.map(list => (
                <div className="list-lists" key={list.id}>
                    <Link to={`/lists/${list.id}`}>
                    <h2>{list.name}</h2>
                    <div className="category-name">
                        <h3>Category: {list.category}</h3>
                    </div>
                    </Link>
                    <button onClick={() => handleDelete(list.id)}>X</button>
                </div>  
            )): null}
        </div>
    </>
)
}

export default Lists