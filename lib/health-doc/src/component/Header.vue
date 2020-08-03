<template>
  <div class="h-doc-header">
    <div class="h-doc-row">
      <div class="h-doc-header__top">
        <a class="h-doc-header__logo" :href="config.logo.href">
          <img :src="config.logo.image">
          <span>{{ config.logo.title }}</span>
          <span v-if="config.logo.version" class="h-doc-header__version">v{{ config.logo.version }}</span>
        </a>
        <ul class="h-doc-header__top-nav">
          <li
            v-for="(value, key) in config.nav"
            class="h-doc-header__top-nav-item"
            :class="{ active: key === active }"
            :key="key"
          >
            <a
              class="h-doc-header__top-nav-title"
              :href="typeof value === 'string' ? value : 'javascript:;'"
              :target="key === 'gitlab' ? '_blank' : ''"
              :class="{
                active: key === active,
                link: typeof value === 'string' && key !== 'gitlab'
              }"
            >
              <img class="octicon octicon-mark-gitlab" v-if="key === 'gitlab'" src="https://gitlab.jiankangyouyi.com/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png">
              <span v-else-if="key === 'lang'" class="h-doc-header__top-nav-lang" @click="onSwitchLang(value)">{{ value.text }}</span>
              <span v-else>{{ key }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h-doc-header',

  props: {
    config: Object,
    active: String
  },

  methods: {
    onSwitchLang(lang) {
      this.$router.push(this.$route.path.replace(lang.from, lang.to));
    }
  }
};
</script>

<style lang="less">
@import '../style/variable';

.h-doc-header {
  width: 100%;
  user-select: none;
  border-bottom: 1px solid @h-doc-border-color;
  .octicon-mark-gitlab {
    width: 26px;
    height: 26px;
    vertical-align: middle;
    margin-top: -3px;
  }
  &__top {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 @h-doc-padding;
    height: @h-doc-header-top-height;
    line-height: @h-doc-header-top-height;

    &-nav {
      flex: 1;
      text-align: right;

      > li {
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }

      &-lang {
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
        display: block;
        border-radius: 3px;
        text-align: center;
        color: @h-doc-code-color;
        border: 1px solid currentColor;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        transition: 0.3s ease-in-out;
        &:hover {
          color: @h-doc-blue;
        }
      }

      &-item {
        margin-left: 20px;
      }

      &-title {
        svg {
          fill: @h-doc-code-color;
          display: block;
          vertical-align: middle;
          transition: 0.3s ease-in-out;

          &:hover {
            fill: @h-doc-blue;
          }
        }

        &.link {
          color: @h-doc-text-color;
          border-bottom: 1px solid transparent;
          transition: 0.3s ease-in-out;

          &:hover,
          &.active {
            color: @h-doc-blue;
            border-bottom-color: #19b5fe;
          }
        }
      }

      .h-doc-header__arrow:hover {
        color: @h-doc-text-color;
      }

      .h-doc-header__arrow::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin-top: -1px;
        margin-left: 1px;
        margin-right: -4px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid #ccc;
        pointer-events: none;
      }
    }
  }

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 24px;
      margin-right: 5px;
    }

    span {
      font-size: 22px;
      color: @h-doc-black;
      font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    }

    .h-doc-header__version {
      font-size: 90%;
      padding-top: 7px;
      opacity: 0.7;
      margin-left: 3px;
      line-height: 1;
    }
  }

  &__bottom {
    height: @h-doc-header-bottom-height;
    line-height: @h-doc-header-bottom-height;

    &-nav {
      text-align: center;

      li {
        display: inline-block;
      }

      a {
        color: #fff;
        opacity: 0.8;
        display: block;
        padding: 0 20px;
        font-size: 14px;

        &.active {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &:hover,
        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
