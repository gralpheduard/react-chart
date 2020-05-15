import React from 'react';
import {Grid, CardContent, Card} from '@material-ui/core'
import CountUp from 'react-countup'
import useStyles from './useStyles'

const InputFields = ({textField1, textField2, textField3, card1, card2, card3, n1, n2, n3}) =>{
  
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined"  className={classes.card1}>
                        <CardContent>
                            {textField1}
                        </CardContent>
                        <CardContent>
                            {n1}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card1}
                                duration={3}
                                separator=","
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" className={classes.card2}>
                        <CardContent>
                            {textField2}
                        </CardContent>
                        <CardContent>
                            {n2}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card2}
                                duration={3}
                                separator=","
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" className={classes.card3}>
                        <CardContent>
                            {textField3}
                        </CardContent>
                        <CardContent>
                            {n3}
                        </CardContent>
                        <CardContent>
                            <CountUp
                                start={0}
                                end={card3}
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