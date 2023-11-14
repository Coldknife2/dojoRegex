import Prez from './Prez.svelte'
import Reveal from 'reveal.js';

const app = new Prez({
  target: document.getElementById('app'),
})

let deck = new Reveal({
  history: true,
})
deck.initialize();

export default app
