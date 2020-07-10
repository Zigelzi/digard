<template>
  <div class="nav-overlay">
    <nav class="nav">
      <g-link class="nav__link mg-h-s" to="/">Home</g-link>
      <g-link class="nav__link mg-h-s" to="/">The Lab</g-link>
      <g-link class="nav__link mg-h-s" to="/">Photography</g-link>
    </nav>
    <MenuIcon class="nav-icon" />
  </div>
</template>

<style lang="scss">
.nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(200, 200, 200, 0.9);
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 40%;
}

.nav__link {
  font-size: var(--text-30);

  &:hover {
    color: var(--secondary-red);
  }
}

.nav-icon {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>

<script>
import MenuIcon from '@/components/MenuIcon'
export default {
  components: {
    MenuIcon,
  },
}
</script>
