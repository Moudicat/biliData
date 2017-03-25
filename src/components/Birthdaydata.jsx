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

export default class Birthdaydata extends Component {

  chartInit() {
    let chart = echarts.init(this.refs.birthdayChart);
    let {birthdayx, birthdayy} = bilidata;
    let total = 0;
    let sortArr = [];
    let count = 0;

    birthdayy.forEach((item, index) => {
      total += item;
    });
    chart.setOption({
      title: [{
        text: "用户生日统计",
        subtext: "共计 " + total + '条数据'
      }],
      tooltip: {
        trigger: 'axis',
        formatter: '{b}出生的共有{c}人'
      },
      dataZoom: [
        {
          start: 20,
          end: 90,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
      }],
      xAxis: [
        {
          type: 'category',
          data: birthdayx,
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          data: birthdayy
        }
      ],
      series: [
        {
          name: '生日统计图表',
          type: 'line',
          data: birthdayy,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: 'rgb(255, 70, 131)'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }])
            }
          },
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
        <h2>用户生日统计</h2>
        <div ref="birthdayChart" className="charts" style={{width: "100%"}}></div>
      </section>
    )
  }
}