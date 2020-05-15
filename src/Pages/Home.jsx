import React, {useState} from 'react';
import {NavBar, InputFields, ChartSection} from '../Component'
import {TextField} from '@material-ui/core'
import useStyles from './useStyles'

const Home = () =>{
    const classes = useStyles();
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

    const onChangeName = e =>{
        setCardName({...cardName,[e.target.name] : e.target.value});
    }

    const onChange = e =>{
        setCard({...card,[e.target.name] : e.target.value.replace(/\D/,'')});
    }


    
    const textField1 = () =>{
        return (
            <div>    
            <TextField 
                id="standard-basic" 
                label="Name" 
                onChange={onChangeName}
                name="name1"
                value={cardName.name1}
                InputLabelProps={{
                    className: classes.textInput1,
                }}
                color="primary"
            />            
            <TextField 
                id="standard-basic" 
                label="Value" 
                onChange={onChange}
                name="card1"
                value={card.card1}
                InputLabelProps={{
                    className: classes.textInput1,
                }}
                color="primary"
            />
            </div>

        )
    }
    const textField2 = () =>{
        return (
            <div>
                <TextField 
                    id="standard-basic" 
                    label="Name" 
                    onChange={onChangeName}
                    name="name2"
                    value={cardName.name2}
                    InputLabelProps={{
                        className: classes.textInput2,
                    }}
                    color="secondary"
                />   
                <TextField 
                    id="standard-basic" 
                    label="Value" 
                    onChange={onChange}
                    name="card2"
                    value={card.card2}
                    InputLabelProps={{
                        className: classes.textInput2,
                    }}
                    color="secondary"
                />
            </div>
        )
    }
    const textField3 = () =>{
        return (
            <div>
                <TextField 
                    id="standard-basic" 
                    label="Name" 
                    onChange={onChangeName}
                    name="name3"
                    value={cardName.name3}
                    InputLabelProps={{
                        className: classes.textInput3,
                    }}
                    color="#000000"
                />   
                <TextField 
                    id="standard-basic" 
                    label="Value" 
                    onChange={onChange}
                    name="card3"
                    value={card.card3}
                    InputLabelProps={{
                        className: classes.textInput3,
                    }}
                    InputProps={{
                        className: classes.inputProps3
                    }}
                />
            </div>
        )
    }
    return (
        <div>
            <NavBar />
            <InputFields 
                textField1 = {textField1()}
                textField2 = {textField2()}
                textField3 = {textField3()}
                card1 = {card.card1}
                card2 = {card.card2}
                card3 = {card.card3}
            />
            <ChartSection 
                n1={cardName.name1}
                n2={cardName.name2}
                n3={cardName.name3}
                b1 = {card.card1}
                b2 = {card.card2}
                b3 = {card.card3}
            />
        </div>
    )
}

export default Home