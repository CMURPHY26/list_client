import React, {useState,useEffect} from 'react'
import CompletedList from './CompletedList.js'
import List from './List.js'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = ''
  }


function ListContainer({match, location}) {
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
                <List listItems={list.list_items} handleComplete={handleComplete} handleDelete={handleDelete}/>
                <CompletedList listItems={list.list_items} handleComplete={handleComplete} handleDelete={handleDelete}/>
            </div>
        </>
    )
}

export default ListContainer