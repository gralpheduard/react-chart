import React, {useContext}  from 'react';
import {Grid, CardContent, Card, TextField} from '@material-ui/core'
import CountUp from 'react-countup'
import useStyles from './useStyles'
import {inputContext} from '../../Context/inputContext'

const InputFields = () =>{
    const {cardName, setCardName, card, setCard} = useContext(inputContext)
    const onChangeName = e =>{
        setCardName({...cardName,[e.target.name] : e.target.value});
    }
    const onChange = e =>{
        setCard({...card,[e.target.name] : e.target.value.replace(/\D/,'')});
    }
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined"  className={classes.card1}>
                        <CardContent>
                            <TextField 
                                id="standard-basic" 
                                label="Name" 
                                onChange={onChangeName}
                                name="name1"
                                value={cardName.name1}
                                color="primary"
                            />            
                            <TextField 
                                id="standard-basic" 
                                label="Value" 
                                onChange={onChange}
                                name="card1"
                                value={card.card1}
                                color="primary"
                            />
                        </CardContent>
                        <CardContent>
                            {cardName.name1}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card.card1}
                                duration={3}
                                separator=","
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" className={classes.card2}>
                        <CardContent>
                            <TextField 
                                id="standard-basic" 
                                label="Name" 
                                onChange={onChangeName}
                                name="name2"
                                value={cardName.name2}
                                color="secondary"
                            />   
                            <TextField 
                                id="standard-basic" 
                                label="Value" 
                                onChange={onChange}
                                name="card2"
                                value={card.card2}
                                color="secondary"
                            />
                        </CardContent>
                        <CardContent>
                            {cardName.name2}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card.card2}
                                duration={3}
                                separator=","
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" className={classes.card3}>
                        <CardContent>
                        <TextField 
                            id="standard-basic" 
                            label="Name" 
                            onChange={onChangeName}
                            name="name3"
                            value={cardName.name3}
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
                        />
                        </CardContent>
                        <CardContent>
                            {cardName.name3}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card.card3}
                                duration={3}
                                separator=","
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default InputFields