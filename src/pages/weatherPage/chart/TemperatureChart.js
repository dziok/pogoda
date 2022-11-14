import React from 'react'
import { Chart } from 'react-charts'
import { useTheme } from '@material-ui/core';
import { formatHour } from '../../../utils/formatDate';

export function TemperatureChart({ chartData, isSwitchChecked}) {
  const { palette } = useTheme();

  const parsedChartData = chartData.map((item, index) => {
    const wind = Math.round(item?.wind?.speed * 1.61)
    const temperature = Math.round(item?.main?.temp - 273.15)
    if (!isSwitchChecked) {
      return {
        x: item.dt * 1000,
        y: temperature,
        r: '°C'
      }
    }
    return {
      x: item.dt * 1000,
      y: wind,
      r: 'km/h'
    }
  })

  const data = React.useMemo(
    () => [
      {
        label: isSwitchChecked
        ? 'wiart'
        : 'temp.',
        data: parsedChartData,
        width: '100px',
        color: isSwitchChecked
          ? palette.secondary.main
          : palette.primary.main,
      }
    ],
    [isSwitchChecked, palette.primary.main, palette.secondary.main, parsedChartData]
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left', }
    ],
    []
  )

  const getPrimary = React.useCallback(datum => formatHour(datum.x), [])

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
      }}
    >
      <Chart
        series={{}}
        axes={axes}
        data={data}
        getPrimary={getPrimary}
        tooltip
      />
    </div>
  )
}
