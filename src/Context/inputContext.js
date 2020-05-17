import React, {createContext, useState} from 'react';

export const inputContext = createContext(null);

export default ({children})=>{
    const [cardName, setCardName] = useState({
        name1:"", 
        name2:"", 
        name3:"", 
    })

    const [card, setCard] = useState({
        card1: "", 
        card2: "", 
        card3:""
    })
    return(
        <inputContext.Provider value = {{cardName, setCardName, card, setCard}}>
            {children}
        </inputContext.Provider>
    )
}