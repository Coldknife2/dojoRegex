<script>
  import lazyGreedy from "../imgs/lazyGreedy.jpg";
</script>

<section>
  <section>
    <h1>Lazy VS Greedy</h1>
    <div><span style="color:red">?</span></div>
  </section>
  <section>
    <div>
      Par défaut, les quantifieurs&nbsp;<span style="color:green">+</span
      >
      et&nbsp;<span style="color:green">*</span> sont dit&nbsp;<span
        style="color:red">Greedy</span
      >
    </div>
    <br />
    <div>
      Cela signifie qu&apos;ils vont matcher autant de caract&egrave;res que
      possible avant d&apos;arriver &agrave; la prochaine contrainte
    </div>
  </section>
  <section>
    <div>
      A l&apos;inverse, si on rend un quantifieur&nbsp;<span style="color:red"
        >Lazy</span
      >, il s&apos;arr&ecirc;tera &agrave; la premi&egrave;re occasion
    </div>
  </section>
  <section>
    <div>
      L&apos;opérateur permettant de rendre un quantifieur&nbsp;<span
        style="color:red">lazy</span
      >
      est&nbsp;<span style="color:red">?</span>
    </div>
    <br />
    <div>
      Exemple : /<span style="color:green">[</span><span style="color:blue"
        >a</span
      ><span style="color:red">-</span><span style="color:blue">z</span><span
        style="color:green">]</span
      ><span style="color:green">+</span><span style="color:red">?</span><span
        style="color:blue">\d</span
      >/
    </div>
  </section>
  <section>
    Exemple : rendez lazy l&apos;expression, et voyez le résultat :<a
      href="https://regex101.com/r/YNVYfP/4"
      target="_blank"
      rel="noopener noreferrer"><img src={lazyGreedy} alt=""/></a
    >
  </section>
</section>
