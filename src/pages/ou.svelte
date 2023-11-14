<script>
  import etSimple from "../imgs/etSimple.jpg";
  import et from "../imgs/et.jpg";
  import ouImage from "../imgs/ou.jpg";
</script>

<section>
  <section>
    <h1>Op&eacute;rateur OU</h1>
    <div><span style="color:green">|</span></div>
  </section>
  <section>
    <div>Par d&eacute;faut, les regex font un &quot;ET&quot;</div>
    0
    <div>
      /abcd/ : je veux matcher a <span style="color:red">et </span>b
      <span style="color:red">et </span>c <span style="color:red">et </span>d
    </div>
    <div>
      <a
        href="https://regex101.com/r/zIvKDi/1"
        target="_blank"
        rel="noopener noreferrer"><img src={etSimple} alt="" /></a
      >
    </div>
    <div>
      /<span style="color:green">[</span><span style="color:blue">abcd</span
      ><span style="color:green">]</span>d/ : matche un caract&egrave;re parmi
      abcd <span style="color:red">et </span>d
    </div>
    <div>
      <a
        href="https://regex101.com/r/q0mMeT/1"
        target="_blank"
        rel="noopener noreferrer"><img src={et} alt="" /></a
      >
    </div>
  </section>
  <section>
    <div>
      Avec<span style="color:green">&nbsp;|&nbsp;</span>on introduit la notion
      de &quot;OU&quot;
    </div>
    <div>
      <a
        href="https://regex101.com/r/XamDIm/1"
        target="_blank"
        rel="noopener noreferrer"><img src={ouImage} alt="" /></a
      >
    </div>
  </section>
</section>
