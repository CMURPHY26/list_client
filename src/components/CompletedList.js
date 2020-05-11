import React from 'react'



function CompletedList({listItems, handleComplete, handleDelete}) {
    let completedListItems = []
    if(listItems) {
        listItems.map(item => {
            if(item.is_completed) {
                completedListItems.push(item)   
            }
        });
    }
    return (
            <div className="completed-container">
                {completedListItems.map( item => 
                
                        <div className="item" key={item.id}>
                                    <h2 className="completed-item">{item.name}</h2> 
                                        <button onClick={() => handleComplete(item)}>&nbsp;+&nbsp;</button>
                                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                        </div>
                    )
               }
            </div>
    )
}


export default CompletedList