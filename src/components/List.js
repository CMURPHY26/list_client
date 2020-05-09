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

    // const list_items = list.list_items
    // console.log(list.list_items)
    
    return (
        <>
        <h1>{list.name}</h1>
        <ul>
        {list.list_items ?
            list.list_items.map( item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>  
                </div>
            ))
        : <h1>Not Found</h1>}
        
        </ul>
        
        
        </>
    )
}

export default List