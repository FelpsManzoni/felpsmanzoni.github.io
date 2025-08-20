<style>
  .background-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    flex-wrap: wrap; /* allow wrapping */
  }

  .background-container h3 {
    margin: 0;
    flex: 1; /* take available space */
  }

  .bullets {
    text-align: justify;
  }

  .logos {
    display: flex;
    gap: 10px;
    margin-left: auto;
    flex-shrink: 0; /* don’t shrink logos */
  }

  .logos img {
    height: 50px;
    flex-shrink: 0;
  }

  .bullets {
    text-align: justify; /* Justify the text of bullet list items */
    max-width: 900px;    /* Prevents items from being to long */
  }

  .bullets li {
    margin-bottom: 2px; /* Makes items on buleting to have some spacing between them */
  }

  ul.bullets li.starred::marker { 
    margin-bottom: 2px; /* Makes items on buleting to have some spacing between them */
    content: "⭐ "; 
  }

  .contacts { max-width: 820px; margin: 20px 0; }
  .contacts h3 { margin: 0 0 .5rem; }

  .contact-list {
    list-style: none; padding: 0; margin: 0;
    display: grid; gap: 10px;
  }
  .contact-list li {
    display: grid;
    grid-template-columns: 28px 1fr;  /* icon | content */
    align-items: start; column-gap: 10px;
  }

  .icon {
    width: 24px; height: 24px;
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 6px; background: #1f2937; /* subtle bg for consistency */
    font-size: 16px; line-height: 1; user-select: none;
  }

  .contact-links { display: flex; flex-wrap: wrap; gap: 10px 14px; }
  .contact-links a { text-decoration: none; }
  .contact-links a:hover { text-decoration: underline; }

  .contacts address { font-style: normal; line-height: 1.5; }
  code.handle { font-size: .95em; padding: .1em .25em; background: #111; border-radius: 4px; }

  /* Responsive adjustment: stack logos below text on small screens */
  @media (max-width: 600px) {
    .contact-list li { 
      grid-template-columns: 24px 1fr; 
    }

    .background-container {
      flex-direction: column;
    }

    .background-container h3 {
      align-items: center; /* align to center when stacked */
      text-align: center;
      flex: none; /* Prevents text from streaching when centered */
    }

    .logos {
      margin-left: 0; /* remove push to right on mobile */
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>

## About Me

<p style="text-align: justify;">
  Felipe Sonntag Manzoni is a PhD. Candidate and a Subtstitute Teacher at the Instituto de Computação at the Universidade Federal do Amazonas (IComp/UFAM). He earned his Master in Computer Science from UFAM in 2021 and his current research interests include Software Engineering, Human-Computer Interaction, Machine Learning, Artificial Inteligence, and Language Models, focusing on the adoption of ML/IA/LLM practices and models in the SE area as well as focusing on the adoption and implementation of SE practices on the ML/IA/LLM system development and projects. Also, Manzoni has a strong background on software evaluation processes and comparison studies for SE fields as well as being interested in Games development and evaluation through Playability and Game Experience fields. On the bussiness side, Manzoni is currently a Senior Quality Analyst and have developed activities in multiple architectures and scenarios as VR/AR, mobile devices, financial scopes and Windows applications (as UWP). Moreover, Manzoni is currently the Managing Partner of the _Manzoni's Franquias_ company, having the _Mestre da Obra Boa Vista_ unit under it's administration.
</p>

---

## Background

### Academic
---
<div class="background-container">
  <h3>
    <a href="" target="_blank">
      Ph.D. Candidate in Computer Science - UFAM</br>
      Software Engineering & Artificial Inteligence</br>
    </br></a>
    <a href="/" target="_blank">
      Master in Computer Science - UFAM</br>
      Software Engineering & Human-Computer Interaction</br>
    </br>
    </a>
    <a href="/" target="_blank">
      Bachelor Degree in Computer Science - UFAM</br>
    </a>
  </h3>
  <div class="logos">
    <a href="http://ufam.edu.br" target="_blank"> 
      <img src="https://ppge.ufam.edu.br/images/ufam.png" height="55" alt="UFAM Website">
    </a>
    <a href="http://icomp.ufam.edu.br" target="_blank"> 
      <img src="https://icomp.ufam.edu.br/images/icomp.png" height="55" alt="IComp Website">
    </a>
  </div>
</div>

<p style="text-align: justify;">
  Bachelor degree in Computer Science in 2018, Master in Computer Science with focus in SE and HCI applied to games evaluations. Ph.D. candidate in Computer Science with focus on the field of SE for AI/ML.
</p>


### Work
---

<div class="background-container">
  <h3>
    <a href="https://www.linkedin.com/in/felipe-sonntag-manzoni/" target="_blank">
      Senior Software Quality Analyst</br>
      Multiple Companies
    </a>
  </h3>
  <div class="logos">
    <a href="https://www.linkedin.com/in/felipe-sonntag-manzoni/" target="_blank"> 
      <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEpl8iPEufIuA/company-logo_200_200/company-logo_200_200/0/1738584184363/segueosidi_logo?e=2147483647&v=beta&t=Xz4bBR_nr71otammAj-sZZ1i9i3U-A389Y0myFbl6K8" height="55" alt="SiDi company experience" style="  border-radius: 10px;">
    </a>
    <a href="https://www.linkedin.com/in/felipe-sonntag-manzoni/" target="_blank"> 
      <img src="https://s.staticz.com.br/img/new-img/favicon/apple-touch-icon.png" height="55" alt="Méliuz company experience">
    </a>
    <a href="https://www.linkedin.com/in/felipe-sonntag-manzoni/" target="_blank"> 
      <img src="https://www.gov.br/inpa/pt-br/inovacao/imagens/logos-externas/sidia.png" height="55" alt="SIDIA company experience">
    </a>
  </div>
</div>

<ul class="bullets">
  <li> Develop activities and be responsible for the overall quality and testing efforts of all the software deliverables inside the allocated project. Having the main activities as described:
  <ul> 
    <li> Automated Test Development; </li> 
    <li> Test Management; </li>
    <li> Software Development Process Engineering; </li>
    <li> Software Quality Evaluation and CI/CD Quality </li>
  </ul>
</ul>
  
---

<div class="background-container">
  <h3>
    <a href="https://www.in.gov.br/web/dou/-/extratos-de-termos-aditivos-647954691" target="_blank">
      Substitute Teacher</br>
      Instituto de Computação - Universidade Federal do Amazonas (UFAM)
    </a>
  </h3>
  <div class="logos">
    <a href="http://ufam.edu.br" target="_blank"> 
      <img src="https://ppge.ufam.edu.br/images/ufam.png" height="55" alt="UFAM Website">
    </a>
    <a href="http://icomp.ufam.edu.br" target="_blank"> 
      <img src="https://icomp.ufam.edu.br/images/icomp.png" height="55" alt="IComp Website">
    </a>
  </div>
</div>

<ul class="bullets">
  <li>Teaching subjects in Computer Science, Software Engineering, and Computer Engineering:
    <ul> 
      <li> (Teacher) Numerical Analysis; </li> 
      <li> (Teacher) Verification, Validation and Testing; </li>
      <li> (Monitor) Practice in Software Engineering </li>
    </ul>
</ul>

---

<div class="background-container">
  <h3>
    <a href="" target="_blank">
      Managing Partner</br>
      Manzoni's Franquias - Mestre da Obra BV
    </a>
  </h3>
  <div class="logos">
    <a href="https://mestredaobralocacoes.com.br/unidade/boavista/" target="_blank"> 
      <img src="https://mestredaobralocacoes.com.br/wp-content/uploads/2023/09/LogoMestreHorizontaAzulSemLocacao.png" alt="Mestre da Obra Boa Vista store site">
    </a>
  </div>
</div>

<ul class="bullets">
  <li> Managing partner inside the <em>Manzoni's Franquias</em> company that contains the holding for the franchised unit of <em>Mestre da Obra</em> in Boa Vista / RR.
    <ul> 
      <li> Unit administration; </li> 
      <li> Management decisions and budgeting; </li>
      <li> Unit processes, improvements and strategy; </li>
      <li> Management of unit employees; </li>
    </ul>
</ul>

---

## Research and Development Interests

<ul class="bullets">
  <li> Software Engineering, Software Development Process, Agile Development; </li>
  <li> Software Quality, Testing, Test Automation; </li>
  <li> Artificial Inteligence, Machine Learning, Language Models; </li>
  <li> Data Management, Data Engineering, Data Mining; </li>
</ul>

---

## Selected Publications

### Conference Papers

<ul class="bullets">
  <li class="starred">
    Felipe S. Manzoni, Tayana Uchôa Conte, Milene Silveira, Simone Barbosa. </br>
    <a href="http://dx.doi.org/10.5220/0013398700003929">
      <strong>
        Straight to the Point - Evaluating What Matters for You: A Comparative Study on Playability Heuristic Sets.
      </strong>
    </a>
    <em>Proceedings of the 22nd International Conference on Enterprise Information Systems. 2020, Prague/Czech Republic, v. 2. p. 499-510.</em>
  </li>
  <li class="starred">
    Felipe S. Manzoni, Bruna Moraes Ferreira, Tayana Uchôa Conte. </br>
    <a href="http://dx.doi.org/10.5220/0006695604510462">
      <strong>
        NExPlay - Playability Assessment for Non-experts Evaluators.
      </strong>
    </a>
    <em>Proceedings of the 20th International Conference on Enterprise Information Systems, 2018, Funchal/Portugal, v. 2. p. 451-462.</em>
  </li>
  <li>
    Felipe S. Manzoni, Rávella Rodrigues, Ana Carolina Oran Rocha. </br>
    <a href="http://dx.doi.org/10.5220/0013398700003929">
      <strong>
        Exploring the Use of ChatGPT for the Generation of User Story Based Test Cases: An Experimental Study.
      </strong>
    </a>
    <em>Proceedings of the 27th International Conference on Enterprise Information Systems, 2025, Porto/Portugual, v. 2. p. 292-299.</em>
  </li>
</ul>

### Under Development

<ul>
  <li>
    Felipe S. Manzoni, Ana Carolina Oran, Leonardo Carneiro Marques. </br>
    <strong>Let's Talk About Quality: a decade of gathered AI/ML project development knowledge.</strong>
  </li>
  <li>
    Felipe S. Manzoni, Camilla Rosas Gomes, Rayssa Campos dos Reis, Ana Carolina Oran, Leonardo Carneiro Marques. </br>
    <strong>Structuring a Development Process for AI/ML Projects: a look into industry driven issues.</strong>
  </li>
</ul>

---
<!--
## Support

I gratefully acknowledge the financial and institutional support provided by the following organizations:

- [**CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico)**](http://www.cnpq.br)  
   CNPq plays a crucial role in promoting scientific and technological development in Brazil by funding research projects, scholarships, and fostering innovation. I am honored to be recognized as a Level 1B researcher by CNPq.
- [**CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)**](https://www.gov.br/capes/pt-br)  
   CAPES is dedicated to improving the quality of higher education in Brazil through scholarships, grants, and support for postgraduate programs. It has also provided scholarships for several students involved in my projects.
- [**FAPEAM (Fundação de Amparo à Pesquisa do Estado do Amazonas)**](https://www.fapeam.am.gov.br/)  
   FAPEAM provides financial support for scientific research and innovation within the State of Amazonas, fostering regional development. It has supported many projects throughout the years and also provided scholarships for several students involved in my projects.
- [**Jusbrasil**](https://www.jusbrasil.com.br)  
   Jusbrasil is a leading Brazilian legal technology company. Jusbrasil has supported a specific project under my coordination and research grants to several of my students and postdocs.

---
-->

## Certifications and Other refs

I am currently:
<ul>
  <li>
    An accredited <a href="https://softex.br/mpsbr/profissionais-habilitados/">
      <strong>MPS.Br Software Implementer</strong>
    </a>
  </li>
  <li>
    Certified on <a href="https://bcr.bstqb.org.br/cert?field_certificado_numero_value=+&field_certificado_nome_value=Felipe+Sonntag+Manzoni">
      <strong>CTFL Foundation level</strong>
    </a>
  </li>
  <li>
    Certified on <a href="https://media.licdn.com/dms/image/v2/D4D2DAQGXBBY_FFw7vw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722383734555?e=1756260000&v=beta&t=8lCfd3eXDoC0BfNuoOK14bsRcOo7JfKloh5PCGcV9xI">
      <strong>ARMv8-A TrustZone Technical Training Course</strong>
    </a>
  </li>
</ul>

---
<section class="contacts" aria-labelledby="contacts-title">
  <h2 id="contacts-title">Contacts</h2>
  <ul class="contact-list">
    <li>
      <span class="icon" aria-hidden="true">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width="18" height="18" alt="Email">
      </span>
      <a href="mailto:fsm2@icomp.ufam.edu.br">fsm2@icomp.ufam.edu.br</a>
    </li>
    <li>
      <span class="icon" aria-hidden="true">🎓</span>
      <span class="contact-links">
        <a href="LATTES_URL" target="_blank" rel="noopener">Lattes CV</a>
        <a href="https://orcid.org/XXXX-XXXX-XXXX-XXXX" target="_blank" rel="me noopener">ORCID</a>
      </span>
    </li>
    <li>
      <span class="icon" aria-hidden="true">🔗</span>
      <span class="contact-links">
        <a href="LINKEDIN_URL" target="_blank" rel="noopener">LinkedIn</a>
        <a href="YOUTUBE_URL" target="_blank" rel="noopener">YouTube</a>
        <a href="TWITTER_URL" target="_blank" rel="noopener">Twitter/X</a>
        <a href="INSTAGRAM_URL" target="_blank" rel="noopener">Instagram</a>
        <a href="https://t.me/manzoni" target="_blank" rel="me noopener">Telegram: @manzoni</a>
        <!--<span>Discord: <code class="handle">@altigran</code></span>-->
      </span>
    </li>
    <li>
      <span class="icon" aria-hidden="true">📍</span>
      <address>
        <strong>Office Address</strong><br>
        Instituto de Computação - Setor Norte - Campus UFAM<br>
        Av. Gal. Rodrigo Octávio, 3000 - Japiim, Manaus, AM, Brazil
      </address>
    </li>
  </ul>
</section>