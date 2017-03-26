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

export default class Attentiondata extends Component {

  chartInit() {
    let chart = echarts.init(this.refs.attentionChart);
    let {attentiony: attentionyArr} = bilidata;
    let {attentionx: attentionxArr} = bilidata;
    let total = 0;
    let sortArr = [];
    let count = 0;
    attentionyArr.forEach((item, index) => {
      total += item;
      if (attentionxArr[index] > 12) {
        count += item;
      } else {
        let o = {
          name: attentionxArr[index],
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
        text: "用户关注数统计",
        subtext: "共计" + total + '条数据',
        left: 'center'
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
          data: attentionxArr,
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          data: attentionyArr
        }
      ],
      series: [
        {
          name: '关注数',
          type: 'line',
          data: attentionyArr
        }, {
          name: '关注',
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
        <div ref="attentionChart" className="charts" style={{width: "100%"}}></div>
      </section>
    )
  }
}