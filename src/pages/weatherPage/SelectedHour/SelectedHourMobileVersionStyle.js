import { makeStyles } from '@material-ui/core/styles'

export const useSelectedHourMobileVersionStyle = makeStyles(({
  palette,
  spacing,
  breakpoints
}) => ({

  dataContainer: {
    color: palette.grey[200],
    backgroundColor: palette.tetiary.main,
    padding: '10px',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 10px 0px #888888',
    transition: "background 0.2s",
    zIndex: 100,
  },
  dataContainer_animation: {
    backgroundColor: palette.grey[800],
  },

  dataContainer2: {
    width: '400px',
    backgroundColor: '#dedede',
    padding: '10px',
    margin: '10px',

  },
  temperatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bigText: {
    marginLeft: '10px',
  },
  cityLabel: {
    marginBottom: spacing(2),
    color: palette.primary.main
  },
  CitySelectContainer: {
    marginBottom: '25px',
  },
  DetailsContainer: {
    borderRadius: '5px',
    marginBottom: '5px',
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    lineHeight: '1.2',
    "& *": {
      width: '165px'
    }

  },
  backLink: {
    color: palette.secondary.main,
  },
  selectedCityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cityLabelBorder: {
    width: '100%',
    height: '3px',
    backgroundColor: palette.secondary.main,
    transition: "width 0.2s",
    marginBottom: spacing(1)
  },
  cityLabelBorder_animation: {
    width: '20%'
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10px'
  },
  specificDataContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  chartTypeSwitchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'row'
  },
  weatherIcon:{
    width: '70px'
  }
}))