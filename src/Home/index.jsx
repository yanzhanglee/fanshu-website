/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';
import Nav0 from './Nav0';
import Banner0 from './Banner0';
import Content0 from './Content0';
import Content1 from './Content1';
import Feature2 from './Feature2';
import Content5 from './Content5';
import Feature8 from './Feature8';
import Footer0 from './Footer0';
import Point from './Point';
import {
  Nav00DataSource,
  Banner00DataSource,
  Content00DataSource,
  Content10DataSource,
  Feature20DataSource,
  Content50DataSource,
  Feature80DataSource,
  Footer00DataSource,
} from './data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    /* 如果不是 dva 2.0 请使用以下代码
    // 实现整屏滚动
    const docHeight = this.dom.getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
    */
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
        // 实现整屏滚动
        const docHeight = this.dom.getBoundingClientRect().height;
        scrollScreen.init({ docHeight });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_0"
        key="Content1_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point
        key="list"
        data={[
          'Nav0_0',
          'Banner0_0',
          'Content0_0',
          'Content1_0',
          'Feature2_0',
          'Content5_0',
          'Feature8_0',
          'Footer0_0',
        ]}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
