import React from 'react'



function List({listItems, handleComplete, handleDelete}) {
    let listItemArr = []
    if(listItems) {
        listItems.map(item => {
            if(!item.is_completed) {
                listItemArr.push(item)   
            }
        });

    }
    return (
            <div className="item-container">
                {listItemArr.map( item => (
                    <div className="item" key={item.id}>
                        <h2>{item.name}</h2> 
                        <p>{item.description}</p>
                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                        {!item.is_completed ? 
                            <button onClick={() => handleComplete(item)}>&nbsp;&#10004;&nbsp;</button> 
                        : null}
                        </div>
                ))}
            </div>
    )
}


export default List