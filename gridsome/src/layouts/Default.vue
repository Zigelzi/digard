<template>
  <div id="content">
    <Nav />
    <slot></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss"></style>
<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav,
  },
}
</script>
