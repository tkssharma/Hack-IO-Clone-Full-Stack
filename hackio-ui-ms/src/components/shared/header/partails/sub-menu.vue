<template>
  <div class="submenu-page__container">
    <div class="submenu__container">
      <ul class="nav navbar-nav nav-subheader-list js-site-navbar">
        <li>
          <a
            href="/"
            class="navbar-subnav-links active site-navigation js-site-navigation"
            data-sub_site="Learn"
          >
            <span class="nav-img">
              <img
                class="nav-icon"
                src="https://hackr.io/assets/images/nav-icons-new/book.svg"
              />
              learn
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://io/programming/roadmaps"
            class="navbar-subnav-links site-navigation js-site-navigation"
            data-sub_site="Roadmaps"
          >
            <span class="nav-img">
              <img
                class="nav-icon nav-icon-lg"
                src="https://hackr.io/assets/images/nav-icons-new/roadmap.svg"
              />
              roadmaps
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://io/programming/news"
            class="navbar-subnav-links site-navigation js-site-navigation"
            data-sub_site="News"
          >
            <span class="nav-img">
              <img
                class="nav-icon"
                src="https://hackr.io/assets/images/nav-icons-new/news.svg"
              />
              news
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://io/programming/news"
            class="navbar-subnav-links site-navigation js-site-navigation"
            data-sub_site="News"
          >
            <span class="nav-img">
              <img
                class="nav-icon"
                src="https://hackr.io/assets/images/nav-icons-new/blog.svg"
              />
              blogs
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../../assets/scss/variable";
@import "../../../../assets/scss/mixins";

.submenu-page__container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  max-width: 100%;
  background: #cccccc73;
  .submenu__container {
    @include media(null, $bp-medium) {
      display: none;
    }
    .nav-subheader-list {
      @include media(null, $bp-medium) {
        padding-left: 1rem;
      }

      display: flex;
      align-items: center;
      list-style: none;
      width: 100%;
      margin: 0;
      vertical-align: middle;
      &:first-child {
        margin-left: 3rem;
      }
      li {
        margin-right: 3.5rem;
        position: relative;
        display: block;

        .nav-img {
          display: flex;
          align-items: center;

          .nav-icon {
            width: 1rem;
            filter: invert(59%) sepia(7%) saturate(4%) hue-rotate(315deg)
              brightness(80%) contrast(91%);
            margin-right: 5px;
            vertical-align: middle;
          }
        }
      }

      .navbar-subnav-links {
        font-size: 12px;
        display: block;
        padding: 1rem 0 !important;
        color: rgba(56, 56, 56, 0.7);
        background: transparent;
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1;

        &.active,
        &:focus,
        &:active,
        &:hover {
          font-size: 12px;
          color: #0079bc !important;
          border-bottom: none !important;
          font-weight: bold !important;

          .nav-icon {
            width: 1rem;
            filter: invert(36%) sepia(97%) saturate(364%) hue-rotate(166deg)
              brightness(99%) contrast(94%);
          }
        }
      }
    }
  }
}
</style>