<script>
  import match from "../imgs/match.jpg";
  import remplacementsNotepad from "../imgs/remplacementsNotepad++.jpg";
</script>

<section>
  <section>
    <h1>Les groupes</h1>
    <div><span style="color:red">()</span></div>
  </section>
  <section>
    <h2>Les groupes ont deux fonctions</h2>
    <br />
    <div>
      Rassembler un ensemble de contraintes ensembles pour les
      quantifier/appliquer une logique
    </div>
    <br />
    <div>Capturer des valeurs</div>
  </section>
  <section>
    <h3>Rassembler les contraintes</h3>
    <div>
      /<span style="color:blue">ab</span><span style="color:green">+</span>/ et
      /<span style="color:red">(</span><span style="color:blue">ab</span><span
        style="color:red">)</span
      ><span style="color:green">+</span>/ sont interprétés
      différemment
    </div>
    <table>
      <thead>
        <tr>
          <th>Input</th>
          <th style="color:grey">/ab+/</th>
          <th style="color:grey">/(ab)+/</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ab</td>
          <td><span style="color:blue">ab</span></td>
          <td><span style="color:blue">ab</span></td>
        </tr>
        <tr>
          <td>abb</td>
          <td><span style="color:blue">abb</span></td>
          <td><span style="color:blue">ab</span>b</td>
        </tr>
        <tr>
          <td>abab</td>
          <td><span style="color:blue">ab</span>ab</td>
          <td><span style="color:blue">abab</span></td>
        </tr>
        <tr>
          <td>abbbbbaaabbbbb</td>
          <td><span style="color:blue">abbbbb</span>aaabbbbb</td>
          <td><span style="color:blue">ab</span>bbbbaaabbbbb</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <div>On peut aussi faire un &quot;OU&quot; avec des groupes</div>
    <br />
    <div>
      /<span style="color:blue">ab</span>|<span style="color:blue">cd</span>/ et
      /<span style="color:blue">a</span><span style="color:red">(</span><span
        style="color:blue">b</span
      >|<span style="color:blue">c</span><span style="color:red">)</span><span
        style="color:blue">d</span
      >/ sont interprétés différemment
    </div>
    <br />
    <div>
      Le premier donne <span style="color:blue">ab</span> ou
      <span style="color:blue">cd</span>
    </div>
    <br />
    <div>
      Le second donne<span style="color:blue">&nbsp;a</span> et<span
        style="color:red">&nbsp;(</span
      ><span style="color:blue">b</span> ou<span style="color:blue"
        >&nbsp;c</span
      ><span style="color:red">)</span> et<span style="color:blue">&nbsp;d</span
      >
    </div>
  </section>
  <section>
    <h3>La capture en regex</h3>
    <br />
    <div>Par défaut, les groupes sont <strong>capturants</strong></div>
    <br />
    <div>
      Une regex permet de matcher un texte avec des contraintes données
    </div>
    <br />
    <div>
      Les groupes capturants permettent d&apos;affiner des petits sous-ensemble
      et d&apos;extraire de l&apos;information
    </div>
  </section>
  <section>
    <div>
      Exemple : /.+@(.*)/ va matcher un email simple et capturer le nom de
      domaine
    </div>
    <div>
      <a
        href="https://regex101.com/r/HEbasp/3"
        target="_blank"
        rel="noopener noreferrer"
        ><img style="width:45%" src={match} alt=""/></a
      >
    </div>
  </section>
  <section>
    <div>Les captures peuvent ensuite &ecirc;tre utilisées</div>
    <br />
    <div>
      <a
        href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match#Exemples"
        target="_blank"
        rel="noopener noreferrer">Dans votre code</a
      >
    </div>
  </section>
  <section>
    <div>
      On peut aussi directement donner un texte de remplacement, comme sur
      Notepad++
    </div>
    <img src={remplacementsNotepad} alt=""/>
  </section>
  <section>
    <div>
      Ensuite dans le texte de remplacement, les captures sont
      numérotées
    </div>
    <div>
      Pour les remplacer dans un texte : $<span style="color:red">#</span>
    </div>
    <div><span style="color:red">#</span> étant un nombre</div>
    <br />
    <div>
      $<span style="color:red">0</span> représente le match complet
    </div>
    <div>
      $<span style="color:red">1</span> représente la<span
        style="color:red">&nbsp;1</span
      >&egrave;re capture
    </div>
    <div>
      $<span style="color:red">2</span> la<span style="color:red">&nbsp;2</span
      >&egrave;me, ...etc
    </div>
    <br />
    <div>
      <a
        href="https://regex101.com/r/bAXRBL/4"
        target="_blank"
        rel="noopener noreferrer">Exemple de remplacements</a
      >
    </div>
  </section>
  <section>
    <div>Parfois aussi on souhaite avoir un groupe sans matcher</div>
    <div>La syntaxe est alors :<span style="color:red">(?:)</span></div>
    <div>Le groupe devient non-capturant</div>
    <br />
    <div>
      <a
        href="https://regex101.com/r/XixkRd/3"
        target="_blank"
        rel="noopener noreferrer"
        >Exemple avec le site AXAFR pour extraire des formules et les prix
        associés</a
      >
    </div>
  </section>
</section>
