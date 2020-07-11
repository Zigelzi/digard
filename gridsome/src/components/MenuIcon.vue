<template>
  <div
    class="icon-menu"
    @click="test"
    :class="{ 'hamburger-menu__open': navOpen }"
  >
    <div class="hamburger-menu"></div>
  </div>
</template>

<script>
export default {
  props: {
    navOpen: Boolean,
  },
  methods: {
    test() {
      console.log(`navOpen is ${this.navOpen}`)
      this.$emit('menuIconClicked')
    },
  },
  computed: {
    classObject() {
      return {
        //eslint-disable-next-line
        'hamburger-menu__open': this.navOpen,
      }
    },
  },
}
</script>

<style lang="scss">
.hamburger-menu {
  height: 6px;
  width: 50px;
  background: var(--secondary-navy);
  border-radius: 2px;

  transition: all 0.3s ease;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 6px;
    width: 50px;
    background: var(--secondary-navy);
    border-radius: 2px;
    transition: all 0.3s ease;

    // transform-origin: left;
  }

  &::before {
    transform: translateY(-16px);
  }

  &::after {
    transform: translateY(16px);
  }
}

.icon-menu {
  display: inline-block;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hamburger-menu__open {
  .hamburger-menu {
    // transform: translateX(50px);
    height: 0;
    width: 0;
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(-16px, 16px);
    }

    &::after {
      transform: rotate(-45deg) translate(-16px, -16px);
    }
  }
}
</style>
