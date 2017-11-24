import React from 'react';
import ReactDOM from 'react-dom';

// 他のjs読み込み
import {agoTest} from './ago'

// stylus読み込み
import styles from '../stylus/style.styl'

ReactDOM.render(
  <div>Hello React!!</div>,
  document.getElementById('app'),
);


agoTest();
