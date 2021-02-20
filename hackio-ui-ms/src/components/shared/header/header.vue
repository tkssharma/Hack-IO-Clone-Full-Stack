<template>
  <Fragment>
    <header v-if="!isLoggedIn" class="header header-login">
      <div class="page__container">
        <div class="auth-logo">
          <img :src="logo" @click="handleClick" alt="logo" />
        </div>
      </div>
    </header>
    <header v-if="isLoggedIn" class="header">
      <div class="page__container">
        <div class="left-section">
            <ul class="nav-header-list navbar-left">
              <li :key="key.name" class="nav-item" v-for="key of menu">
                 <a href="" activeClass="active" class="nav-link">
                    <span>
                      <img :src="key.icon" class="nav-icon" />
                      {{key.name}}
                    </span>
                 </a>
              </li>
            </ul>
        </div>
        <div class="logo-section">
          <img :src="logo" @click="handleClickLogo" alt="logo" />
        </div>
        <div class="right-section">
            <RightMenu />
        </div>
      </div>
        <SubMenu />
    </header>
  </Fragment>
</template>
  
   
<script>
import RightMenu from './right-menu.vue';
import SubMenu from './partails/sub-menu';

import { Fragment } from 'vue-fragment'
import logo from '../../../assets/images/logo.png'
export default {
  components: {
    RightMenu,
    Fragment,
    SubMenu
  },
  data() {
    return {
      logo: logo,
      isLoggedIn: true,
      menu: [
        {
          name: 'programming',
          icon: 'https://hackr.io/assets/images/nav-icons/programming.svg',
        },
        {
          name: 'design',
          icon: 'https://hackr.io/sites/design/icon?ver=1563190142',
        },
        {
          name: 'devops',
          icon: 'https://hackr.io/sites/devops/icon?ver=1563190258',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      // TBD
    },
  },
};
</script>

<style lang="scss">
@import '../../../assets/scss/variable';
@import '../../../assets/scss/mixins';

.header {
  left: 0;
  position: static;
  top: 0;
  width: 100%;
  z-index: 10;

  @include media (null, $bp-xmedium) {
    display: none;
  }

  &-mobile {
    @include media (null, $bp-xmedium) {
      display: block;
    }
    display: none;
  }


  &.header-login {
    display: block;
    padding: 0;
    position: static;
  }
  >.page__container {
    @include media (null, $bp-xmedium) {
      border-bottom: 1px solid #ccc;
    }

    align-items: center;
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    min-height: 58px;

    .auth-logo {
      width: 400px;
      margin: 10px auto;
    }

  }

  .left-section {
    @include media (null, $bp-medium) {
      display: none;
    }

    flex-basis: 40%;
    float: left;

    .nav-header-list {
      display: flex;
      margin: 0 0 0 1rem;
      padding: 0;
      white-space: nowrap;

      .nav-item {
        display: inline-block;
        margin: 0 1rem;

        .nav-link {
          cursor: pointer;

          &.active {
            color: #0079bc;
            cursor: pointer;
            position: relative;
            background: transparent;

            &:before {
              content: '';
              position: absolute;
              top: 31px;
              left: 40%;
              display: inline-block;
              border-right: 12px solid transparent;
              border-bottom: 12px solid #e5e5e5;
              border-left: 12px solid transparent;
              border-bottom-color: #e5e5e5;
            }

            .nav-icon {
              width: 1.7rem;
              filter: invert(36%) sepia(97%) saturate(364%) hue-rotate(166deg) brightness(99%) contrast(94%);
              margin-right: 5px;
              vertical-align: middle;
            }
          }
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 16px;
          color: rgba(56, 56, 56, 0.7);
          font-weight: 700;
          cursor: pointer;
          margin: 0;
        }

        .nav-icon {
          width: 1.7rem;
          filter: invert(59%) sepia(7%) saturate(4%) hue-rotate(315deg) brightness(80%) contrast(91%);
          margin-right: 5px;
          vertical-align: middle;
        }
      }
    }
  }

  .right-section {
    margin-right: 20px;
    flex-basis: 40%;
    display: flex;
    justify-content: flex-end;

    @include media (null, $bp-medium) {
      margin-right: 0px;
      display: block;

    }

    .search-container {
      flex-basis: 50%;
      margin-right: 10px;

      .search-box {
        @include media (null, $bp-xmedium) {
          display: none;
        }

        background-size: 12px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #ffffff;
        padding: 4px 10px 4px 28px;
        outline: none;
        height: 28px;
        box-sizing: border-box;
        font-size: 14px;
        background-size: 20px;
        -webkit-transition: width 0.8s ease-in-out;
        transition: width 0.8s ease-in-out;

      }
    }


    .navbar-search {
      width: 100%;
      margin: 0 10px;
    }

    .search-animation {
      flex: 1;
      width: 30px;
      height: 28px;
      box-sizing: border-box;
      border: none;
      font-size: 14px;
      float: right;
      background-color: white;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px;
      position: relative;
      vertical-align: top;
    }

    .right-section__list {
      @include ul-li-clear-list;
      display: flex;
      align-items: center;
      padding-left: 0;
      list-style: none;

      li {
        position: relative;
        display: block;

        .submit {
          .icon-plus {
            padding-right: 4px;
            width: 17px;
            height: 17px;
          }
        }

        .submit-tutorial {
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 10px !important;
          border-radius: 4px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          border: 1px solid #ccc;
        }

        .padding-signup {
          display: flex;
          align-items: center;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 0 !important;
        }

        a {
          color: #7b7b7b;
          padding: 10px 16px;
          margin-right: 5px;
          border-radius: 4px;
          transition: all linear .2s;

          &:hover,
          &:active,
          &:focus {
            color: #ffffff;
            background-color: #3d7dc0;
            border-radius: 4px;
            cursor: pointer;
            transition: all linear .2s;
            opacity: 1;

            .icon-plus {
              padding-right: 4px;
              width: 17px;
              height: 17px;
              filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(1deg) brightness(9%) contrast(100%);
            }
          }
        }
      }
    }
  }

  .logo-section {
    display: flex;
    flex: 1;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    flex-basis: 20%;

    img {
      width: 100px;
      margin: 0 auto;
    }
  }
}

.header,
.footer {
  flex-shrink: 0;
}
</style>