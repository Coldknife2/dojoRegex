<script>
  import metaSeq from "../imgs/metaSeq.jpg";
</script>


<section>
  <section>
    <h1>Les ranges et les m&eacute;ta-s&eacute;quences</h1>
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
      Les ranges d&eacute;crivent un ensemble et sont encadr&eacute;s par
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
      Il est &eacute;galement possible de d&eacute;crire un ensemble avec la
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
    <div>avec les num&eacute;ros de caract&egrave;res unicode</div>
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
      Il existe aussi l&apos;op&eacute;ration inverse : matcher un
      caract&egrave;re qui ne fait pas parti d&apos;un ensemble
    </div>
    <br />
    <div>
      Cela s&apos;&eacute;crit de la mani&egrave;re suivante :&nbsp;<span
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
    <div>Les m&eacute;ta-s&eacute;quences</div>
    <div>
      <span style="color:blue">.&nbsp;</span><span style="color:blue"
        >\w&nbsp;</span
      ><span style="color:blue">\W&nbsp;</span><span style="color:blue"
        >\d&nbsp;</span
      ><span style="color:blue">\D</span>
    </div>
  </section>
  <section>
    <div>Une m&eacute;tas&eacute;quence est un alias pour un ensemble</div>
    <br />
    <div>
      Par exemple<span style="color:blue">&nbsp;\d</span> correspond &agrave; un
      ensemble d&eacute;crivant un chiffre
    </div>
    <div>
      Selon les impl&eacute;mentations, cela peut &eacute;quivaloir &agrave;<span
        style="color:green">&nbsp;[</span
      ><span style="color:blue">0<span style="color:red">-</span>9</span><span
        style="color:green">]</span
      >
    </div>
    <br />
    <div>
      Mais<span style="color:orange">&nbsp;attention</span>, en python3 par
      exemple<span style="color:blue">&nbsp;\d&nbsp;</span>matche aussi les
      autres num&eacute;riques dans d&apos;autres langages comme
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
      <span style="color:blue">\w</span> : un caract&egrave;re alphanum&eacute;rique
    </div>
    <br />
    <div><span style="color:blue">\W</span> : l&apos;inverse de \w</div>
  </section>
  <section>
    <div>
      Les m&eacute;tas&eacute;quences peuvent &ecirc;tre utilis&eacute;es dans
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
    <div>Essayez de nouveau, mais avec les m&eacute;tas&eacute;quences</div>
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
