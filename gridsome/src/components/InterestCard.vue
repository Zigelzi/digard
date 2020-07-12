<template>
  <div class="interest-card">
    <img
      class="icon-interest"
      :src="interest.icon_filename"
      :alt="'Icon for ' + interest.title"
    />
    <h1>{{ interest.title }}</h1>
    <p>{{ interest.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    interest: Object,
  },
}
</script>

<style lang="scss">
.interest-card {
  width: 300px;
  padding: 5px 20px;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: all 1s ease;

  &:hover {
    background: white;
  }

  h1 {
    font-weight: 400;
    font-size: 20px;
  }
}

.icon-interest {
  // height: 50px;
  width: 50px;
  stroke: white;
}
</style>
