import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10
    },
    card1: {
        borderColor:theme.palette.primary.main,
        borderWidth: 5,
        margin: 10
       },
    card2: {
        borderColor:theme.palette.secondary.main,
        borderWidth: 5,
        margin: 10
    },
    card3: {
        borderColor:theme.palette.third,
        borderWidth: 5,
        margin: 10
    }
      
  }));

export default useStyles