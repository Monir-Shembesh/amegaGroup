import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';

const DEVICE_WIDTH = Dimensions.get('window').width;

const CHART_CONFIG: ChartConfig = {
  backgroundColor: '#c0ddfa',
  backgroundGradientFrom: '#c0ddfa',
  backgroundGradientTo: '#c0ddfa',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(202, 79, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '0',
    stroke: '#ffa726',
    opacity: 0,
  },
};

interface props {
  data: number[];
}

const TickerLineChart = ({data}: props) => {
  console.log(data);
  return (
    <LineChart
      data={{
        labels: [''],
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={DEVICE_WIDTH * 0.95}
      height={220}
      chartConfig={CHART_CONFIG}
      bezier
      style={styles.chart}
      segments={11}
      withDots={false}
    />
  );
};

export default TickerLineChart;

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
});
