<section>
  <section>
    <h1>Optionnel/Note : En posix</h1>
  </section>
  <section>
    <div>
      <span style="color:blue">\</span> matche littéralement
      <span style="color:blue">\</span> il faut échapper toutes les structures
      spéciales
    </div>
    <div>
      ex: groupes : \<span style="color:red">(</span>\<span style="color:red"
        >)</span
      >
    </div>
  </section>
  <section>
    <div>POSIX est utilisé par sed, grep et quelques commandes unix</div>
  </section>
  <section>
    <h2>Optionnel/Note : En posix</h2>
    <br />
    <div>
      Remplacements par <span style="color:orange">\1</span> &agrave;<span
        style="color:orange">\9</span
      >
    </div>
    <div><span style="color:orange">\0</span> groupe de base</div>
    <div>
      Pour plus de détails : <a
        href="https://www.regular-expressions.info/posix.html"
        target="_blank"
        rel="noopener noreferrer"
        >https://www.regular-expressions.info/posix.html</a
      >
    </div>
  </section>
  <section>
    <div>Mise en situation</div>
    <br />
    <div>On a ces trois PDF dans un dossier,</div>
    <div>avec &agrave; la fin le jour, mois puis année</div>
      <pre>
        <code
          >BUL0064137631032018.pdf
BUL0064137631072019.pdf
BUL0064137631032019.pdf
</code>
</pre>
  </section>
  <section>
    <div>
      Je veux garder l&apos;année et le mois, en format américain
      (yyyy-mm) pour que cela se trie tout seul par nom
    </div>
    <pre>
      <code>ls | sed &apos;s/BUL..........\(..\)\(....\)..../&quot;\0&quot; &quot;\2-\1.pdf&quot;/&apos; | xargs -n 2 mv</code>
    </pre>
    <div>J&apos;aurais pu faire :</div>
    <pre>
        <code>ls | sed &apos;s/BUL.\{"{"}10\{"}"}\(.\{"{"}2\{"}"}\)\(.\{"{"}4\{"}"}\)/&quot;\0&quot; &quot;\2-\1.pdf&quot;&apos; | xargs -n 2 mv</code>
          </pre>
  </section>
  <section>
    <div>Mes pdfs ont étés renommés</div>
    <br />
      <pre>
  <code>2018-03.pdf
2019-07.pdf
2019-03.pdf
  </code>
</pre>
  </section>
</section>
