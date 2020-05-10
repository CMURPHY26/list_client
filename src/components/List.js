import React, {useState,useEffect} from 'react'
import CompletedList from './CompletedList.js'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = ''
  }


function List({match, location}) {
    const list_id = match.params.id;
    const [list, setList] = useState({});
    
    const getList = () => {
        fetch(`${baseURL}/lists/${list_id}`)
        .then(response => response.json())
        .then(json => setList(json))
        .catch(err => console.log(err))
    }
    
    useEffect( () => {
        getList();
    },[]) 
    


    const handleDelete = (id) => {
        fetch(`${baseURL}/list_items/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            let list_items = list.list_items.filter( item => item.id !== id);
            // console.log(list_items)
            setList({...list,list_items});
            
        })
    }

    const handleComplete = (item) => {
        // event.preventDefault()
        // console.log('in it to win it')
        fetch(`${baseURL}/list_items/${item.id}`, {
            body: JSON.stringify({is_completed: !item.is_completed}),
            method: 'PATCH',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        })
        .then(updatedListItem => {
        // go wild
        getList()
        })
        .catch(error => console.log(error))
    }


    // console.log(listItems)
    
    return (
        <>
            <div className="list-header">
                <h1>{list.name}</h1>
            </div>
            <div className="container">
                <div className="item-container">
                    {list.list_items ? 
                        list.list_items.map( item => 
                            <div className="item" key={item.id}>
                                {!item.is_completed ? 
                                    <>
                                        <h2>{item.name}</h2> 
                                        <p>{item.description}</p>
                                            <button onClick={() => handleDelete(item.id)}>Remove</button>
                                        {!item.is_completed ? 
                                            <button onClick={() => handleComplete(item)}>&#10004;</button> : null
                                        }
                                    </>
                                : null }
                            
                            </div>
                        )
                    : <h1>Not Found</h1>}
                </div>
                <CompletedList listItems={list.list_items} handleComplete={handleComplete} handleDelete={handleDelete}/>
            </div>
        </>
    )
}

export default List