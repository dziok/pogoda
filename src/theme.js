import React from 'react'
import { createTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'

const colors = {
  blue: '#00b3d7',
  lightGrey: '#f6f6f6'
}

const palette = createPalette({
  primary: {
    main: colors.blue,
  },
  secondary: {
    main: '#e3226c',
    dark: ' #731137'
  },

  tetiary: {
    main: "#363636",
    light: '#242323'
  },
  background: {
    default: 'white',
    paper: colors.lightGrey
  }
})

const typography = createTypography(palette, {
  fontFamily: '\'Advent Pro\', sans-serif',
  fontSize: 13,
  caption: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  body2: {
    fontSize: '0.75rem'
  }
})

const overrides = {

  MuiSelect: {
    root: {
      width: '250px',
    }
  },
  MuiInputLabel: {
    root: {
      marginTop: "2px",
      marginLeft: "15px"
    }
  },
  MuiFilledInput: {
    root: {
      margin: "5px"
    }
  },
}

const theme = responsiveFontSizes(
  createTheme({
    palette,
    overrides,
    typography
  })
)

// musisz zmodyfikować obiekt theme. Niestety musisz to zrobić dopiero tutaj, gdzie theme już istnieje, żeby mieć dostęp do breakpoints
theme.typography.h6 = { // albo inny variant
  // [theme.breakpoints.down('sm')]: {
  //   fontSize: '1rem'
  // }
}

theme.typography.body1 = {
  fontSize: 20,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}
theme.typography.body2 = {
  fontSize: 20,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem'
  }
}

export const ThemeProvider = ({ children, ...rest }) => {

  return (
    <MuiThemeProvider theme={theme} {...rest}>
      {children}
    </MuiThemeProvider>
  )
}