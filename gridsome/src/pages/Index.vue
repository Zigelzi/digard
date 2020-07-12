<template>
  <Layout>
    <section id="landing-screen">
      <div class="landing-overlay"></div>
      <div class="landing-header landing-block mg-m">
        <h1>Digital Garden</h1>
        <div class="landing-name">
          <h2 class="landing-firstname mg-0 mg-v-s">Miika</h2>
          <h2 class="landing-lastname mg-0">Savela</h2>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div>
        <h2>What in the earth is Digital Garden?</h2>
        <p>
          As the name implies, it's digital equivalent of garden for me. Instead
          of plants, I take care of my digital hobbies and share thoughts
          surrounding the topics that interest me.
        </p>
      </div>
      <div id="interests-section">
        <InterestCard
          v-for="(interest, index) in interests"
          :key="index"
          :interest="interest"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import InterestCard from '@/components/InterestCard'

export default {
  components: {
    InterestCard,
  },
  metaInfo: {
    title: 'Index',
  },
  data() {
    return {
      interests: [
        {
          title: 'Digital Photography',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum. ',
        },
        {
          title: 'Video Games',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
        },
        {
          title: 'Cooking',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
        },
        {
          title: 'Exersizing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
        },
        {
          title: 'Digital Products',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
        },
        {
          title: 'Web Development',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#landing-screen {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url('/garden.jpg');
  background-size: cover;
}

.landing-overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(75, 75, 75, 0.2);
}

.landing-header {
  display: flex;
  flex-direction: column-reverse;
  color: white;

  h1 {
    margin-top: 10%;
  }
}

.landing-name {
  transform: rotate(-90deg);
  position: absolute;
  right: -60px;
  top: 70%;
}

.landing-firstname,
.landing-lastname {
  display: inline-block;
}

.main-content {
  margin: 0 auto;
  width: 90%;
  max-width: var(--content-max-width);
  position: relative;
}

#interests-section {
  display: flex;
  flex-wrap: wrap;
}
</style>
