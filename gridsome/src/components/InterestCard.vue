<template>
  <div class="interest-card">
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
  box-shadow: 0 5px 5px 5px rgba(75, 75, 75, 0.1);
  transition: all 1s ease;

  &:hover {
    background: white;
  }

  h1 {
    font-weight: 400;
    font-size: 20px;
  }
}
</style>
