/**
 * Created by Moudi on 2017/3/23.
 */
import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import bilidata from '../data.js';

export default class Sexdata extends Component {

  chartInit() {
    let chart = echarts.init(this.refs.sexChart);
    let {sex: [...sexArr]} = bilidata;
    let total = 0;
    sexArr.map((item) => {
      total += item.value;
    });
    let colorList = ['#51b8fe', '#fa827d', '#59c5a7'];
    chart.setOption({
      color: colorList,
      title: [{
        text: "用户性别比例",
        subtext: "共计 " + total
      }],
      tooltip: {},
      grid: [{
        left: '3%',
        bottom: '3%',
        width: '50%',
        containLabel: true
      },
        {
          right: '3%',
          bottom: '3%',
          width: '40%',
          containLabel: true
        }],
      xAxis: [
        {
          type: 'category',
          data: ['男', '女', '保密'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '人数',
          type: 'bar',
          barWidth: '30%',
          data: sexArr,
          itemStyle: {
            normal: {
              color: (params) => {
                return colorList[params.dataIndex]
              }
            }
          }
        },
        {
          name: '性别比例',
          type: 'pie',
          radius: '55%',
          center: ['75%', '50%'],
          data: sexArr,
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{b}: ({d}%)'
              }
            }
          }
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
        <h2>性别数据</h2>
        <div ref="sexChart" className="charts" style={{width: "100%", height: "400px"}}></div>
      </section>
    )
  }
}