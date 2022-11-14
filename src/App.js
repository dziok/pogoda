import { CitySelect } from './pages/citySelect/CitySelectComponent.js';
import { WeatherPage } from './pages/weatherPage/WeatherPageComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {
    document.title = "Pogoda"
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CitySelect />
                </Route>
                <Route path={["/weather/:id", "/weather"] }>
                    <WeatherPage />
                </Route>
            </Switch>
        </Router>
    );
}