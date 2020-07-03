# Digital Garden of Miika Savela

This is my digital garden! It's place where I test, develop, practice and share things that interest me. Like in real life garden, some places get more care and attention than others and you might find some spots that aren't kept as well or might be even broken! But that's fine, I'm tending the garden as I go and I'll try my best to take care of the whole garden. But since this is just a hobby, I don't take any pressure from fixing everything right away. :)

[Read more of Digital Gardens from Joel Hooks piece](https://joelhooks.com/digital-garden)


## Technologies used
This garden is built using [JAMstack](https://jamstack.org/), JavaScript, API and Markup. I'm using [Gridsome](https://gridsome.org/), a VueJS based static site rendering framework, as the  frontend framework (the J of JAMstack) and [Sanity.io](https://www.sanity.io/) as the Headless CMS (A of the JAMstack).

## Directory structure
This project is based on two main directories
*gridsome* - The front end part of the site, where the most of the magic happens from visitors perspective!
*sanity-cms* - The Sanity CMS schemas and Sanity Studio directory. Where the nitty gritty details of storing the data and preseting it in Sanity Studio goes.

## How to start developing!
_Or, the guide how to come back when you fucked up and deleted the whole local directory._

### 1. Install Gridsome CLI tool if you don't have

`yarn global add @gridsome/cli`

### 2. Set up the Sanity Studio
1. Switch to Sanity folder with `cd sanity-cms`
2. Start the Sanity Studio dev version with `sanity start`

### 2. Spin up the Gridsome project
1. Switch to gridsome directory `cd gridsome`
2. Start the Gridsome development server with `gridsome develop`
3. Go to `localhost:8080` for the app or `localhost:8080___explore` to play in the GraphQL playground

## Reference documents
[Gridsome docs](https://gridsome.org/docs/)
[Sanity docs](https://www.sanity.io/docs)