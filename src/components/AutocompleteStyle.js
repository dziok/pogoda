import { makeStyles } from '@material-ui/core/styles'

export const useAutocompleteStyle = makeStyles((theme) => ({
    disabledButton: {
        backgroundColor: `${theme.palette.secondary.dark} !important `
    },
    CitySelect: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90px',
        width: '270px'
    },
    CitySelectButton: {
        height: '55px',
    },
    autocomplete_input: {
        backgroundColor: 'white',
        borderRadius: '5px'
    },
}))
