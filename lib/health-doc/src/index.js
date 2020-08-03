import Vue from 'vue';
import HDoc from './HDoc.vue';
import Nav from './component/Nav.vue';
import Block from './component/Block.vue';
import Header from './component/Header.vue';
import Footer from './component/Footer.vue';
import Content from './component/Content.vue';
import Container from './component/Container.vue';
import Simulator from './component/Simulator.vue';
import DemoBlock from './component/DemoBlock.vue';
import DemoSection from './component/DemoSection.vue';
import progress from 'nprogress';
const components = [
  Nav,
  Header,
  Footer,
  HDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection
];

export default function install() {
  components.map(Component => {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(Component.name, Component);
  });
}

export {
  Nav,
  Header,
  Footer,
  HDoc,
  Block,
  Content,
  Container,
  Simulator,
  DemoBlock,
  DemoSection,
  progress
};
