import React, {useState,useEffect} from 'react'




function List({match, location}) {
    const list_id = match.params.id;
    const [list, setList] = useState({});

    const getList = () => {
        fetch(`http://localhost:3000/lists/${list_id}`)
        .then(response => response.json())
        .then(json => setList(json))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        getList();
    },[]) 

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/list_items/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            let list_items = list.list_items.filter( item => item.id !== id);
            console.log(list_items)
            setList({...list,list_items});
            
        })
    }
    
    
    return (
        <>
        <h1>{list.name}</h1>
        {list.list_items ?
            list.list_items.map( item => (
                <div key={item.id}>
                    <h2>{item.name}</h2> 
                    <p>{item.description}</p>
                    {!item.is_completed ? 
                        <button onClick={() => handleDelete(item.id)}>Remove</button> : null
                    }

                </div>
            ))
        : <h1>Not Found</h1>}
        
        </>
    )
}

export default List