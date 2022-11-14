import { makeStyles } from '@material-ui/core/styles'

export const useSelectedHourStyles = makeStyles(({
    palette,
    spacing,
}) => ({

    dataContainer: {
        color: palette.grey[200],
        width: '280px',
        height: '100%',
        backgroundColor: palette.tetiary.main,
        padding: '10px',
        position: 'fixed',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 10px 0px #888888',
        transition: "background 0.2s",
        zIndex: 100
    },
    dataContainer_animation: {
        backgroundColor: palette.grey[800],
    },
    leftMargin: {
        minWidth: '300px',

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
        paddingBottom: '10px',
        marginBottom: spacing(2),
        color: palette.primary.main
    },
    CitySelectContainer: {
        marginBottom: '25px',
    },
    DetailsContainer: {
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '15px',
        marginTop: '15px',
    },
    basicInformations: {
        padding: '10px',
        borderRadius: '5px',
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
        marginTop: spacing(2)
    },
    cityLabelBorder_animation: {
        width: '20%'
    },
    switchContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}))