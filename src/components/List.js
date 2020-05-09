import React, {useState,useEffect} from 'react'




function List({match, location}) {
    const list_id = match.params.id;
    const [list, setList] = useState({})

    const getList = () => {
        fetch(`http://localhost:3000/lists/${list_id}`)
        .then(response => response.json())
        .then(json => setList(json))
        .catch(err => console.log(err))
    }

    useEffect( () => {
        getList();
    }, []) 

    return (
        <>
        <h1>{list.name}</h1>
        
        </>
    )
}

export default List