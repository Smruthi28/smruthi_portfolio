import { useState } from "react";
import ResponsibleGamingCaseStudy from "./ResponsibleGamingCaseStudy";
import { motion } from "motion/react";
import { ArrowUpRight, Code2, BriefcaseBusiness } from "lucide-react";import "./App.css";


type FunFactCardProps = {
  emoji: string;
  title: string;
  fact: string;
  color: string;
};

function FunFactCard({
  emoji,
  title,
  fact,
  color,
}: FunFactCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      type="button"
      className={`fun-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={flipped}
      aria-label={`${title}. ${flipped ? "Show front" : "Reveal fun fact"}`}
    >
      <span className="fun-card-inner">
        <span
          className="fun-card-face fun-card-front"
          style={{ background: color }}
        >
          <span className="fun-emoji">{emoji}</span>
          <span className="fun-card-title">{title}</span>
          <span className="fun-hint">Click to reveal ↗</span>
        </span>

        <span
          className="fun-card-face fun-card-back"
          style={{ background: color }}
        >
          <span className="fun-emoji">{emoji}</span>
          <span className="fun-fact-text">{fact}</span>
          <span className="fun-hint">Click to flip back ↩</span>
        </span>
      </span>
    </motion.button>
  );
}

function App() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

if (showCaseStudy) {
  return (
    <ResponsibleGamingCaseStudy
      onBack={() => {
        setShowCaseStudy(false);
        window.scrollTo(0, 0);
      }}
    />
  );
}
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">Smruthi.</a>
        <a href="mailto:smruthi.r21@gmail.com" className="contact-link">
          Let's talk <ArrowUpRight size={18} />
        </a>
      </nav>

      
<section className="hero">
  <motion.div
    className="hero-content"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <p className="eyebrow">FRONTEND & MOBILE ENGINEER</p>

    <h1>
      Building digital
      <br />
      experiences that
      <br />
      <span>feel effortless.</span>
    </h1>

   <p className="description">
  I'm Smruthi, a frontend and mobile engineer with around 4 years
  of experience building responsive web applications and
  cross-platform mobile experiences using React, React Native,
  JavaScript, and TypeScript. I enjoy creating intuitive,
  high-performance interfaces that make complex things feel simple.
</p>

    <div className="hero-links">
      <a href="#projects" className="primary-button">
        Explore my work <ArrowUpRight size={18} />
      </a>

      <a href="https://github.com" aria-label="GitHub">
        <Code2 size={22} />
      </a>

      <a href="https://www.linkedin.com/in/smruthi-reddy-074270168/" aria-label="LinkedIn">
        <BriefcaseBusiness size={22} />
      </a>
    </div>
  </motion.div>

  <motion.div
    className="hero-art"
    initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1.1, ease: "easeOut" }}
    aria-hidden="true"
  >
    <div className="art-glow" />

    <motion.div
      className="floating-object"
      animate={{ y: [0, -22, 0], rotate: [-5, 3, -5] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="cube">
        <div className="cube-top">
          <span>✦</span>
        </div>
        <div className="cube-left" />
        <div className="cube-right" />
      </div>
    </motion.div>

    <motion.div
      className="orbit orbit-one"
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span className="orbit-dot" />
    </motion.div>

    <motion.div
      className="orbit orbit-two"
      animate={{ rotate: -360 }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span className="orbit-dot" />
    </motion.div>

    <motion.div
      className="floating-label label-one"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      React + TypeScript
    </motion.div>

    <motion.div
      className="floating-label label-two"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      UI Engineering ✦
    </motion.div>
  </motion.div>
</section>

      
<section id="projects" className="projects">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <p className="eyebrow">SELECTED WORK</p>
    <h2>Things I've built.</h2>
    <p className="projects-intro">
      A selection of the experiences I've helped bring to life,
      from complex mobile workflows to thoughtful interfaces.
    </p>
  </motion.div>

  <div className="project-grid">
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="project-preview gaming-preview">
        <div className="preview-orb orb-purple" />

        <div className="phone-mockup">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-header">
              <span>My Account</span>
              <span>•••</span>
            </div>

            <div className="screen-title">
              <small>RESPONSIBLE GAMING</small>
              <strong>Activity History</strong>
              <p>Review your account activity</p>
            </div>

            <div className="filter-row">
              <span>Last 30 days</span>
              <span>All types</span>
            </div>

            <div className="history-item">
              <span className="history-icon">↗</span>
              <div>
                <strong>Deposit Limit</strong>
                <small>Limit updated</small>
              </div>
              <span className="history-status">Active</span>
            </div>

            <div className="history-item">
              <span className="history-icon">◷</span>
              <div>
                <strong>Session Limit</strong>
                <small>Activity recorded</small>
              </div>
              <span className="history-status">Active</span>
            </div>

            <div className="history-item">
              <span className="history-icon">✓</span>
              <div>
                <strong>Account Activity</strong>
                <small>History event</small>
              </div>
              <span className="history-status">Done</span>
            </div>
          </div>
        </div>

        <span className="preview-caption">
          Illustrative UI · Not a production screenshot
        </span>
      </div>

      <div className="project-details">
        <div>
          <p className="project-category">WEB &MOBILE ENGINEERING</p>
          <h3>Responsible Gaming Experience</h3>
          <p className="project-description">
            Built complex React Native workflows integrating
            multiple APIs, activity history, and account controls
            across mobile platforms.
          </p>
          <div className="tech-tags">
            <span>React Native</span>
            <span>TypeScript</span>
            <span>TanStack Query</span>
          </div>
        </div>
        <button
  type="button"
  className="project-arrow project-arrow-button"
  aria-label="View Responsible Gaming case study"
  onClick={() => {
    setShowCaseStudy(true);
    window.scrollTo(0, 0);
  }}
>
  <ArrowUpRight size={22} />
</button>
      </div>
    </motion.article>

    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: 0.12 }}
    >
      <div className="project-preview commerce-preview">
        <div className="preview-orb orb-peach" />

        <div className="store-mockup">
          <div className="store-header">
            <strong>FORM & FOUND</strong>
            <span>☰</span>
          </div>

          <div className="store-product-art">
            <div className="product-shadow" />
            <div className="product-bottle">
              <div className="bottle-cap" />
              <div className="bottle-body">
                <small>FORM & FOUND</small>
                <strong>daily.</strong>
                <span>BODY CARE</span>
              </div>
            </div>
          </div>

          <div className="store-content">
            <small>THE EVERYDAY COLLECTION</small>
            <h4>Feel good, every day.</h4>
            <p>Simple essentials for your daily routine.</p>
            <div className="store-button">Explore collection ↗</div>
          </div>
        </div>

        <span className="preview-caption">
          Independent concept · In development
        </span>
      </div>

      <div className="project-details">
        <div>
          <p className="project-category">PERSONAL PROJECT · PLANNED</p>
          <h3>Mobile-First Ecommerce Experience</h3>
          <p className="project-description">
            A planned storefront project exploring responsive
            design, product storytelling, and accessible shopping
            experiences.
          </p>
          <div className="tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </div>
        </div>
        <button
  type="button"
  className="project-arrow project-arrow-button"
  aria-label="View Responsible Gaming case study"
  onClick={() => {
    setShowCaseStudy(true);
    window.scrollTo(0, 0);
  }}
>
  <ArrowUpRight size={22} />
</button>
      </div>
    </motion.article>
  </div>
</section>

{/* ===== ABOUT SECTION ===== */}
<section id="about" className="about-section">
  <motion.div
    className="about-content"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <p className="eyebrow">01 / ABOUT ME</p>

    <h2>
      A little about the person
      <br />
      <span>behind the code.</span>
    </h2>

    <p className="about-description">
  I'm a frontend and mobile software engineer with around 4 years
  of experience developing responsive web applications and
  cross-platform mobile applications using React, React Native,
  JavaScript, and TypeScript. I enjoy building user-friendly
  interfaces, solving complex technical challenges, and creating
  experiences that work seamlessly across devices.
</p>

<p className="about-description">
  My experience spans web and mobile development, including
  reusable UI components, REST API integrations, state management,
  and performance optimization. Most recently at Caesars
  Entertainment, I contributed to complex application features
  and shared UI components. I enjoy collaborating with teams,
  learning new technologies, and taking ownership of features
  from development through delivery.
</p>
  </motion.div>

  <div className="about-stats">
    <motion.div
      className="stat-card lavender-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, rotate: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="stat-number">3+</span>
      <p>Years of development experience</p>
    </motion.div>

    <motion.div
      className="stat-card peach-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, rotate: 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <span className="stat-number">iOS + Android</span>
      <p>Cross-platform mobile development</p>
    </motion.div>
  </div>
</section>

{/* ===== BEYOND THE CODE ===== */}
<section className="beyond-section" id="beyond">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <p className="eyebrow">A LITTLE PERSONALITY ✦</p>

    <h2>
      Beyond <span>the code.</span>
    </h2>

    <p className="beyond-description">
      There's more to me than components and commits.
      Here are a few things that make me, well, me.
    </p>
  </motion.div>

  <div className="fun-grid">
    <FunFactCard
      emoji="✈️"
      title="The Explorer"
      fact="Always dreaming of my next destination. I love discovering new places and collecting memories along the way."
      color="#eae4ff"
    />

    <FunFactCard
      emoji="📸"
      title="The Photographer-ish"
      fact="I love taking photos. Are they always perfectly framed? Not really. Does that stop me? Absolutely not."
      color="#ffe8dc"
    />

    <FunFactCard
      emoji="🐶"
      title="It's Complicated..."
      fact="I think dogs are ridiculously cute. I'm also scared of them. So I'll admire them from a safe distance!"
      color="#e5f0eb"
    />
  </div>

  <p className="beyond-footer">
    Psst... try flipping the cards. ✨
  </p>
</section>

{/* ===== SKILLS SECTION ===== */}
<section id="skills" className="skills-section">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <p className="eyebrow">02 / TECHNICAL SKILLS</p>
    <h2>
      Tools I <span>build with.</span>
    </h2>
    <p className="skills-description">
      The technologies and tools I use to turn ideas into
      polished, production-ready experiences.
    </p>
  </motion.div>

  <div className="skills-grid">
    {[
  {
    title: "Web Development",
    icon: "◈",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile Development",
    icon: "✦",
    skills: [
      "React Native",
      "iOS",
      "Android",
      "React Navigation",
    ],
  },
  {
    title: "Frontend Architecture",
    icon: "⌘",
    skills: [
      "Reusable Components",
      "State Management",
      "Redux",
      "Context API",
      "TanStack Query",
    ],
  },
  {
    title: "APIs & Integration",
    icon: "⚡",
    skills: [
      "REST APIs",
      "API Integration",
      "Async/Await",
      "JSON",
    ],
  },
  {
    title: "Development Tools",
    icon: "✳",
    skills: [
      "Git",
      "GitLab CI/CD",
      "Jest",
      "Figma",
      "VS Code",
    ],
  },
].map((category, index) => (
      <motion.div
        key={category.title}
        className="skill-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
      >
        <div className="skill-icon">{category.icon}</div>
        <h3>{category.title}</h3>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </main>
  );
}

export default App;