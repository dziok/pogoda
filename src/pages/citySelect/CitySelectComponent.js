import { useCitySelectStyle } from './CitySelectStyle'
import { Typography } from '@material-ui/core';
import { AutocompleteComponent } from '../../components/AutocompleteComponent';

export const CitySelect = () => {
    const classes = useCitySelectStyle()

    return (
        <div className={classes.CitySelectContainer}>
            <div className={classes.heading}>
                <Typography variant='h1'>Pogoda</Typography>
                <AutocompleteComponent />
            </div>
        </div>
    );
}

