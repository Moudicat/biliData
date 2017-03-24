/**
 * Created by Moudi on 2017/3/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';

require('./css/main.scss');
const app = document.getElementById('app');
import {SideBar} from './components/SideBar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    window.location.hash = '';
  }
  render() {
    return (
      <div id="bilidata">
        <SideBar />
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, app);