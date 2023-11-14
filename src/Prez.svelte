<script>
  import Ancres from "./pages/ancres.svelte";
  import ASavoir from "./pages/aSavoir.svelte";
  import Exercices from "./pages/exercices.svelte";
  import ExosSupplementaires from "./pages/exosSupplementaires.svelte";
  import Fin from "./pages/fin.svelte";
  import Flags from "./pages/flags.svelte";
  import Groupes from "./pages/groupes.svelte";
  import Intro from "./pages/intro.svelte";
  import LazyGreedy from "./pages/lazyGreedy.svelte";
  import Ou from "./pages/ou.svelte";
  import Outils from "./pages/outils.svelte";
  import PosixGrepSed from "./pages/posixGrepSed.svelte";
  import Quantifieurs from "./pages/quantifieurs.svelte";
  import Metasequences from "./pages/ranges-metasequences.svelte";
  import Ressources from "./pages/ressources.svelte";
  import Securite from "./pages/securite.svelte";
  import Standard from "./pages/standard.svelte";
</script>

<div class="reveal">
  <div class="slides">
    <Intro />
    <ASavoir />
    <Outils />
    <Standard />
    <Metasequences />
    <Ou />
    <Groupes />
    <Flags />
    <Ancres />
    <Quantifieurs />
    <LazyGreedy />
    <Exercices />
    <Securite />
    <PosixGrepSed />
    <Fin />
    <ExosSupplementaires />
  </div>
</div>

<style>
  @import './assets/old.css';
</style>