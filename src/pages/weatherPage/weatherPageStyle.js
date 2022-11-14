import { makeStyles } from '@material-ui/core/styles'

export const useWeatherPageStyles = makeStyles(({
  palette,
  shadows,
  spacing,
  breakpoints
}) => ({

  dataContainer: {
    padding: '7px',
    minWidth: '10%',
    marginBottom: spacing(3),
    borderRadius: '5px',
    cursor: 'pointer',
    border: '2px solid transparent',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: palette.grey[300],
    },
    [breakpoints.down('sm')]: {
      padding: '2px',
    }
  },
  DayContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '1px'

  },
  temperatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  weatherIcon: {
    width: '60px',
    [breakpoints.down('sm')]: {
      width: '25px',
    }
  },
  bigText: {
    marginLeft: '10px',
  },
  MainContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    marginBottom: '10px',
    padding: '0px',
    borderRadius: '5px',
    [breakpoints.down('sm')]: {
      minWidth: '100vw',
      marginLeft: '0px'
    },
    [breakpoints.down('xs')]: {
      justifyContent: 'space-evenly'
    }
  },
  MainContainer_odd: {
    backgroundColor: palette.background.paper
  },
  time: {
    borderBottom: 'solid #404040 1px',
    display: 'flex',
    justifyContent: 'center',
  },
  dataContainerContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '30px',
    marginTop: '-15px',
    zIndex: '2',
    marginBottom: '10px',
    backgroundColor: 'white',
  },
  dataContainerContainer_odd: {
    backgroundColor: palette.background.paper
  },
  daysOfTheWeek: {
    textAlign: 'center',
    padding: '15px'
  },
  pageDivision: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  dataContainer_selected: {
    backgroundColor: palette.grey[300],
    boxShadow: shadows[2]
  },
  loadingGifContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartlabel: {
    margin: '5px',
    width: '100%'
  },
  root: {
    height: '100%',
    [breakpoints.down('sm')]: {
      overflowY: 'scroll',
    },
    [breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
    }

  }

}))