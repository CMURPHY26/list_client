import React, {useState,useEffect} from 'react'
import CompletedList from './CompletedList.js'
import List from './List.js'
import Form from './Form.js'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = ''
  }


function ListContainer({match, location}) {
    const list_id = match.params.id;
    const [list, setList] = useState({});
    const [formShow, setFormShow] = useState(false);
    const [item, setItem] = useState({
        name:"",
        description:"",
        list_id: list_id

    })
    
    const getList = () => {
        fetch(`${baseURL}/lists/${list_id}`)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            setList(json)
        } )
        .catch(err => console.log(err))
    }
    
    useEffect( () => {
        getList();
    },[]) 


    const handleAdd = (event, formInputs) => {
        event.preventDefault();
        fetch(`${baseURL}/lists/${list_id}/list_items`, {
          body: JSON.stringify(formInputs),
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }).then(createdListItem => createdListItem.json())
        .then(jsonedListItem => {
            let list_items = [jsonedListItem,...list.list_items];

            // console.log(list_items)
            setList({...list,list_items});
        })
        .catch(error => console.log(error))
      }

      const handleUpdate = (event, item) => {
        event.preventDefault();
        fetch(`${baseURL}/list_items/${item.id}`, {
          body: JSON.stringify(item),
          method: "PATCH",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }).then(createdListItem => createdListItem.json())
        .then(jsonedListItem => {
            
            let filteredListItems = list.list_items.filter( item => item.id !== jsonedListItem.id);

            let list_items = [jsonedListItem,...filteredListItems];

            // console.log(list_items)
            setList({...list,list_items});
        })
        .catch(error => console.log(error))
      }
    


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
        item.is_completed = !item.is_completed;
        fetch(`${baseURL}/list_items/${item.id}`, {
            body: JSON.stringify({is_completed: !item.is_completed}),
            method: 'PATCH',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        })
        .then(response => {
            console.log(item)
            let newListItems = [...list.list_items,item];
            let updatedList = {...list,newListItems}
            setList(updatedList);
        })
        .catch(error => console.log(error))
    }
    
    return (
        <>
            <div className="list-header">
                <h1>{list.name}</h1>
                {!formShow ? 
                    <button onClick={() => setFormShow(true) }>Add an Item</button>
                : <div className="lists-form">
                    <Form setFormShow={setFormShow} item={item} listId={list_id} handleSubmit={handleAdd} />
                    <button onClick={() => setFormShow(false) }>Close Form</button>
                </div>
                }
            </div>
            <div className="container">
                <List listItems={list.list_items} handleComplete={handleComplete} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
                <CompletedList listItems={list.list_items} handleComplete={handleComplete} handleDelete={handleDelete}/>
            </div>
        </>
    )
}

export default ListContainer