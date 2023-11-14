<script>
  import bonjour from "../imgs/bonjour.png";
  import matchPar from "../imgs/match(.png";
</script>

<section>
  <section>
    <h1>Les caract&egrave;res sp&eacute;ciaux</h1>
    <div><span style="color:green">\ ^ $ . | ? * + ( ) [ {"{"}</span></div>
  </section>
  <section>
    <p>Par d&eacute;faut la regex va tenter de matcher</p>
    <p>tous les caract&egrave;res exactement</p>
    <a
      href="https://regex101.com/r/MgjCmQ/1"
      target="_blank"
      rel="noopener noreferrer"><img src={bonjour} alt=""/></a
    >
  </section>
  <section>
    <p>Sauf que cela ne suffisait pas pour d&eacute;crire</p>
    <p>des ensembles, sous-ensembles, et avoir</p>
    <p>un peu de logique</p>
  </section>
  <section>
    <p>Pour matcher sur ces caract&egrave;res sp&eacute;ciaux</p>
    <p>
      il faut les &eacute;chapper avec un <span style="color:green">\</span>
    </p>
    <a
      href="https://regex101.com/r/cP6Mov/1"
      target="_blank"
      rel="noopener noreferrer"><img src={matchPar} alt=""/></a
    >
  </section>
</section>
