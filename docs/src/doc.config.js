/* eslint-disable */
const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://healthai.jiankangyouyi.com/dist/images/common/favicon.ico',
        title: 'Health UI',
        version,
        href: '#/'
      },
      nav: {
        github: "https://github.com/it01-co/HUI",
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        }
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              {
                path: '/style',
                title: '内置样式'
              },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/contribution',
                title: '开发指南'
              },
              {
                path: '/style-guide',
                title: '风格指南'
              },
              {
                path: '/locale',
                title: '国际化'
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/cell',
                title: 'Cell 单元格'
              },
              {
                path: '/icon',
                title: 'Icon 图标'
              },
              {
                path: '/col',
                title: 'Layout 布局'
              },
              {
                path: '/popup',
                title: 'Popup 弹出层'
              },
              {
                path: '/laybg',
                title: 'Laybg 圆角修饰'
              },
            ]
          },
          {
            groupName: '表单组件',
            list: [
              {
                path: '/radio',
                title: 'Radio 单选框'
              },
              {
                path: '/checkbox',
                title: 'Checkbox 复选框'
              },
              {
                path: '/datetime-picker',
                title: 'DatetimePicker 时间选择'
              },
              {
                path: '/picker',
                title: 'Picker 选择器'
              },
              {
                path: '/area',
                title: 'Area 省市区选择'
              },
            ]
          },
          {
            groupName: '反馈组件',
            list: [
              {
                path: '/dialog',
                title: 'Dialog 弹出框'
              },
              {
                path: '/loading',
                title: 'Loading 加载'
              },
              {
                path: '/notify',
                title: 'Notify 消息通知'
              },
              {
                path: '/toast',
                title: 'Toast 轻提示'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh 下拉刷新'
              },
              {
                path: '/list',
                title: 'List 上拉加载'
              }
            ]
          },
          {
            groupName: '展示组件',
            list: [
              {
                path: '/collapse',
                title: 'Collapse 折叠面板'
              },
              {
                path: '/tag',
                title: 'Tag 标记'
              }
            ]
          },
          {
            groupName: '导航组件',
            list: [
              {
                path: '/nav-bar',
                title: 'NavBar 导航栏'
              },
              {
                path: '/tab',
                title: 'Tab 标签页'
              },
              {
                path: '/slider',
                title: 'Slider 侧边导航'
              }
            ]
          }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: 'https://healthai.jiankangyouyi.com/dist/images/common/favicon.ico',
        title: 'Health UI',
        version,
        href: '#/'
      },
      nav: {
        github: "https://github.com/it01-co/HUI",
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        }
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              },
              {
                path: '/quickstart',
                title: 'Quickstart'
              },
              {
                path: '/style',
                title: 'Built-in style'
              },
              {
                path: '/theme',
                title: 'Custom Theme'
              },
              {
                path: '/locale',
                title: 'Internationalization'
              }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/col',
                title: 'Layout'
              },
              {
                path: '/popup',
                title: 'Popup'
              },
              {
                path: '/laybg',
                title: 'Laybg'
              },
            ]
          },
          {
            groupName: 'Form Components',
            list: [
              {
                path: '/radio',
                title: 'Radio'
              },
              {
                path: '/checkbox',
                title: 'Checkbox'
              },
              {
                path: '/datetime-picker',
                title: 'DatetimePicker'
              },
              {
                path: '/picker',
                title: 'Picker'
              },
              {
                path: '/area',
                title: 'Area'
              },
            ]
          },
          {
            groupName: 'Action Components',
            list: [
              {
                path: '/dialog',
                title: 'Dialog'
              },
              {
                path: '/loading',
                title: 'Loading'
              },
              {
                path: '/notify',
                title: 'Notify'
              },
              {
                path: '/toast',
                title: 'Toast'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh'
              },
              {
                path: '/list',
                title: 'List'
              },
            ]
          },
          {
            groupName: 'Display Components',
            list: [
              {
                path: '/collapse',
                title: 'Collapse'
              },
              {
                path: '/tag',
                title: 'Tag'
              }
            ]
          },
          {
            groupName: 'Navigation Components',
            list: [
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
              {
                path: '/tab',
                title: 'Tab'
              },
              {
                path: '/slider',
                title: 'Slider'
              }
            ]
          }
        ]
      }
    ]
  }
};
