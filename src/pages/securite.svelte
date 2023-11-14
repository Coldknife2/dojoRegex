<section>
  <section>
    <h1>La sécurité</h1>
  </section>
  <section>Un mot sur les regex et la sécurité</section>
  <section>
    <h2>Un DDOS avec une RegExp ?</h2>
    <div>
      Cela peut sembler surprenant, mais pourtant c&apos;est<a
        href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;un risque reconnu et identifié par l&apos;owasp</a
      >
    </div>
  </section>
  <section>
    <div>
      Le principe est simple, des regex mal écrites peuvent avoir de
      longs temps d&apos;exécutions
    </div>
    <br />
    <div>Il suffit d&apos;une seconde d&apos;exécution...</div>
    <br />
    <div>Et de 10 000 requ&ecirc;tes/s</div>
  </section>
  <section>
    <div>Les &quot;Evil patterns&quot;</div>
    <br />
    <div>
      désignent des patterns faisant monter tr&egrave;s rapidement la
      complexité et le temps d&apos;exécution
    </div>
  </section>
  <section>
    <div>En regex l&apos;evil pattern connu est :</div>
    <br />
    <div>
      Un groupe<span style="color:red">&nbsp;()</span> avec un quantifieur (<span
        style="color:green">+</span
      >
      ou<span style="color:green">&nbsp;*</span>)
    </div>
    <div>
      Dans le groupe : expression avec un quantifieur<span style="color:green"
        >&nbsp;+</span
      ><span style="color:green">&nbsp;*</span>
    </div>
    <div>Ou : plusieurs possibilités qui s&apos;intersectent</div>
    <br />
    <div>
      <span style="color:red">(</span>a<span style="color:green">+</span><span
        style="color:red">)</span
      ><span style="color:green">+</span>
    </div>
    <div>
      <span style="color:red">(</span>a|aa<span style="color:red">)</span><span
        style="color:green">+</span
      >
    </div>
    <div>
      <span style="color:red">(</span>a|a?<span style="color:red">)</span><span
        style="color:green">+</span
      >
    </div>
  </section>
  <section>
    <div>
      Mais ce n&apos;est pas tout, il faut penser &agrave; la taille de
      l&apos;input analysé par la regex
    </div>
    <div>
      Car si l&apos;input n&apos;est pas limité, la regex peut &ecirc;tre
      considérée vulnérable, m&ecirc;me pour 50 000
      caract&egrave;res !
    </div>
    <br />
    <div>
      <a
        href="https://github.com/moment/moment/issues/4163"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/moment/moment/issues/4163</a
      >
    </div>
    <div>
      <a
        href="https://snyk.io/vuln/npm:moment:20161019"
        target="_blank"
        rel="noopener noreferrer">https://snyk.io/vuln/npm:moment:20161019</a
      >
    </div>
  </section>
  <section>
    <div>
      Si on ne peut pas limiter l&apos;input en amont, on peut quand m&ecirc;me
    </div>
    <br />
    <div>
      Limiter les répétitions :&nbsp;<a
        href="https://regex101.com/r/nOKjwk/1"
        target="_blank"
        rel="noopener noreferrer">/a+/ vs /a{(1, 2500)}/</a
      >
    </div>
    <div>
      Mettre une ancre &agrave; la regex :&nbsp;<a
        href="https://regex101.com/r/1nGrDr/3"
        target="_blank"
        rel="noopener noreferrer">/a+/ vs /^a+/</a
      >
    </div>
  </section>
  <section>
    <div>Certains langages (comme le .Net) ont un petit avantage :</div>
    <br />
    <div>
      <a
        href="https://docs.microsoft.com/fr-fr/dotnet/standard/base-types/best-practices#use-time-out-values"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ils peuvent mettre en place des timeout sur l&apos;exécution des
        Regex</a
      >
    </div>
    <br />
    <div>
      Ca ne fait pas de mal de vérifier que son langage prenne en compte
      ou non cette fonctionnalité, et de s&apos;en servir
    </div>
  </section>
  <section>
    <div>En résumé</div>
    <br />
    <div>évitez les Evil patterns au possible</div>
    <div>Limitez vos inputs, sinon limitez les répétitions</div>
    <div>Utilisez les timeouts si vous en avez</div>
  </section>
  <section>
    <div>Liens supplémentaires</div>
    <br />
    <div>
      <a
        href="https://www.npmjs.com/advisories/55"
        target="_blank"
        rel="noopener noreferrer"
      >
        Du point de vue de NPMJS</a
      >
    </div>
    <div>
      <a
        href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS"
        target="_blank"
        rel="noopener noreferrer">Ce qu&apos;en dit OWASP</a
      >
    </div>
    <div>
      <a
        href="https://docs.microsoft.com/fr-fr/dotnet/standard/base-types/best-practices"
        target="_blank"
        rel="noopener noreferrer"
        >Documentation Microsoft Best practices regex</a
      >
    </div>
    <div>
      <a
        href="https://www.regular-expressions.info/redos.html"
        target="_blank"
        rel="noopener noreferrer"
        >https://www.regular-expressions.info/redos.html</a
      >
    </div>
  </section>
</section>
