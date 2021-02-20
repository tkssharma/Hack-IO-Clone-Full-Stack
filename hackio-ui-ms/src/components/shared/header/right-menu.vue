<template>
    <ul class="rightMenu_list">
      <li class="rightMenu_item">
        <span class="rightMenu_profile">
          <img
            class="rightMenu_img"
            :src="SearchIcon"
            alt="profile-icon"
          />
        </span>
      </li>
      <li class="rightMenu_item">
        <span class="rightMenu_profile">
          <img
            class="rightMenu_img"
            :src="ProfileIcon"
            alt="profile-icon"
          />
        </span>
      </li>
      <li class="rightMenu_item">
        <span class="rightMenu_profile">
          <img
            class="rightMenu_img"
            :src="NotificationIcon"
            alt="profile-icon"
          />
        </span>
      </li>
      <li class="rightMenu_item">
        <NavLink to="/bookmarks" class="rightMenu_bookmark">
          <img
            class="rightMenu_img"
            :src="BookMarkIcon"
            alt="bookmark-icon"
          />
        </NavLink>
      </li>
    </ul>
</template>
  
   
<script>
import BookMarkIcon from '../../../assets/images/bookmark-marked.svg';
import NotificationIcon from '../../../assets/images/notification.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import SearchIcon from '../../../assets/images/search.png'
export default {
  data(){
    return {
      BookMarkIcon,
      NotificationIcon,
      ProfileIcon,
      SearchIcon
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variable";
@import "../../../assets/scss/mixins";

.rightMenu {
  &-section {
    @include media(null, $bp-medium) {
      float: none;
      margin: 24px 0 23px;
      position: absolute;
      right: 20px;
      top: 0;
    }

    float: right;
  }

  &_list {
    @include padding-margin;
    @include clear-list;
    float: right;
  }

  &_item {
    @include media(null, $bp-xmedium) {
      padding: 0 16px;

      &:nth-last-child(3) {
        padding-left: 0;
      }
    }

    @include media(null, $bp-medium) {
      padding: 0 10px;
    }

    display: inline-block;
    padding: 0 15px;
    position: relative;
    vertical-align: middle;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    span {
      cursor: pointer;
    }

    &.item-hide {
      @include media(null, $bp-large) {
        display: none;
      }
    }
  }

  &_img {
    height: 22px;
    position: relative;
    width: 22px;
    z-index: 2;
  }

  &_notification {
    &-count {
      @include media(null, $bp-xmedium) {
        left: 24px;
      }

      @include media(null, $bp-medium) {
        left: 12px;
      }

      background-color: $red-color;
      border-radius: 100%;
      color: $white-color;
      left: 50px;
      min-width: 22px;
      padding: 1px 3px 0;
      position: absolute;
      text-align: center;
      top: -10px;
    }
  }
}

.rightSubMenu {
  @include media(null, $bp-xmedium) {
    left: auto;
    right: -10px;
    top: 30px;
  }

  @include padding-margin;
  @include clear-list;
  background-color: $white-color;
  border: 1px solid $stroke-color;
  left: -90px;
  position: absolute;
  top: 35px;
  width: 240px;
  z-index: 1;

  &::before {
    @include media(null, $bp-xmedium) {
      left: auto;
      right: 8px;
    }

    border-bottom: 10px solid $cream-color;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    content: "";
    left: 90px;
    position: absolute;
    top: -19px;
    z-index: 0;
  }

  &::after {
    @include media(null, $bp-xmedium) {
      left: auto;
      right: 7px;
    }

    border-bottom: 11px solid $stroke-color;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 11px solid transparent;
    content: "";
    left: 90px;
    position: absolute;
    top: -21px;
    z-index: -1;
  }

  &_item {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: center;

    &:not(:last-child) {
      border-bottom: 1px solid $stroke-color;
    }
  }

  &_link {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>