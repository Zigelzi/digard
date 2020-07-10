<template>
  <Layout>
    <section id="landing-screen">
      <div class="landing-left landing-block">
        <h1>Welcome to my Digital Garden!</h1>
        <p>
          I'm Miika Savela and this is my digital garden. It's my small plot in
          the internet that I take care of.
        </p>
      </div>
      <!-- <div class="landing-right landing-block">
        <div>
          <g-image class="framed-image" src="@/assets/img/garden.jpg" />
        </div>
      </div> -->
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
  height: 60vh;
  width: 100vw;
}
.landing-block {
  flex-basis: 50%;
}

.landing-left {
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  h1 {
    margin-top: 10%;
  }
}

.framed-image {
  width: 250px;
  margin-top: 20px;
  margin-left: 50px;
  padding: 10px;
  border: 3px solid black;
  transform: rotateZ(7deg);
}

.main-content {
  margin: 0 auto;
  width: 90%;
  max-width: var(--content-max-width);
}

#interests-section {
  display: flex;
  flex-wrap: wrap;
}
</style>
