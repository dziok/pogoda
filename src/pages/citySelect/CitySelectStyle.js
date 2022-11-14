import { makeStyles } from '@material-ui/core/styles'
import Image from '../../images/backgroundImage5.png';

export const useCitySelectStyle = makeStyles((theme) => ({

    CitySelectContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    backgroundImage: {
        position: 'absolute',
        height: '100vh',
        width: '100%'
    },
    heading: {
        backgroundColor: 'rgba(50, 50, 50, 0.97)',
        boxShadow: theme.shadows[2],
        padding: '50px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        color: 'white'
    },
}))