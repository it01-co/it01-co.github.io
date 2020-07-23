/* eslint-disable */
// 此文件由build/build-entry.js自动生成
import Area from './area';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Icon from './icon';
import Laybg from './laybg';
import List from './list';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import Notify from './notify';
import Overlay from './overlay';
import Picker from './picker';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Row from './row';
import Slider from './slider';
import SliderGroup from './slider-group';
import Tab from './tab';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';

const version = '0.0.2';
const components = [
  Area,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Icon,
  Laybg,
  List,
  Loading,
  Locale,
  NavBar,
  Notify,
  Overlay,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Slider,
  SliderGroup,
  Tab,
  Tabs,
  Tag,
  Toast
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Area,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Icon,
  Laybg,
  List,
  Loading,
  Locale,
  NavBar,
  Notify,
  Overlay,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Slider,
  SliderGroup,
  Tab,
  Tabs,
  Tag,
  Toast
};

export default {
  install,
  version
};
