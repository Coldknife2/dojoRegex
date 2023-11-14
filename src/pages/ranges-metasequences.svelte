<script>
  import metaSeq from "../imgs/metaSeq.jpg";
</script>


<section>
  <section>
    <h1>Les ranges et les méta-séquences</h1>
    <div>
      <span style="color:green">[</span><span style="color:blue">abcd</span
      ><span style="color:green">]</span><span>&nbsp;</span><span
        style="color:green">[</span
      ><span style="color:blue">a</span><span style="color:red">-</span><span
        style="color:blue">d</span
      ><span style="color:green">]</span><span>&nbsp;</span><span
        style="color:green">[</span
      ><span>^</span><span style="color:blue">a</span><span style="color:red"
        >-</span
      ><span style="color:blue">d</span><span style="color:green">]</span>
    </div>
  </section>
  <section>
    <div>
      Les ranges décrivent un ensemble et sont encadrés par
      des&nbsp;<span style="color:green">[</span><span style="color:green"
        >]</span
      >
    </div>
    <div>
      Exemple :&nbsp;<span style="color:green">[</span><span style="color:blue"
        >abcd</span
      ><span style="color:green">]</span>
    </div>
    <br />
    <div>
      Je veux matcher un caract&egrave;re parmi ceux-ci :&nbsp;<span
        style="color:blue">abcd</span
      >
    </div>
  </section>
  <section>
    <div>
      Il est également possible de décrire un ensemble avec la
      syntaxe&nbsp;<span style="color:green">[</span><span style="color:blue"
        >debut</span
      ><span style="color:red">-</span><span style="color:blue">fin</span><span
        style="color:green">]</span
      >
    </div>
    <br />
    <div>
      Exemple :&nbsp;<span style="color:green">[</span><span style="color:blue"
        >a</span
      ><span style="color:red">-</span><span style="color:blue">d</span><span
        style="color:green">]</span
      >
    </div>
    <br />
    <div>
      Je veux matcher un caract&egrave;re entre&nbsp;<span style="color:blue"
        >a</span
      >
      et&nbsp;<span style="color:blue">d</span>:
      <span style="color:blue">abcd</span>
    </div>
  </section>
  <section>
    <div>
      Les ranges&nbsp;<span style="color:green">[</span><span style="color:blue"
        >debut</span
      ><span style="color:red">-</span><span style="color:blue">fin</span><span
        style="color:green">]</span
      > fonctionnent
    </div>
    <div>avec les numéros de caract&egrave;res unicode</div>
    <br />
    <div>
      Exemple :&nbsp;<span style="color:green">[</span><span style="color:blue"
        >&#x3042;</span
      ><span style="color:red">-</span><span style="color:blue">&#x3096;</span
      ><span style="color:green">]</span>
    </div>
    <div>
      Je veux matcher un caract&egrave;re entre&nbsp;<span style="color:blue"
        >le caract&egrave;re &#x3042; de code unicode 12354</span
      >
      et&nbsp;<span style="color:blue"
        >le caract&egrave;re &#x3096; de code unicode 12438</span
      >
    </div>
    <br />
    <div>
      Pour avoir la liste des caract&egrave;res et de leurs index,&nbsp;<a
        href="https://unicode-table.com/fr/#30B5"
        target="_blank"
        rel="noopener noreferrer">ce site est pas mal</a
      >
    </div>
  </section>
  <section>
    <div>
      Il existe aussi l&apos;opération inverse : matcher un
      caract&egrave;re qui ne fait pas parti d&apos;un ensemble
    </div>
    <br />
    <div>
      Cela s&apos;écrit de la mani&egrave;re suivante :&nbsp;<span
        style="color:green">[</span
      ><span>^</span><span style="color:blue">debut</span><span
        style="color:red">-</span
      ><span style="color:blue">fin</span><span style="color:green">]</span>
    </div>
    <br />
    <div>
      Exemple :&nbsp;<span style="color:green">[</span><span>^</span><span
        style="color:blue">a</span
      ><span style="color:red">-</span><span style="color:blue">d</span><span
        style="color:green">]</span
      >
    </div>
    <div>
      Je veux matcher un caract&egrave;re qui ne se situe pas entre&nbsp;<span
        style="color:blue">a</span
      >
      et&nbsp;<span style="color:blue">d</span>
    </div>
  </section>
  <section>
    <div>
      Un&nbsp;<span style="color:green">[</span><span style="color:green"
        >]</span
      > supporte tr&egrave;s bien de multiples ranges
    </div>
    <br />
    <table>
      <thead>
        <tr>
          <th style="color:grey">[a-defg0-9]</th>
          <th style="color:grey">[^a-deEfFgO-Z]</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abcdefg<br />0123456789</td>
          <td>hijklmonpqrstuvwxyz<br />ABCDGHIJKLMN<br />0123456789</td>
        </tr>
        <tr />
      </tbody>
    </table>
  </section>
  <section>
    <div>Essayez</div>
    <br />
    <div class="simpleRowFlex">
      <div>
        <a
          href="https://regex101.com/r/OLpLkw/1"
          target="_blank"
          rel="noopener noreferrer">Essayez sur Regex101</a
        >
      </div>
    </div>
  </section>
  <section>
    <div>Les méta-séquences</div>
    <div>
      <span style="color:blue">.&nbsp;</span><span style="color:blue"
        >\w&nbsp;</span
      ><span style="color:blue">\W&nbsp;</span><span style="color:blue"
        >\d&nbsp;</span
      ><span style="color:blue">\D</span>
    </div>
  </section>
  <section>
    <div>Une métaséquence est un alias pour un ensemble</div>
    <br />
    <div>
      Par exemple<span style="color:blue">&nbsp;\d</span> correspond &agrave; un
      ensemble décrivant un chiffre
    </div>
    <div>
      Selon les implémentations, cela peut équivaloir &agrave;<span
        style="color:green">&nbsp;[</span
      ><span style="color:blue">0<span style="color:red">-</span>9</span><span
        style="color:green">]</span
      >
    </div>
    <br />
    <div>
      Mais<span style="color:orange">&nbsp;attention</span>, en python3 par
      exemple<span style="color:blue">&nbsp;\d&nbsp;</span>matche aussi les
      autres numériques dans d&apos;autres langages comme
      &#x660;&#x661;&#x662;&#x663;&#x664;&#x665;&#x666;&#x667;&#x668;&#x669;
    </div>
  </section>
  <section>
    <div>
      <span style="color:blue">.</span> : N&apos;importe quel caract&egrave;re sauf
      fin de ligne
    </div>
    <br />
    <div><span style="color:blue">\d</span> : un chiffre</div>
    <br />
    <div>
      <span style="color:blue">\D</span> : un caract&egrave;re non-chiffre
    </div>
    <br />
    <div>
      <span style="color:blue">\w</span> : un caract&egrave;re alphanumérique
    </div>
    <br />
    <div><span style="color:blue">\W</span> : l&apos;inverse de \w</div>
  </section>
  <section>
    <div>
      Les métaséquences peuvent &ecirc;tre utilisées dans
      un<span style="color:green">[</span><span style="color:green">]</span>
    </div>
    <div>
      Exemple :&nbsp;<span style="color:green">[</span><span style="color:blue"
        >\W\d</span
      ><span style="color:green">]</span>
    </div>
    <div>
      <a
        href="https://regex101.com/r/JuyzKL/1"
        target="_blank"
        rel="noopener noreferrer"><img src={metaSeq} alt=""/></a
      >
    </div>
  </section>
  <section>
    <div>Essayez de nouveau, mais avec les métaséquences</div>
    <br />
    <div class="simpleRowFlex">
      <div>
        <a
          href="https://regex101.com/r/OLpLkw/1"
          target="_blank"
          rel="noopener noreferrer">Essayez sur Regex101</a
        >
      </div>
    </div>
  </section>
</section>
