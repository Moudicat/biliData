/**
 * Created by Moudi on 2017/3/23.
 */
import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/dataZoom';
import bilidata from '../data.js';

export default class Friendsdata extends Component {

  chartInit() {
    let chart = echarts.init(this.refs.friendsChart);
    let {friendsx} = bilidata;
    let {friendsy} = bilidata;
    let total = 0;
    let sortArr = [];
    let count = 0;
    friendsy.forEach((item, index) => {
      total += item;
      if (friendsx[index] > 12) {
        count += item;
      } else {
        let o = {
          name: friendsx[index],
          value: item
        };
        sortArr.push(o);
      }
    });
    sortArr.push({
      name: '其他',
      value: count
    });
    chart.setOption({
      title: [{
        text: "用户好友数统计",
        subtext: "共计 " + total + '条数据'
      }],
      tooltip: {
        trigger: 'axis',
        formatter: '{a}: {b} 共有{c}人'
      },
      dataZoom: [{
        show: true,
        type: 'slider',
        xAxisIndex: [0],
        start: 0,
        end: 10,
      }],
      grid: [{
        left: '3%',
        bottom: '10%',
        right: '3%',
        containLabel: true
      }, {
        right: '5%',
        top: '4%'
      }],
      xAxis: [
        {
          type: 'category',
          data: friendsx,
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          data: friendsy
        }
      ],
      series: [
        {
          name: '好友数',
          type: 'line',
          data: friendsy
        }, {
          name: '好友数',
          type: 'pie',
          radius: ['25%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b}: {d}%'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '18',
                fontWeight: '700'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          center: ['85%', '30%'],
          data: sortArr
        }
      ]
    })
  }

  componentDidMount() {
    this.chartInit()
  }

  componentDidUpdate() {
    this.chartInit()
  }

  render() {
    return (
      <section>
        <h2>好友数关系</h2>
        <div ref="friendsChart" className="charts" style={{width: "100%"}}></div>
      </section>
    )
  }
}