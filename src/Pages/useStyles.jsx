import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textInput1:{
        color:theme.palette.primary.main,
        fontSize: 12
    },
    textInput2:{
        color:theme.palette.secondary.main,
        fontSize: 12
    },
    textInput3:{
        color:theme.palette.third,
        fontSize: 12
    },
    inputProps3:{
        "& label.Mui-focused": {
            color: theme.palette.third
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: theme.palette.third
          },
    }
  }));

export default useStyles