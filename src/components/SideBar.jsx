/**
 * Created by Moudi on 2017/3/23.
 */
import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon, Switch} from 'antd';
const SubMenu = Menu.SubMenu;

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      current: 'homepage'
    }
  }
  changeTheme = (v) => {
    this.setState({
      theme: v ? 'dark' : 'light'
    })
  }
  handleClick = (ev) => {
    this.setState({
      current: ev.key
    })
  }
  render() {
    return (
      <nav className={"sidebar " + this.state.theme} >
        <img src={"./dist/img/" + (this.state.theme === 'light' ? 'logo.png' : 'logo-dark.png')} className="icon"/>
        <Menu
          theme={this.state.theme}
          selectedKeys={[this.state.current]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          onClick={this.handleClick}
          id="navbar"
        >
          <Menu.Item key="homepage"><Link to="/">首页</Link></Menu.Item>
          <SubMenu title="数据分析" key="sub1">
            <Menu.Item key="1"><Link to="/sex">性别比例</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/place">用户分布</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/birthday">用户生日统计</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/attention">关注数统计</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/fans">粉丝数统计</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/friends">好友数统计</Link></Menu.Item>
          </SubMenu>
          <SubMenu title="数据查询" key="sub2">
            <Menu.Item key="a1"><Link to="/usernames">用户名查询</Link></Menu.Item>
            <Menu.Item key="a2"><Link to="/birthdays">生日查询</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <Switch
          className="theme-switch"
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="夜间模式"
          unCheckedChildren="白天模式"
        />
      </nav>
    )
  }
}