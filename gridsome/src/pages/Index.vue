<template>
  <Layout>
    <section id="landing-screen">
      <div class="landing-overlay"></div>
      <div class="landing-header landing-block">
        <h1 class="landing-title pad-m mg-0">
          Digital Garden
        </h1>
        <div class="landing-name">
          <h3 class="landing-firstname mg-0 mg-v-m">Miika</h3>
          <h3 class="landing-lastname mg-0">Savela</h3>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div>
        <h2>What is Digital <span class="highlight-blue">Garden</span>?</h2>
        <p>
          As the name implies, it's digital equivalent of garden for me. Instead
          of plants, I take care of my digital hobbies and share thoughts
          surrounding the topics that interest me.
        </p>
      </div>
      <section id="interests-section">
        <InterestCard
          v-for="(interest, index) in interests"
          :key="index"
          :interest="interest"
        />
      </section>
      <section id="how-its-made">
        <div>
          <h3>How it's made</h3>
          <p>
            This garden is built by usinging
            <a href="https://jamstack.org/">JAMstack</a>.
          </p>
        </div>
        <div>
          <h3>Building bricks</h3>
          <Brick>
            <img
              src="logo_gridsome_text.svg"
              alt="Gridsome logo"
              class="logo-m logo-img"
            />
            <p>
              Gridsome is Vue based static site generator inspired by Gatsby.
            </p>
            <a href="http://gridsome.org">Learn more about Gridsome</a>
            <h3>Why Gridsome?</h3>
            <p>
              I chose Gridsome because it's based on Vue which is technology I'm
              familiar with and wanted to experiment how Static Site Generators
              differ from Single Page Applications (SPA:s) in terms of speed,
              developer experience and usability.
            </p>
          </Brick>
          <Brick>
            <img
              src="logo_sanity.png"
              alt="Gridsome logo"
              class="logo-m logo-img"
            />
            <p>
              Sanity is Headless CMS providing combining great customisability
              and ease of use
            </p>
          </Brick>
        </div>
      </section>
    </section>
    <Footer />
  </Layout>
</template>

<script>
import InterestCard from '@/components/InterestCard'
import Footer from '@/components/Footer'
import Brick from '@/components/Brick'

export default {
  components: {
    InterestCard,
    Footer,
    Brick,
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
          icon_filename: 'icon_photography.png',
        },
        {
          title: 'Video Games',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
          icon_filename: 'icon_games.png',
        },
        {
          title: 'Cooking',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
          icon_filename: 'icon_cooking.png',
        },
        {
          title: 'Exercising',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
          icon_filename: 'icon_exercising.png',
        },
        {
          title: 'Digital Products',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
          icon_filename: 'icon_product.png',
        },
        {
          title: 'Web Development',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum sapien quis justo tincidunt interdum.',
          icon_filename: 'icon_webdev.png',
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
  width: 100%;
  background: url('/garden.jpg');
  background-size: cover;
}

.landing-overlay {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    rgba(75, 75, 75, 0.2) 0%,
    90%,
    rgba(75, 75, 75, 0.7)
  );
}

.landing-header {
  display: flex;
  flex-direction: column-reverse;
  color: white;
  width: 100%;
}

.landing-title {
  z-index: 2;
  font-size: var(--text-48);
  color: var(--primary-green-200);
}

.landing-name {
  transform: rotate(-90deg);
  position: absolute;
  right: -60px;
  top: 70%;
  font-size: var(--text-20);
  color: var(--primary-green-200);
}

.landing-firstname {
  animation: slide-from-top 1.5s ease-out;
  animation-delay: 1s;
}

.landing-lastname {
  animation: slide-from-top 1.5s ease-out;
  animation-delay: 2s;
}

.landing-firstname,
.landing-lastname {
  display: inline-block;
  animation-fill-mode: forwards;
  transform: translateX(1000px);
}

.main-content {
  margin: 0 auto;
  width: 90%;
  max-width: var(--content-max-width);
  position: relative;
  margin-bottom: 80px;
}

#interests-section {
  display: flex;
  flex-wrap: wrap;
}
</style>
