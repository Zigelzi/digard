<template>
  <div id="content">
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
export default {}
</script>
