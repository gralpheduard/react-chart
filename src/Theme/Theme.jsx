import {createMuiTheme} from '@material-ui/core'

const Theme = createMuiTheme({
    palette:{
      primary:{
        main:"rgba(0,0,255,0.5)"
      },
      secondary:{
        main:"rgba(0,255, 0,0.5)"
      },
      third:"rgba(255,0,0,0.5)"
    }
  })

export default Theme;