import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useWeatherPageStyles } from './weatherPageStyle.js'
import cities from "../../constants/cityList.json"
import { fetchWeatherData } from '../../api/fetchWeatherData'
import Typography from '@material-ui/core/Typography'
import { formatHour } from '../../utils/formatDate.js';
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import { SelectedHourMobileVersion } from './SelectedHour/SelectedHourMobileVersionComponent'
import { SelectedHour } from './SelectedHour/SelectedHourComponent'
import { iconesList } from '../../constants/iconesList.js';
import { daysOfTheWeek } from '../../constants/daysOfTheWeek.js';
import { TemperatureChart } from './chart/TemperatureChart.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const WeatherPage = () => {
  const classes = useWeatherPageStyles()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [specificData, setSpecificData] = useState()
  const { id } = useParams()
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const [chartlabel, setChartlabel] = useState("Temperatura(°C) ")
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    let isCanceled = false
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchWeatherData(id)
        const currentData = data?.data?.list
        setSpecificData(currentData[0])
        const GroupedData = {}
        currentData.forEach((item, index) => {
          const Objectdate = new Date(item.dt_txt).getMonth() + "_" + new Date(item.dt_txt).getDate()
          if (!GroupedData[Objectdate]) {
            GroupedData[Objectdate] = []
          }
          GroupedData[Objectdate].push(item)
        })
        const compareNumbers = (a, b) => {
          return a[0].dt - b[0].dt
        }
        if (!isCanceled) setData(Object.values(GroupedData).sort(compareNumbers))
      } catch (e) {
        if (!isCanceled) setError(true)
      }
      if (!isCanceled) setLoading(false)
    }
    fetchData()

    return () => {
      isCanceled = true
    }
  }, [id])


  const HourClick = (hour, e) => {
    setSpecificData(hour)
  }

  const handleChangeSwitch = (event) => {
    setCheckedSwitch(event.target.checked)
    if (checkedSwitch) { setChartlabel("Temperatura(°C) ") }
    else { setChartlabel("Siała wiatru(km/h) ") }
  }

  const city = cities.find((element) => {
    return element.id === Number(id);
  })
  return <div>
    {loading && <div className={classes.loadingGifContainer}> <CircularProgress disableShrink /></div>}
    {(error && !loading) && <Typography variant="h3" color="error">Error</Typography>}
    {
      (!error && !loading) && (
        <div className={classes.pageDivision}>
          {matches
            ? <SelectedHourMobileVersion transferredData={specificData} city={city} checkedSwitch={checkedSwitch} handleChangeSwitch={handleChangeSwitch} />
            : <SelectedHour transferredData={specificData} city={city} checkedSwitch={checkedSwitch} handleChangeSwitch={handleChangeSwitch} />}
          <div className={classes.root}>
            {data.map((day, index) => {
              const isOdd = index % 2 !== 0
              return <div
                className={
                  clsx({
                    [classes.MainContainer]: true,
                    [classes.MainContainer_odd]: isOdd
                  })
                }
                key={index} >
                <Typography variant='h4' className={classes.daysOfTheWeek}>{daysOfTheWeek[new Date(day[0].dt_txt).getDay()]}</Typography> 
                <div className={classes.DayContainer}>
                <Typography variant='body1' className={classes.chartlabel} >{chartlabel}</Typography>
                  <TemperatureChart chartData={day} isSwitchChecked={checkedSwitch} />
                  <div
                    className={clsx({
                      [classes.dataContainerContainer]: true,
                      [classes.dataContainerContainer_odd]: isOdd
                    })}>
                    {
                      day.map((hour, index) => {
                        const isSelected = specificData.dt === hour.dt
                        return (
                          <div
                            onClick={(e) => HourClick(hour, e)}
                            key={index}
                            className={clsx({
                              [classes.dataContainer]: true,
                              [classes.dataContainer_selected]: isSelected
                            })}>
                            <Typography variant='body2' className={classes.time}>{formatHour(hour.dt * 1000)} </Typography>
                            <div className={classes.temperatureContainer}>
                              <img alt='icon' className={classes.weatherIcon} src={iconesList[hour.weather[0].icon]} />
                              <Typography variant='body1' className={classes.bigText}>{Math.round(hour?.main?.temp - 273.15)}<sup>°C</sup></Typography>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            })
            }
          </div>
        </div>
      )
    }
  </div >
}



