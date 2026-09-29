import { useEffect, useState } from "react";
import "./index.css";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaLinkedinIn
} from "react-icons/fa";

import {
  SiCplusplus,
  SiSupabase,
  SiTailwindcss,
  SiMysql
} from "react-icons/si";

function App() {
  console.log("React Icons loaded");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader-top">
            <span>SA / 01</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          <div className="loader-center">
            <div className="loader-name">SHARVARI</div>
            <div className="loader-name loader-last">ARALKAR</div>
            <div className="loader-role">DIGITAL BUILDER</div>
          </div>

          <div className="loader-bottom">
            <span>LOADING EXPERIENCE</span>

            <div className="loader-line">
              <div></div>
            </div>

            <span>100%</span>
          </div>
        </div>
      )}

      <main className="site">

        {/* NAV */}
        <nav className="nav">
          <div className="logo">SA</div>

          <div className="nav-links">
  <a href="#work">WORK</a>
  <a href="#about">ABOUT</a>
  <a href="#journey">JOURNEY</a>
  <a href="#contact">CONTACT</a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    RESUME ↗
  </a>
</div>

          <div className="available">
            <span></span>
            AVAILABLE
          </div>
        </nav>


        {/* HERO */}
        <section className="hero">
          <div className="grid-lines"></div>

          <div className="hero-top">
            <span>PORTFOLIO / 2026</span>
            <span>IT — 03</span>
          </div>

          <div className="hero-number">01</div>

          <div className="hero-circle"></div>

          <div className="hero-label">
            DIGITAL
            <br />
            BUILDER
          </div>

          <div className="hero-title">
            <div className="title-small">HELLO, I'M</div>

            <h1>SHARVARI</h1>

            <h2>ARALKAR</h2>
          </div>

          {/* PHOTO */}
          <div className="hero-photo">
            <img
              src="/profile.jpg"
              alt="Sharvari Aralkar"
              className="profile-photo"
            />

            <div className="photo-label">
              PORTRAIT / 01
            </div>
          </div>

          <div className="hero-description">
            <p>
              IT undergraduate creating digital
              experiences where technology meets
              creativity.
            </p>
          </div>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">
            <a href="#work" className="hero-btn primary">
              VIEW MY WORK ↗
            </a>

            <a href="#contact" className="hero-btn secondary">
              CONTACT ME ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn secondary"
            >
              RESUME ↗
            </a>
          </div>

        </section>


        {/* CURRENTLY */}
        <section className="currently" id="about">

          <div className="section-line">
            <span>SA / 01</span>
            <span>CURRENTLY</span>
          </div>

          <div className="currently-bg">
            NOW
          </div>

          <div className="currently-layout">

            <div className="currently-title">
              <span>RIGHT NOW</span>

              <h2>
                WHAT
                <br />
                I'M
                <br />
                <i>UP TO.</i>
              </h2>

              <div className="title-line"></div>
            </div>

            <div className="currently-info">

              <div className="info-item">
                <span>01 — ROLE</span>

                <h3>
                  3rd Year
                  <br />
                  IT Student
                </h3>

                <p>
                  Exploring technology, development
                  and real-world problem solving.
                </p>
              </div>

              <div className="info-item">
                <span>02 — BUILDING</span>

                <h3>
                  GymFlow
                  <br />
                  AI Projects
                </h3>

                <p>
                  Turning ideas into functional
                  digital products.
                </p>
              </div>

              <div className="info-item">
                <span>03 — LEARNING</span>

                <h3>
                  React
                  <br />
                  DSA / Full Stack
                </h3>

                <p>
                  Learning by building, experimenting
                  and solving.
                </p>
              </div>

              <div className="info-item">
                <span>04 — LOOKING FOR</span>

                <h3>
                  Internships
                  <br />
                  Hackathons
                </h3>

                <p>
                  Looking for opportunities to
                  collaborate and grow.
                </p>
              </div>

            </div>
          </div>

          <div className="section-bottom">
            <span>KEEP MOVING</span>
            <span>↓</span>
          </div>

        </section>


        {/* PATH */}
        <section className="path">

          <div className="section-line dark">
            <span>SA / 02</span>
            <span>EXPLORE</span>
          </div>

          <div className="path-intro">
            <span>CHOOSE YOUR DIRECTION</span>

            <h2>
              SELECT
              <br />
              YOUR <i>PATH.</i>
            </h2>
          </div>

          <div className="path-cards">

            <a href="#work" className="path-card">
              <div className="card-top">
                <span>01</span>
                <span>↗</span>
              </div>

              <div>
                <h3>WORK</h3>

                <p>
                  Projects, experiments and
                  things I've built.
                </p>
              </div>
            </a>


            <a href="#journey" className="path-card pink">
              <div className="card-top">
                <span>02</span>
                <span>↗</span>
              </div>

              <div>
                <h3>JOURNEY</h3>

                <p>
                  The road from engineering
                  student to digital builder.
                </p>
              </div>
            </a>


            <a href="#beyond-code" className="path-card">
              <div className="card-top">
                <span>03</span>
                <span>↗</span>
              </div>

              <div>
                <h3>ME</h3>

                <p>
                  Creativity, interests and
                  everything beyond code.
                </p>
              </div>
            </a>

          </div>

        </section>


        {/* WORK */}
        <section className="work" id="work">

          <div className="section-line">
            <span>SA / 03</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="work-heading">
            <span>THINGS I'VE BUILT</span>

            <h2>
              SELECTED
              <br />
              <i>WORK.</i>
            </h2>
          </div>


          {/* GYMFLOW */}
          <article className="project-featured">

            <div className="project-featured-visual gymflow">

              <div className="project-index">
                01 / 04
              </div>

              <div className="project-brand">
                <span>GYM</span>
                <strong>FLOW</strong>
              </div>

              <div className="visual-circle"></div>

              <div className="visual-small">
                MANAGEMENT
                <br />
                SYSTEM
              </div>

            </div>

            <div className="project-featured-content">

              <div className="project-meta">
                <span>01</span>
                <span>FULL STACK / WEB APP</span>
              </div>

              <h3>GymFlow</h3>

              <p>
                A modern gym management system designed
                to handle members, trainers, attendance,
                membership plans and payments in one
                digital workspace.
              </p>

              <div className="tech-list">
                <span>REACT</span>
                <span>SUPABASE</span>
                <span>JAVASCRIPT</span>
                <span>CSS</span>
              </div>

              <a href="#work" className="project-link">
                VIEW PROJECT
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* AI + PORTFOLIO */}
          <div className="project-pair">

            <article className="project-card-large">

              <div className="project-card-visual icecream">

                <div className="project-index">
                  02
                </div>

                <div className="icecream-word">
                  FLAVOUR
                </div>

                <div className="icecream-orbit"></div>

                <div className="ai-label">
                  AI
                </div>

              </div>

              <div className="project-card-content">

                <div className="project-meta">
                  <span>AI / WEB</span>
                  <span>2026</span>
                </div>

                <h3>AI Ice Cream</h3>

                <p>
                  An AI-powered concept that recommends
                  ice cream flavours based on user
                  preferences.
                </p>

                <div className="tech-list">
                  <span>AI</span>
                  <span>REACT</span>
                  <span>JAVASCRIPT</span>
                </div>

                <a href="#work" className="project-link">
                  EXPLORE
                  <span>↗</span>
                </a>

              </div>

            </article>


            <article className="project-card-small">

              <div className="project-card-visual portfolio">

                <div className="project-index">
                  03
                </div>

                <div className="portfolio-mark">
                  SA
                </div>

                <div className="portfolio-line">
                  PERSONAL
                  <br />
                  DIGITAL SPACE
                </div>

              </div>

              <div className="project-card-content">

                <div className="project-meta">
                  <span>DESIGN / REACT</span>
                  <span>2026</span>
                </div>

                <h3>Portfolio</h3>

                <p>
                  A personal digital space exploring
                  identity, design and technology.
                </p>

                <div className="tech-list">
                  <span>REACT</span>
                  <span>CSS</span>
                  <span>VITE</span>
                </div>

                <a href="#work" className="project-link">
                  EXPLORE
                  <span>↗</span>
                </a>

              </div>

            </article>

          </div>


          {/* EVENT MANAGEMENT */}
          <article className="project-four">

            <div className="event-visual">

              <div className="project-index">
                04
              </div>

              <div className="event-title">
                EVENT
                <i>+</i>
                <br />
                EXPERIENCE
              </div>

              <div className="event-grid"></div>

            </div>

            <div className="event-content">

              <div className="project-meta">
                <span>WEB DEVELOPMENT</span>
                <span>COLLEGE PROJECT</span>
              </div>

              <h3>
                Event Management
                Website
              </h3>

              <p>
                A web platform concept for discovering,
                managing and organizing events with a
                clean user-focused interface.
              </p>

              <div className="tech-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
              </div>

              <a href="#work" className="project-link">
                VIEW PROJECT
                <span>↗</span>
              </a>

            </div>

          </article>

        </section>


        {/* TOOLBOX */}
        <section className="toolbox">

          <div className="section-line dark">
            <span>SA / 04</span>
            <span>TOOLBOX</span>
          </div>

          <div className="toolbox-heading">

            <span>THINGS I WORK WITH</span>

            <h2>
              MY
              <br />
              <i>TOOLBOX.</i>
            </h2>

          </div>

          <div className="skills-cloud">

            <span className="skill big">
              <FaReact className="skill-icon" />
              REACT
            </span>

            <span className="skill pink-skill">
              <FaJsSquare className="skill-icon" />
              JAVASCRIPT
            </span>

            <span className="skill">
              <SiCplusplus className="skill-icon" />
              C++
            </span>

            <span className="skill big">
              <FaHtml5 className="skill-icon" />
              HTML
            </span>

            <span className="skill">
              <FaCss3Alt className="skill-icon" />
              CSS
            </span>

            <span className="skill pink-skill big">
              <SiSupabase className="skill-icon" />
              SUPABASE
            </span>

            <span className="skill">
              <FaPython className="skill-icon" />
              PYTHON
            </span>

            <span className="skill big">
              <FaGitAlt className="skill-icon" />
              GIT
            </span>

            <span className="skill">
              <FaGithub className="skill-icon" />
              GITHUB
            </span>

            <span className="skill pink-skill">
              <SiTailwindcss className="skill-icon" />
              TAILWIND
            </span>

            <span className="skill">
              <SiMysql className="skill-icon" />
              SQL
            </span>

            <span className="skill big">
              🤖 AI / ML
            </span>

          </div>

          <div className="toolbox-note">
            <span>01</span>

            <p>
              I don't try to know everything.
              I learn what I need, build with it,
              break things, fix them and keep going.
            </p>
          </div>

        </section>


        {/* JOURNEY */}
        <section className="journey-section" id="journey">

          <div className="section-line">
            <span>SA / 05</span>
            <span>JOURNEY</span>
          </div>

          <div className="journey-heading">

            <span>A WORK IN PROGRESS</span>

            <h2>
              THE
              <br />
              <i>JOURNEY.</i>
            </h2>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2024
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>01 — THE BEGINNING</span>

                <h3>
                  Started
                  <br />
                  Engineering
                </h3>

                <p>
                  Began my journey in Information
                  Technology and started discovering
                  the world of software and the web.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2025
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>02 — EXPLORING</span>

                <h3>
                  Web Development
                  <br />
                  & Projects
                </h3>

                <p>
                  Started building websites and
                  experimenting with frontend
                  development and creative ideas.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2025
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>03 — LEADERSHIP</span>

                <h3>
                  Web Development
                  <br />
                  Head
                </h3>

                <p>
                  Took on a leadership role in my
                  college tech community and became
                  more involved in technology events.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2026
              </div>

              <div className="timeline-dot pink-dot"></div>

              <div className="timeline-content">

                <span>04 — BUILDING</span>

                <h3>
                  GymFlow
                  <br />
                  & AI Projects
                </h3>

                <p>
                  Started building larger projects
                  while exploring React, databases,
                  AI and full-stack development.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                NOW
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>05 — NEXT CHAPTER</span>

                <h3>
                  3rd Year.
                  <br />
                  Keep Building.
                </h3>

                <p>
                  Learning DSA, development and
                  new technologies while looking
                  for internships and hackathons.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* PROCESS */}
        <section className="process">

          <div className="section-line">
            <span>SA / 06</span>
            <span>PROCESS</span>
          </div>

          <div className="process-heading">

            <span>HOW I APPROACH A PROBLEM</span>

            <h2>
              IDEA
              <br />
              TO <i>BUILD.</i>
            </h2>

          </div>

          <div className="process-list">

            <div>
              <span>01</span>
              <strong>IDEA</strong>
            </div>

            <div>
              <span>02</span>
              <strong>PROBLEM</strong>
            </div>

            <div>
              <span>03</span>
              <strong>DESIGN</strong>
            </div>

            <div>
              <span>04</span>
              <strong>BUILD</strong>
            </div>

            <div>
              <span>05</span>
              <strong>BREAK</strong>
            </div>

            <div>
              <span>06</span>
              <strong>FIX</strong>
            </div>

            <div>
              <span>07</span>
              <strong>SHIP</strong>
            </div>

          </div>

        </section>


        {/* BEYOND CODE */}
        <section
          className="beyond-code section-pink"
          id="beyond-code"
        >

          <div className="section-top">
            <span>SA / 07</span>
            <span>BEYOND CODE</span>
          </div>

          <div className="beyond-intro">

            <span>THE OTHER SIDE</span>

            <h2>
              MORE THAN
              <br />
              <i>JUST CODE.</i>
            </h2>

            <p>
              Technology is a big part of what I do,
              but it isn't the only thing that defines me.
            </p>

          </div>

          <div className="beyond-list">

            <div className="beyond-item">
              <span>01</span>

              <div>
                <h3>DANCE</h3>
                <p>Marathi / Punjabi / Bollywood</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>02</span>

              <div>
                <h3>DESIGN</h3>
                <p>Visual ideas & aesthetics</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>03</span>

              <div>
                <h3>CREATIVE THINKING</h3>
                <p>Turning random ideas into projects</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>04</span>

              <div>
                <h3>COMMUNITY</h3>
                <p>ITSA / Web Development</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>05</span>

              <div>
                <h3>LEARNING</h3>
                <p>Always exploring something new</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>06</span>

              <div>
                <h3>BUILDING</h3>
                <p>Projects, hackathons & experiments</p>
              </div>

              <strong>↗</strong>
            </div>

            <div className="beyond-item">
              <span>07</span>

              <div>
                <h3>RIDING</h3>
                <p>Bullet rides & open roads</p>
              </div>

              <strong>↗</strong>
            </div>

          </div>

        </section>


        {/* TERMINAL / ACTIVITY */}
        <section className="terminal-section section-dark">

          <div className="section-top dark-top">
            <span>SA / 08</span>
            <span>ACTIVITY</span>
          </div>

          <div className="terminal-heading">

            <span>SYSTEM STATUS</span>

            <h2>
              CURRENT
              <br />
              <i>STATE.</i>
            </h2>

          </div>

          <div className="terminal-window">

            <div className="terminal-top">

              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>sharvari@portfolio ~</span>

              <span>● ONLINE</span>

            </div>

            <div className="terminal-body">

              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>
                <span className="terminal-command">
                  whoami
                </span>
              </div>

              <div className="terminal-output">
                SHARVARI ARALKAR
              </div>


              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>

                <span className="terminal-command">
                  currently_building
                </span>
              </div>

              <div className="terminal-output">
                GYMFLOW
                <br />
                AI PROJECTS
                <br />
                PERSONAL PORTFOLIO
              </div>


              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>

                <span className="terminal-command">
                  learning
                </span>
              </div>

              <div className="terminal-output">
                REACT
                <br />
                DSA
                <br />
                FULL STACK
                <br />
                AI / ML
              </div>


              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>

                <span className="terminal-command">
                  looking_for
                </span>
              </div>

              <div className="terminal-output">
                INTERNSHIPS
                <br />
                HACKATHONS
                <br />
                COLLABORATIONS
              </div>


              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>

                <span className="terminal-command">
                  status
                </span>
              </div>

              <div className="terminal-output terminal-active">
                ONLINE — BUILDING
                <span className="cursor">_</span>
              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section className="contact" id="contact">

          <span>CONTACT / 09</span>

          <div>

            <h2>
              LET'S MAKE
              <br />
              SOMETHING <i>INTERESTING.</i>
            </h2>

            <p>
              Have a project, opportunity, or idea in mind?
              Let's connect.
            </p>

            <div className="contact-links">

              <a
                href="mailto:sharvariarlkar14@gmail.com"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <span>EMAIL</span>
                <strong>
                  sharvariarlkar14@gmail.com ↗
                </strong>
              </a>


              <a
                href="tel:+918149389934"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <span>PHONE</span>
                <strong>
                  +91 8149389934 ↗
                </strong>
              </a>


              <a
                href="https://www.linkedin.com/in/sharvari-aralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaLinkedinIn />
                </div>

                <span>LINKEDIN</span>
                <strong>
                  sharvari-aralkar ↗
                </strong>
              </a>


              <a
                href="https://github.com/sharvari-aralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaGithub />
                </div>

                <span>GITHUB</span>
                <strong>
                  sharvari-aralkar ↗
                </strong>
              </a>

            </div>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="footer">

          <span>SHARVARI ARALKAR</span>

          <span>© 2026</span>

          <span>BUILT WITH CURIOSITY</span>

        </footer>

      </main>
    </>
  );
}

export default App;