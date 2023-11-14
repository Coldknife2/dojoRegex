<script>
  import GithubImg from "../imgs/github.png";
  import AxaLogo from "../imgs/logo-axa.svg";
</script>

<section>
  <section>
    <h1>Dojo Regex</h1>
    <div class="intro-container">
      <div class="logo" style="background-image: url({AxaLogo});" />
      <div style="font-size: 0.8em">
        Auteurs : Rémi Fruteau de Laclos, Rémi Boussu
      </div>
    </div>
  </section>
  <section>
    <h3>navigation dans la présentation</h3>
    <div>
      <div>&darr; ou espace : slide suivante</div>
      <div>&uarr; : slide précédente</div>
      <div>&rarr; : chapitre suivant</div>
      <div>&larr; : chapitre précédent</div>
      <div>Echap : navigation parmis toutes les slides</div>
    </div>
  </section>
  <section>
    <div>La plupart des images sont cliquables !</div>
    <a
      href="https://github.com/Coldknife2/dojoRegex"
      target="_blank"
      rel="noopener noreferrer"
      ><img style="width: 10%" src={GithubImg} alt="" /></a
    >
  </section>
</section>

<style>
  .intro-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;
  }

  .logo {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-right: 60px;
    height: 128px;
    width: 128px;
  }
</style>
