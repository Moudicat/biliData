/**
 * Created by Moudi on 2017/3/26.
 */
import React, {Component} from 'react';
import { Table, notification } from 'antd';

export default class Spuserdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      height: 500
    }
  }
  componentWillMount() {
    this.setState({
      height: document.documentElement.clientHeight * .75
    })
  }
  componentDidMount() {
    notification.info({
      message: '数据查询界面提示：',
      description: '可以使用用户权限旁的小按钮进行筛选！',
    });
  }
  dataInit(cbk) {
    let  xhr = new XMLHttpRequest();
    xhr.open('get', './dist/data/spUser.json');
    xhr.send();
    xhr.onload = () => {
      cbk && cbk(JSON.parse(xhr.responseText));
    };
  }
  render() {
    const columns = [{
      title: '昵称',
      dataIndex: 'name',
      width: '8%',
      render: (text,o) => <a href={"http://space.bilibili.com/"+ o.key} target="_blank">{text}</a>
    }, {
      title: '性别',
      dataIndex: 'sex',
      width: '5%'
    }, {
      title: '用户权限',
      dataIndex: 'rank',
      width: '7%',
      filters: [{
        text: '普通用户组',
        value: '10000'
      }, {
        text: '31200',
        value: '31200'
      }, {
        text: '20000',
        value: '20000'
      }, {
        text: '25000',
        value: '25000'
      }, {
        text: '编辑组',
        value: '31000'
      }, {
        text: '管理员组',
        value: '32000'
      }, {
        text: '30000',
        value: '30000'
      }, {
        text: '31700',
        value: '31700'
      }, {
        text: '31100',
        value: '31100'
      }, {
        text: '31800',
        value: '31800'
      }, {
        text: '5000',
        value: '5000'
      }, {
        text: '31300',
        value: '31300'
      }],
      onFilter: (value, record) => record.rank == value
    }, {
      title: '生日',
      dataIndex: 'birthday',
      width: '7%'
    }, {
      title: '地点',
      dataIndex: 'place',
      width: '8%'
    }, {
      title: '描述',
      dataIndex: 'description',
      width: '20%'
    }, {
      title: '签名',
      dataIndex: 'sign',
      width: '35%'
    }];
    if (!this.state.data) {
      this.dataInit((data) => {
        this.setState({
          data
        })
      });
    }
    return (
      <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 20 }} scroll={{ y: this.state.height }} />
    )
  }
}