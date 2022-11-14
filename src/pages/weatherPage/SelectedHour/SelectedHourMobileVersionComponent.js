import React, { useState, useEffect } from 'react'
import { useSelectedHourMobileVersionStyle } from './SelectedHourMobileVersionStyle.js'
import Typography from '@material-ui/core/Typography'
import { formatHour } from '../../../utils/formatDate.js';
import clsx from 'clsx';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import { daysOfTheWeek } from '../../../constants/daysOfTheWeek.js';
import { iconesList } from '../../../constants/iconesList.js';
import { windDegrees } from '../../../constants/windDegrees.js';
import { windGust } from '../../../constants/windGust.js';
import { Link } from 'react-router-dom';
import { Switch } from '@material-ui/core';

const Detail = ({ children }) => <Typography component='span' color='primary'>{children}</Typography>
const Temp = ({ children }) => <Detail> {Math.round(children - 273.15)}°C</Detail>
const Gust = ({ children }) =>
  <Detail> {windGust.find((item, index) => { return item.min <= children && children <= item.max })?.name} </Detail>

const Degree = ({ children }) =>
  <Detail> {windDegrees.find((item, index) => { return item.min <= children && children <= item.max })?.name}</Detail>

export const SelectedHourMobileVersion = ({ transferredData = {}, city, checkedSwitch, handleChangeSwitch }) => {
  const classes = useSelectedHourMobileVersionStyle()
  const [highlightChange, setHighlightChange] = useState(false)
  const { main, wind } = transferredData
  console.log(checkedSwitch)
  useEffect(() => {
    setHighlightChange(true)
    let timer1 = setTimeout(() => setHighlightChange(false), 200)

    return () => {
      clearTimeout(timer1)
    }
  }, [transferredData?.dt])

  return <div
    className={clsx({
      [classes.dataContainer]: true,
      [classes.dataContainer_animation]: highlightChange
    })}>
    <div className={classes.header}>
      <div className={classes.cityLabel}>
        <div className={classes.selectedCityContainer}>
          <IconButton size='medium' color='secondary' component={Link} to="/" >
            <ArrowCircleLeftIcon fontSize="large" className={classes.backLink} />
          </IconButton>
          <Typography variant="h4">{city?.label}</Typography>
        </div>
        <Typography variant="subtitle1">{daysOfTheWeek[new Date(transferredData.dt_txt).getDay()]}  {formatHour(transferredData.dt * 1000)}</Typography>
      </div>
      <div className={classes.temperatureContainer}>
        <img alt='icon' className={classes.weatherIcon} src={iconesList[transferredData.weather[0].icon]} />
        <Typography variant='h3' className={classes.bigText}>{Math.round(transferredData?.main?.temp - 273.15)}<sup>°C</sup></Typography>
      </div>
    </div>
    <div
      className={clsx({
        [classes.cityLabelBorder]: true,
        [classes.cityLabelBorder_animation]: highlightChange
      })} />

    <div className={classes.DetailsContainer}>
      <Typography>Wilgotność: <Detail>{main?.humidity}% </Detail></Typography>
      <Typography>Ciśnienie:<Detail> {main?.pressure}hPa </Detail></Typography>
      <Typography >Temp. odczuwalna: <Temp>{main?.feels_like}</Temp> </Typography>
      <Typography >Temp. maksymalna: <Temp>{main?.temp_max}</Temp> </Typography>
      <Typography >Temp. minimalna: <Temp>{main?.temp_min}</Temp></Typography>
      <Typography >Kierunek wiatru: <Degree>{wind?.deg}</Degree> </Typography>
      <Typography >Rodzaj wiatru: <Gust>{wind?.gust}</Gust></Typography>
      <Typography >Prędkość wiatru: <Detail>{Math.round(wind?.speed * 1.61)}km/h </Detail></Typography>
    </div>
    <div className={classes.chartTypeSwitchContainer}>
      <Typography color='primary'>Rodzaj wykresu:</Typography>
      <div className={classes.switchContainer}>
        <Typography variant='body2'>Temperatura</Typography>
        <Switch
          className={classes.switchChart}
          checked={checkedSwitch}
          onChange={handleChangeSwitch}
        />
        <Typography variant='body2'>Siła wiatru</Typography>
      </div>

    </div>

  </div>
}