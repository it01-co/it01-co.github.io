<template>
  <demo-section>
    <demo-block title="基础用法（等分）">
      <h-tabs v-model="active">
        <h-tab
          :title="$t('tab') + index"
          v-for="index in 4"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block title="基础用法（左对齐）">
      <h-tabs :average="false">
        <h-tab title="食物参照量">食物参照量</h-tab>
        <h-tab title="每日营养目标">每日营养目标</h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <h-tabs @scroll="onScroll" :ellipsis="false">
        <h-tab
          v-for="index in 8"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <h-tabs @disabled="onClickDisabled">
        <h-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <h-tabs type="top">
        <h-tab
          v-for="index in 3"
          :title="`选项卡${index}`"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <h-tabs @click="onClick">
        <h-tab
          v-for="index in 2"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <h-tabs
        :active="active"
        sticky
      >
        <h-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title7')">
      <h-tabs :active="active">
        <h-tab
          v-for="index in 2"
          :key="index"
        >
          <div slot="title">
            <h-icon style="vertical-align: baseline;" size="17px" name="estimate" />{{ $t('tab') }}
          </div>
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <h-tabs
        animated
      >
        <h-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <h-tabs
        :active="active"
        swipeable
        animated
      >
        <h-tab
          :title="$t('tab') + index"
          v-for="index in 8"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </h-tab>
      </h-tabs>
    </demo-block>

    <demo-block title="自定义日历用法">
      <h-tabs
        :active="todayIndex"
        swipeable
        animated
        :lineShow="false"
        :average="false"
        class="calendar"
      >
        <h-tab v-for="(item, i) in data" :key="`${i}`">
          <template slot="title">
            <div :class="{top: true, today: isToday(item)}">{{item | getCutWeek}}</div>
						<div :class="{bto: true, rest: item.getDay() === 6 || item.getDay() === 0}">{{item | getCutDay}}</div>
          </template>
					{{item}}
        </h-tab>
      </h-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled'
    }
  },

  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4],
			data:[],
			todayIndex: 0
    };
  },
	filters: {
		// 获取当前天的值
		getCutDay: function (date) {
				return date.getDate();
		},
		// 获取当前天对应的周 或者今日
		getCutWeek: function (date) {
			if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) return '今日'
			let weekNum = date.getDay()
			let weekString;
			if (weekNum == 1) {
					weekString = "一"
			} else if (weekNum == 2) {
					weekString = "二"
			} else if (weekNum == 3) {
					weekString = "三"
			} else if (weekNum == 4) {
					weekString = "四"
			} else if (weekNum == 5) {
					weekString = "五"
			} else if (weekNum == 6) {
					weekString = "六"
			} else {
					weekString = "日"
			}
			return weekString;
		}
	},
	created() {
		this.data = this.getDateList(new Date(this.getNextDate(-5)),new Date(this.getNextDate(25)))
		this.todayIndex = this.data.findIndex(date => date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate())
	},
  methods: {
		isToday(date) {
			if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
				return true
			}else {
				return false
			}
		},
		getDateList (startDate, endDate) {
			const dateList = []
			dateList.push(new Date(startDate))
			while (true) {
				startDate.setDate(startDate.getDate() + 1)
				if (startDate.getTime() < endDate.getTime()) {
					dateList.push(new Date(startDate))  
				} else {
					break
				}
			}
			dateList.push(new Date(endDate))
			return dateList
		},
		getNextDate(day) {  
			var dd = new Date();
			dd.setDate(dd.getDate() + day);
			var y = dd.getFullYear();
			var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
			var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
			return y + "-" + m + "-" + d;
		},
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    onScroll(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;

  .h-tab .h-icon {
    margin-right: 5px;
  }

  .h-tab__pane {
    background-color: rgb(250,250,250);
    padding: 20px;
  }
}
.calendar {
  padding-top: 60px;
  .h-tabs__wrap {
		height: 60px;
		&::before {
			width: 19.5px;
		}
		&::after {
			width: 19.5px;
		}
		.bc {
			padding: 0 5.125px;  // 补充元素
		}
		.h-tab {
			flex-basis: 32px!important;
			margin: 0 9.25px;
			.custom {
        width: 100%;
				height: 60px;
				padding-top: 4px;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				white-space: nowrap;
				.top {
					font-size:14px;
					color:rgba(140,140,140,1);
					line-height:14px;
					font-weight: normal
				}
				.today {
					color:rgba(255,130,152,1);
				}
				.bto {
					width: 32px;
					height: 32px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size:17px;
					font-weight:bold;
					color:rgba(38,38,38,1);
					line-height:17px;
				}
				.rest {
					color:rgba(191,191,191,1);
				}
			}
		}
		.h-tab--active {
			.custom {
				.top {
					font-weight: normal
				}
				.bto {
					border-radius: 50%;
					background:rgba(255,130,152,1);
					box-shadow:0px 3px 9px 0px rgba(255,130,152,0.35);
					color:rgba(255,255,255,1);
				}
			}
		}
  }
}
</style>
