<template>
  <div class="page-section">
    <div class="page-container">
      <div class="page-body">
        <div class="flex-grid home--flex-grid">
          <a
            v-for="list of technologyData"
            :key="list.id"
            href="/"
            class="home--flex-grid__item js-topic-grid-item"
          >
            <img
              class="topic-thumbnail"
              alt="Tutorials and Courses"
              :src="list.url"
            />
            <a href="/" class="js-topic"> {{list.title}} </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["technologyData"],
};
</script>
<style lang="scss">
.page-container {
  padding-left: 15px;
  padding-right: 15px;
  width: 80%;
  margin: 0 auto;
}

.page-section {
  padding: 40px 0 20px;
}

.paddingtop-sm {
  padding-top: 10px !important;
}

.marginbottom-lg {
  margin-bottom: 30px !important;
}

.home--flex-grid {
  flex-wrap: wrap;
  margin-left: -9.5px;
  margin-right: -9.5px;
  display: flex;
  justify-content: flex-start;

  &__item {
    min-height: 75px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
    margin-bottom: 17px;
    border-radius: 6px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    transition: .1s linear all;
    width: 32%;
    margin-left: .5%;
    margin-right: .5%;

    &:hover,
    &:visited,
    &:focus,
    &:active {
      background-color: #FFFFFF;
      color: #2b2b2b;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
      transition: .1s linear all;
      transform: translateY(-2px);
      border: 1px solid #EEEEEE;
    }
    .topic-thumbnail {
        margin-right: 15px;
        height: 40px;
        width: 40px;
        overflow: hidden;
    }
    .js-topic {
      text-decoration: none;
      color: #333331;
      text-align: center;
      text-decoration: solid;
      font-size: medium;
    }
    p {
      margin: 0;
      text-decoration: none;
      color: #383838;
      font-size: 16px;
      font-size: 16px!important;
      font-weight: 400!important;
    }
  }
}
</style>