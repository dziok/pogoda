import { useState } from 'react';
import cities from "../constants/cityList.json"
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { useAutocompleteStyle } from './AutocompleteStyle.js'

export const AutocompleteComponent = ({ defaultValue }) => {
    const [value, setValue] = useState(defaultValue)
    const classes = useAutocompleteStyle()

    const handleChange = (_, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.CitySelect} >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                key={'id'}
                sx={{ width: 200 }}
                onChange={handleChange}
                value={value}
                renderInput={(params) => <TextField hiddenLabel className={classes.autocomplete_input} {...params} />}
            />
            <Button
                classes={{ disabled: classes.disabledButton }}
                className={classes.CitySelectButton}
                variant="contained" 
                color='secondary'
                disabled={value == null}
                component={Link}
                to={`/weather/${value?.id}`}
            >OK
            </Button>
        </div>
    );
}
