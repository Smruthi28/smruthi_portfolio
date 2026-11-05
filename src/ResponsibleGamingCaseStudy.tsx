
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = {
  onBack: () => void;
};

export default function ResponsibleGamingCaseStudy({
  onBack,
}: Props) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button className="case-back" onClick={onBack}>
          <ArrowLeft size={18} />
          Back to portfolio
        </button>
        <span className="case-brand">Smruthi.</span>
      </nav>

      <motion.header
        className="case-hero"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">FEATURED CASE STUDY / WEB & MOBILE ENGINEERING</p>

        <h1>
          Making responsible gaming
          <span> easier to navigate.</span>
        </h1>

        <p className="case-lead">
          Building intuitive account-management experiences
          through reusable React Native components, unified
          activity history, and complex multi-step workflows.
        </p>

        <div className="case-meta">
          <div><small>COMPANY</small><strong>Caesars Entertainment</strong></div>
          <div><small>ROLE</small><strong>React Native Developer</strong></div>
          <div><small>PLATFORMS</small><strong>Web, iOS & Android</strong></div>
          <div><small>STACK</small><strong>React Native · TypeScript</strong></div>
        </div>
      </motion.header>

      <div className="case-banner">
        <div className="case-banner-glow" />
        <div className="case-banner-content">
          <span>RESPONSIBLE GAMING</span>
          <h2>Complex workflows.<br />Clearer experiences.</h2>
          <p>React Native · TypeScript · TanStack Query</p>
        </div>
        <span className="case-banner-symbol" aria-hidden="true">✦</span>
      </div>

      <div className="case-body">
        <motion.section
          className="case-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">01 / THE CONTEXT</p>
          <h2>The challenge</h2>
          <p>
            Responsible gaming tools help players manage their
            account activity and gaming limits. The experience
            involves multiple account controls, backend services,
            and state-dependent workflows.
          </p>
          <p>
            My work focused on making these experiences easier
            to understand and navigate while handling the
            underlying technical complexity.
          </p>
        </motion.section>

        <motion.section
          className="case-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">02 / MY CONTRIBUTIONS</p>
          <h2>What I built</h2>

          <div className="case-feature-grid">
            <article className="case-feature">
              <span>01</span>
              <h3>Unified Activity History</h3>
              <p>
                Integrated multiple backend endpoints and
                normalized their responses into a consistent
                activity history with date and event-type filters.
              </p>
            </article>

            <article className="case-feature">
              <span>02</span>
              <h3>Self-Exclusion Workflow</h3>
              <p>
                Developed a six-step experience covering personal
                details, agreements, period selection, confirmation,
                OTP verification, and success states.
              </p>
            </article>

            <article className="case-feature">
              <span>03</span>
              <h3>Reusable UI Components</h3>
              <p>
                Built and integrated reusable React Native
                components to support consistent interfaces
                across application features.
              </p>
            </article>

            <article className="case-feature">
              <span>04</span>
              <h3>Account Controls</h3>
              <p>
                Contributed to gaming-limit experiences,
                account-state handling, and related
                reminder and confirmation flows.
              </p>
            </article>
          </div>
        </motion.section>

        <motion.section
          className="case-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">03 / ENGINEERING APPROACH</p>
          <h2>How I approached it</h2>

          <div className="case-process">
            <div>
              <strong>01 — Fetch</strong>
              <p>Use TanStack Query to request activity data from multiple APIs.</p>
            </div>
            <div>
              <strong>02 — Normalize</strong>
              <p>Transform different backend responses into a shared TypeScript event model.</p>
            </div>
            <div>
              <strong>03 — Filter</strong>
              <p>Apply date-range and event-type filters to the unified history.</p>
            </div>
            <div>
              <strong>04 — Present</strong>
              <p>Render consistent event cards with loading and empty states.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="case-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">04 / TAKEAWAYS</p>
          <h2>What this project reinforced</h2>
          <p>
            Building reliable frontend experiences requires more
            than implementing screens. This work involved
            coordinating API integrations, modeling complex
            states, creating reusable components, and handling
            user journeys across cross platforms.
          </p>
          <p className="case-note">
            Illustrative portfolio case study based on my engineering
            contributions. No proprietary source code or production
            screenshots are included.
          </p>
        </motion.section>

        <div className="case-bottom">
          <h2>Want to know more about my work?</h2>
          <a href="mailto:smruthi.r21@gmail.com">
            Let's talk <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
