import React,{useEffect} from 'react';
import './App.css';
import project1Image from './assets/images/project-1.png';
import project2Image from './assets/images/project-2.png';
import project3Image from './assets/images/project-3.png';
import project4Image from './assets/images/project-4.png';
import project5Image from './assets/images/project-5.png';
import project6Image from './assets/images/project-6.png';
import project7Image from './assets/images/project-7.png';
import htmlsImage from './assets/images/html5.png';
import cssImage from './assets/images/css3.png';
import bootstrapImage from './assets/images/bootstrap.png';
import javascriptImage from './assets/images/javascript.png';
import jqauryImage from './assets/images/jquery.png'
import ReactImage from './assets/images/react.png'
import SaasImage from './assets/images/sass.png'
import NodeImage from './assets/images/node.png'
import aboutBanner from './assets/images/about-banner.png'
import heroBanner from './assets/images/hero-banner.png'
import iconImage1 from "./assets/images/stats-card_icon-1.png";
import iconImage2 from "./assets/images/stats-card_icon-2.png"
import iconImage3 from "./assets/images/stats-card_icon-3.png"


function App() {
  useEffect(() => {
    /**
     * element toggle function
     */
    const elemToggleFunc = (elem) => {
      elem.classList.toggle("active");
    };

    /**
     * header sticky & go to top
     */
    const header = document.querySelector("[data-header]");
    // const goTopBtn = document.querySelector("[data-go-top]");

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        header.classList.add("active");
        // goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        // goTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    /**
     * navbar toggle
     */
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");

    const handleNavToggle = () => {
      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);
    };

    navToggleBtn.addEventListener("click", handleNavToggle);

    /**
     * skills toggle
     */
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");

    const handleToggle = () => {
      elemToggleFunc(toggleBtnBox);
      for (let i = 0; i < toggleBtns.length; i++) {
        elemToggleFunc(toggleBtns[i]);
      }
      elemToggleFunc(skillsBox);
    };

    for (let i = 0; i < toggleBtns.length; i++) {
      toggleBtns[i].addEventListener("click", handleToggle);
    }

    /**
     * dark & light theme toggle
     */
    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    const handleThemeToggle = () => {
      elemToggleFunc(themeToggleBtn);

      if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
      } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
      }
    };

    themeToggleBtn.addEventListener("click", handleThemeToggle);

    /**
     * check & apply last time selected theme from localStorage
    //  */
    // useEffect(() => {
    //   if (localStorage.getItem("theme") === "light_theme") {
    //     themeToggleBtn.classList.add("active");
    //     document.body.classList.remove("dark_theme");
    //     document.body.classList.add("light_theme");
    //   } else {
    //     themeToggleBtn.classList.remove("active");
    //     document.body.classList.remove("light_theme");
    //     document.body.classList.add("dark_theme");
    //   }
    // }, []);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggleBtn.removeEventListener("click", handleNavToggle);
      for (let i = 0; i < toggleBtns.length; i++) {
        toggleBtns[i].removeEventListener("click", handleToggle);
      }
      themeToggleBtn.removeEventListener("click", handleThemeToggle);
    };
  }, []);



  return (
    <div>
      <header className="header" data-header>
        <div className="container">
        <h1 className="h1 logo">
  <span className="smoke-animation">N</span>
  <span className="smoke-animation">E</span>
  <span className="smoke-animation">E</span>
  <span className="smoke-animation">L</span>
  <span className="smoke-animation">E</span>
  <span className="smoke-animation">S</span>
  <span className="smoke-animation">H</span>
  <span>.</span>
</h1>

          <div className="navbar-actions">

            <button className="theme-btn" aria-label="Change Theme" title="Change Theme" data-theme-btn>
              <span className="icon"></span>
            </button>
          </div>

          <button className="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>

          <nav className="navbar" data-navbar>
  <ul className="navbar-list">
    <li>
      <a href="#home" className="navbar-link smoke-animation">Home.</a>
    </li>
    <li>
      <a href="#about" className="navbar-link smoke-animation">About.</a>
    </li>
    <li>
      <a href="#skills" className="navbar-link smoke-animation">Skills.</a>
    </li>
    <li>
      <a href="#portfolio" className="navbar-link smoke-animation">Portfolio.</a>
    </li>
    <li>
      <a href="#contact" className="navbar-link smoke-animation">Contact.</a>
    </li>
  </ul>
</nav>

        </div>
      </header>
      <main>
        <article className="container">
          {/* Hero section */}
        <section className="hero" id="home">
        
      <figure className="hero-banner">
        <picture>
          <source srcSet={heroBanner} media="(min-width: 768px)" />
          <source srcSet="./assets/images/hero-banner-md.png" media="(min-width: 500px)" />
          <img src={heroBanner} alt="A man in a blue shirt with a happy expression" className="w-100" />
        </picture>
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>

      <ul className="hero-social-list">
        
        <li>
          <a href="#" className="hero-social-link">
            <ion-icon name="logo-facebook"></ion-icon>
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            <ion-icon name="logo-twitter"></ion-icon>
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>
    </section>

    <section className="stats" id="stats">
      <ul className="stats-list">
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={iconImage1} alt="Badge icon" />
            </div>
            <h2 className="h2 card-title">
              2+ <strong>Years of Experience</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={iconImage2} alt="Checkmark icon" />
            </div>
            <h2 className="h2 card-title">
              10+ <strong>Completed Projects</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={iconImage3} alt="Peoples rating icon" />
            </div>
            <h2 className="h2 card-title">
              2+ <strong>Happy Clients</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </section>

    <section className="about" id="about">
      <figure className="about-banner">
        <img src={aboutBanner} alt="A man in a alice blue shirt with a thinking expression" className="w-100" />
      </figure>
      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>
        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>
        <p className="section-text">
          Hi! I’m Neelesh Ahirwar, and I’m a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
        </p>
        <div className="btn-group">
          <button className="btn btn-secondary">Hire me</button>
          <button className="btn btn-primary">Download cv</button>
        </div>
      </div>
    </section>

    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">What My Programming Skills Included?</h2>
        <p className="section-text">
          I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
        </p>
        <div className="skills-toggle" data-toggle-box>
          <button className="toggle-btn active" data-toggle-btn>Skills</button>
          <button className="toggle-btn" data-toggle-btn>
            Tools</button>
        </div>
      </div>
      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>
              <div className="card-icon">
                <img src={htmlsImage} alt="HTML5 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>
              <div className="card-icon">
                <img src={cssImage} alt="CSS3 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>
              <div className="card-icon">
                <img src={javascriptImage} alt="JavaScript logo" />
              </div>
            </div>
          </li>
          <li>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">jQuery</div>
              <div className="card-icon">
                <img src={jqauryImage} alt="jQuery logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>
              <div className="card-icon">
                <img src={bootstrapImage} alt="Bootstrap logo" />
              </div>
            </div>
          </li>
          <li>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">React</div>
              <div className="card-icon">
                <img src={ReactImage} alt="React logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">SASS</div>
              <div className="card-icon">
                <img src={SaasImage} alt="SASS logo" />
              </div>
            </div>
          </li>
        </ul>
        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">Ajax</div>
              <div className="card-icon">
                {/* <img src={AjaxImage} alt="Ajax logo" /> */}
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Gulp</div>
              <div className="card-icon">
                <img src="./assets/images/gulp.png" alt="Gulp logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Express Js</div>
              <div className="card-icon">
                <img src="./assets/images/express.png" alt="Webpack logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">NodeJS</div>
              <div className="card-icon">
                <img src={NodeImage} alt="node logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Npm</div>
              <div className="card-icon">
                <img src={project7Image} alt="Npm logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Command Line</div>
              <div className="card-icon">
                <img src="./assets/images/command.png" alt="Command Line logo" />
              </div>
            </div>
          </li>
          <li>
            </li>
            </ul>
</div>
              </section>
        <section className="project" id="portfolio">
        <ul className="project-list">
          <li>
            <div className="project-content section-content">
              <p className="section-subtitle">My Works</p>
              <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
              <p className="section-text">
                We develop the best quality website that serves for the long-term. Well-documented, clean, easy and
                elegant interface helps any non-technical clients.
              </p>
            </div>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project1Image} className="w-100" alt="A macintosh on a yellow background." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 01</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project2Image} className="w-100" alt="On a Blue background, a Wacom and a mouse." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 02</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project3Image} className="w-100" alt="A Cassette tape on a mellow apricot background." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 03</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project4Image} className="w-100" alt="Blue digital watch on a dark liver background." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 04</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project5Image} className="w-100" alt="On a dark liver background, Airport luggage car carrying a luggage." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 05</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project6Image} className="w-100" alt="On a yellow background, a digital watch and a glass." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 06</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project7Image} className="w-100" alt="A fujifilm instant camera on a dark electric blue background." />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 07</h3>
                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>
            </a>
          </li>
          <li>
            <button className="load-more">Load more work</button>
          </li>
        </ul>
      </section>
      <section className="contact" id="contact">
        <div className="contact-content section-content">
          <p className="section-subtitle">Contact</p>
          <h2 className="h3 section-title">Have You Any Project? Please Drop a Message</h2>
          <p className="section-text">
            Get in touch and let me know how I can help. Fill out the form and I'll be in touch as soon as possible.
          </p>
          <ul className="contact-list">
            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">Address:</h3>
                <address className="contact-info">
                  Bandri Sagar MP
                </address>
              </div>
            </li>
            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">Phone:</h3>
                <a href="tel:01234567789" className="contact-info">(91) 6265098285</a>
                <a href="tel:09765432200" className="contact-info">(91) 9171211945</a>
              </div>
            </li>
            <li className="contact-list-item">
              <div className="contact-item-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">Email:</h3>
                <a href="mailto:info@jack.com" className="contact-info">aneelsh342@gmail.com</a>
                <a href="mailto:support@jack.com" className="contact-info"></a>
              </div>
            </li>
            <li>
              <ul className="contac-social-list">
                <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip">Facebook</div>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip">Twitter</div>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip">Linkedin</div>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="contact-social-link">
                    <div className="tooltip">Youtube</div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form action="" className="contact-form">
          <div className="form-wrapper">
            <label htmlFor="name" className="form-label">Name</label>
            <div className="input-wrapper">
              <input type="text" name="name" id="name" required placeholder="e.g John Doe" className="input-field" />
              <ion-icon name="person-circle"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-wrapper">
              <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" className="input-field" />
              <ion-icon name="mail"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="phone" className="form-label">Phone</label>
            <div className="input-wrapper">
              <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
              <ion-icon name="call"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="message" className="form-label">Message</label>
            <div className="input-wrapper">
              <textarea name="message" id="message" required placeholder="Write message..." className="input-field"></textarea>
              <ion-icon name="chatbubbles"></ion-icon>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </section>
      <footer className="footer">
        <div className="container">
          <p className="h1 logo">
            <a href="#">
              Neelesh<span>.</span>
            </a>
          </p>
          <p className="copyright">
            &copy; 2023<a href="#">Neelesh</a>. All rights reserved
          </p>
        </div>
      </footer>
      </article>
      </main>
    </div>
  );
}

export default App;
