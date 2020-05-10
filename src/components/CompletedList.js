import React, {useState,useEffect} from 'react'



function CompletedList({listItems, handleComplete, handleDelete}) {
    let list_items = []
    if(listItems) {
        listItems.map(item => {
            if(item.is_completed) {
                list_items.push(item)   
            }
        });
    }
    return (
        <>
            <div className="completed-container">
                {list_items.map( item => 
                
                        <div className="item" key={item.id}>
                                    <h2 className="completed-item">{item.name}</h2> 
                                        <button onClick={() => handleComplete(item)}>+</button>
                                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                        </div>
                    )
               }
            </div>
        </>
    )
}


export default CompletedList