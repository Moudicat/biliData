/**
 * Created by Moudi on 2017/3/24.
 */
import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/map';
import 'echarts/lib/component/visualMap';
import '../../dist/data/china.json';
import bilidata from '../data.js';
require('../data/china.js');

export default class Placedata extends Component {

  chartInit() {
    let chart = echarts.init(this.refs.placeChart);
    chart.showLoading('default', {
      text: '加载中...',
      maskColor: '#fafafa'
    });
    let {place} = bilidata;
    let total = 0;
    place.forEach((item) => {
      total += item.value;
    });
    let options = {
      title: [{
        text: "用户地域分布图",
        subtext: "共计" + total + '条数据',
        left: 'center'
      }],
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        min: 100,
        max: 110000,
        text: ['多', '少'],
        calculable: true,
        inRange: {
          color: [ '#a3bbf8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      series: [
        {
          name: '用户地域分布',
          type: 'map',
          map: 'china',
          roam: true,
          center: [75.97, 41.71],
          data: place,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          }
        }
      ]
    };
    // let  xhr = new XMLHttpRequest();
    // xhr.open('get', './dist/data/china.json');
    // xhr.send();
    // xhr.onload = function () {
    //   echarts.registerMap('china', JSON.parse(xhr.responseText));
    // }
    chart.setOption(options);
    chart.hideLoading();
  };

  componentDidMount() {
    this.chartInit()
  }

  componentDidUpdate() {
    this.chartInit()
  }

  render() {
    return (
      <section>
        <div ref="placeChart" className="charts" style={{width: "100%"}}></div>
      </section>
    )
  }
}