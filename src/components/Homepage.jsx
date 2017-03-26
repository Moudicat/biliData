/**
 * Created by Moudi on 2017/3/23.
 */
import React, {Component} from 'react';
import baffle from 'baffle';
export default class Homepage extends Component {
  componentDidMount() {
    baffle('#title').set({speed: 100}).reveal(3000);
    baffle('h2').set({speed: 120}).reveal(5000);
    baffle('h3').set({speed: 120}).reveal(6000);
  }


  render() {
    return (
      <div id="main">
        <h1 id="title">bilibili用户数据分析</h1>
        <h2>本站基于前588万用户数据生成</h2>
        <h3>数据抓取&数据处理：python + pandas</h3>
      </div>
    )
  }
}