<template>
  <div class="layout">
    <header class="header">
      <nav>
        <g-link>Test</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
