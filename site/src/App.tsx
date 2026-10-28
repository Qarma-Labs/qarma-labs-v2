import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Compass,
  Menu,
  MessageCircle,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const socials = {
  instagram: "https://www.instagram.com/qarmalabs/",
  github: "https://github.com/Qarma-Labs",
};

const ideas = [
  {
    tag: "A small idea",
    title: "A new enquiry arrives.",
    steps: ["Read the request", "Sort the next step", "Draft a thoughtful reply"],
    note: "A clearer start to every conversation.",
  },
  {
    tag: "A daily task",
    title: "The same work, again.",
    steps: ["Spot the routine", "Connect the right tools", "Give your time back"],
    note: "Less copy and paste. More room to think.",
  },
  {
    tag: "A growing team",
    title: "Your process has changed.",
    steps: ["Map how work happens", "Build around your team", "Keep improving"],
    note: "Technology that fits the way you work.",
  },
];

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom software",
    description:
      "Web apps, mobile apps, APIs and custom systems shaped around the way you actually work.",
    accent: "peach",
    cue: "Made to fit",
  },
  {
    number: "02",
    icon: Workflow,
    title: "AI & automation",
    description:
      "Practical AI workflows that take the repetition out of everyday tasks and make space for better work.",
    accent: "lilac",
    cue: "Useful by design",
  },
  {
    number: "03",
    icon: Compass,
    title: "ICT & consultation",
    description:
      "Expert guidance to help you choose, connect and make more of the technology you already use.",
    accent: "lime",
    cue: "Clear next steps",
  },
];

const steps = [
  {
    number: "01",
    label: "LISTEN",
    title: "Start with the real problem.",
    body: "We learn how things work today, where they get stuck, and what a better outcome would look like.",
  },
  {
    number: "02",
    label: "SHAPE",
    title: "Make the next step clear.",
    body: "Together, we turn the big ask into a useful plan: the right tools, the right scope, and a human way forward.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Make it work in real life.",
    body: "We build, test and refine around the people who will use it—not around technology for its own sake.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#top"
      aria-label="Qarma Labs home"
    >
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-wordmark">
        QARMA <b>LABS</b>
      </span>
    </a>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Illustrative Qarma Labs workspace: an idea moves from an enquiry to a clearer next step"
    >
      <div className="art-grid" />
      <div className="art-glow art-glow-one" />
      <div className="art-glow art-glow-two" />
      <div className="art-topline">
        <span><i /> QARMA / WORKING NOTES</span>
        <span>IDEA 01 — 03</span>
      </div>
      <div className="art-stamp">
        <img src="./assets/qarma-labs-avatar.jpg" alt="" />
        <span>HUMAN FIRST<br />TECHNOLOGY SECOND</span>
      </div>
      <div className="art-widget art-enquiry">
        <span className="widget-eyebrow">A SMALL IDEA</span>
        <strong>A new enquiry.</strong>
        <span className="widget-copy">Find the useful next step.</span>
        <span className="widget-line"><i /><i /><i /></span>
        <span className="widget-foot"><MessageCircle size={13} /> A clearer first reply</span>
      </div>
      <div className="art-widget art-outcome">
        <span className="outcome-icon"><Sparkles size={17} /></span>
        <span className="widget-eyebrow">THE QARMA WAY</span>
        <strong>Make tech work for people.</strong>
        <span className="outcome-check"><Check size={14} /> Simple, thoughtful, useful</span>
      </div>
      <div className="art-note">
        <span>AI <b>×</b> SOFTWARE <b>×</b> ICT</span>
        <span className="note-spark">✳</span>
      </div>
      <span className="art-orbit orbit-one" />
      <span className="art-orbit orbit-two" />
    </div>
  );
}

function WorkflowIdea({
  index,
  onSelect,
}: {
  index: number;
  onSelect: (index: number) => void;
}) {
  const idea = ideas[index];

  return (
    <div className="idea-panel">
      <div className="idea-panel-head">
        <span className="eyebrow"><i className="tiny-live" /> AN IDEA, MADE USEFUL</span>
        <span className="idea-count">0{index + 1}<span> / 0{ideas.length}</span></span>
      </div>
      <div className="idea-card">
        <div className="idea-title-row">
          <div>
            <span className="idea-tag">{idea.tag}</span>
            <h3>{idea.title}</h3>
          </div>
          <span className="idea-spark"><Bot size={21} /></span>
        </div>
        <div className="flow-steps">
          {idea.steps.map((step, stepIndex) => (
            <div className="flow-step" key={step}>
              <span className="flow-icon">
                {stepIndex === 0 ? <MessageCircle size={16} /> : stepIndex === 1 ? <Workflow size={16} /> : <Check size={16} />}
              </span>
              <span className="flow-label">{step}</span>
              {stepIndex < idea.steps.length - 1 && <ArrowRight className="flow-arrow" size={15} />}
            </div>
          ))}
        </div>
        <p className="idea-note">{idea.note}</p>
      </div>
      <div className="idea-controls">
        <div className="idea-dots" aria-label="Choose a workflow example">
          {ideas.map((item, dotIndex) => (
            <button
              key={item.tag}
              className={`idea-dot ${index === dotIndex ? "active" : ""}`}
              aria-label={`Show example ${dotIndex + 1}: ${item.tag}`}
              aria-pressed={index === dotIndex}
              onClick={() => onSelect(dotIndex)}
            />
          ))}
        </div>
        <span>Illustrative examples · not live products</span>
      </div>
    </div>
  );
}

export default function App() {
  const [activeIdea, setActiveIdea] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell" id="top">
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <nav
              className={`site-nav ${menuOpen ? "is-open" : ""}`}
              id="site-navigation"
              aria-label="Main navigation"
            >
              <a href="#services" onClick={closeMenu}>What we do</a>
              <a href="#lab" onClick={closeMenu}>The lab</a>
              <a href="#approach" onClick={closeMenu}>Our approach</a>
              <a
                className="mobile-contact"
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Say hello <ArrowUpRight size={16} />
              </a>
            </nav>
            <a className="header-cta" href={socials.instagram} target="_blank" rel="noreferrer">
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </header>

        <main id="main">
          <section className="hero section-wrap" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker"><i className="tiny-live" /> AN INDEPENDENT TECHNOLOGY STUDIO</p>
              <h1 id="hero-title">Building with <em>intelligence.</em></h1>
              <p className="hero-lede">We build technology for people, businesses and ideas shaping what comes next.</p>
              <p className="hero-detail">Thoughtful software. Useful AI. ICT that makes sense. Let&apos;s make the next thing work better.</p>
              <div className="hero-actions">
                <a className="button button-dark" href={socials.instagram} target="_blank" rel="noreferrer">
                  Tell us what you&apos;re building <ArrowUpRight size={17} />
                </a>
                <a className="text-link" href="#services">Explore what we do <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-footnote"><span className="hero-footnote-line" /> Practical by design. Human at the centre.</div>
            </div>
            <HeroArtwork />
            <div className="hero-index"><span>01</span><span className="hero-index-rule" /><span>IDEAS → IMPACT</span></div>
          </section>

          <div className="ticker" aria-label="Qarma Labs areas of work">
            <div className="ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="ticker-group" key={copy}>
                  <span>AI that earns its place</span><i>✳</i>
                  <span>Software that fits</span><i>✳</i>
                  <span>Systems that move you forward</span><i>✳</i>
                  <span>Built with intelligence</span><i>✳</i>
                </div>
              ))}
            </div>
          </div>

          <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">WHAT WE DO <span>·</span> 02</p>
                <h2 id="services-title">Technology should <em>fit you.</em></h2>
              </div>
              <p className="section-intro">No one-size-fits-all answers. Just the right mix of expertise, tools and good questions.</p>
            </div>
            <div className="services-grid">
              {services.map(({ number, icon: Icon, title, description, accent, cue }) => (
                <article className={`service-card ${accent} reveal`} key={number}>
                  <div className="service-top">
                    <span className="service-number">{number} / 03</span>
                    <span className="service-icon"><Icon size={21} strokeWidth={1.8} /></span>
                  </div>
                  <span className="service-cue">{cue}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a className="card-arrow" href="#contact" aria-label={`Ask us about ${title}`}><ArrowUpRight size={19} /></a>
                </article>
              ))}
            </div>
          </section>

          <section className="ideas-section" aria-labelledby="ideas-title">
            <div className="ideas-inner section-wrap">
              <div className="ideas-copy reveal">
                <p className="eyebrow">FROM EVERYDAY TO EASIER <span>·</span> 03</p>
                <h2 id="ideas-title">Less busywork.<br /><em>More possibility.</em></h2>
                <p>Great technology doesn&apos;t need to feel complicated. We look for the small, meaningful shifts that make work flow better.</p>
                <a className="text-link" href="#approach">See how we work <ArrowDownRight size={17} /></a>
              </div>
              <WorkflowIdea index={activeIdea} onSelect={setActiveIdea} />
            </div>
          </section>

          <section className="lab-section section-wrap" id="lab" aria-labelledby="lab-title">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">A LOOK INSIDE THE OPEN-SOURCE LAB <span>·</span> 04</p>
                <h2 id="lab-title">Ideas, <em>in the open.</em></h2>
              </div>
              <p className="section-intro">Tools and experiments we&apos;re exploring in the Qarma Labs public GitHub organization.</p>
            </div>
            <article className="project-card reveal">
              <div className="project-art" aria-label="QM, people and agents working together">
                <div className="project-art-top"><span>QARMA LABS <b>✳</b></span><span>OPEN SOURCE / 001</span></div>
                <div className="project-glyph">qm<span>↗</span></div>
                <div className="project-art-caption"><span>PEOPLE × AGENTS</span><span>TOGETHER, AT WORK</span></div>
                <div className="project-decoration decoration-one" />
                <div className="project-decoration decoration-two" />
              </div>
              <div className="project-copy">
                <p className="eyebrow"><i className="tiny-live" /> PUBLIC REPOSITORY / FORK</p>
                <h3>QM</h3>
                <p className="project-description">A multiplayer agent harness for work. In Slack and on the web, people can work independently and collaborate with an agent in shared channels and projects.</p>
                <p className="project-attribution">Qarma Labs&apos; public fork of the open-source QM project.</p>
                <div className="project-tags"><span>AI agents</span><span>Collaboration</span><span>Open source</span></div>
                <a className="button button-outline" href="https://github.com/Qarma-Labs/harness1" target="_blank" rel="noreferrer">
                  Explore QM on GitHub <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
            <p className="project-footnote">See more experiments on <a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a></p>
          </section>

          <section className="approach-section" id="approach" aria-labelledby="approach-title">
            <div className="section-wrap">
              <div className="section-heading reveal">
                <div>
                  <p className="eyebrow">GOOD WORK STARTS WITH GOOD QUESTIONS <span>·</span> 05</p>
                  <h2 id="approach-title">Human first.<br /><em>Technology second.</em></h2>
                </div>
                <p className="section-intro">We don&apos;t start with a tool and search for a use. We start with you.</p>
              </div>
              <div className="approach-grid">
                {steps.map((step) => (
                  <article className="approach-card reveal" key={step.number}>
                    <p className="approach-step"><span>{step.number}</span> / {step.label}</p>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                    <span className="approach-rule" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
            <div className="contact-card reveal">
              <div className="contact-copy">
                <p className="eyebrow"><i className="tiny-live" /> YOUR IDEA HAS A PLACE HERE</p>
                <h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2>
                <p>Tell us what&apos;s slowing you down, what you&apos;re dreaming up, or what you&apos;re curious about. We&apos;ll take it from there.</p>
                <a className="button button-lime" href={socials.instagram} target="_blank" rel="noreferrer">
                  Start a conversation <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="contact-art" aria-hidden="true">
                <div className="contact-orbit contact-orbit-a" />
                <div className="contact-orbit contact-orbit-b" />
                <div className="contact-message">
                  <span>GOOD QUESTION</span>
                  <strong>What if we<br />made it easier?</strong>
                  <span className="message-tail">✳</span>
                </div>
                <div className="contact-sticker">Q<span>✳</span></div>
                <span className="contact-art-note">BUILT AROUND PEOPLE</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-main section-wrap">
            <div className="footer-brand-block">
              <Brand footer />
              <p>Building with intelligence.<br />Made for real life.</p>
            </div>
            <div className="footer-links">
              <p className="eyebrow">KEEP EXPLORING</p>
              <a href="#services">What we do <ArrowUpRight size={14} /></a>
              <a href="#lab">The lab <ArrowUpRight size={14} /></a>
              <a href="#approach">Our approach <ArrowUpRight size={14} /></a>
            </div>
            <div className="footer-links">
              <p className="eyebrow">SAY HELLO</p>
              <a href={socials.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
              <a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="footer-bottom section-wrap">
            <span>© {new Date().getFullYear()} Qarma Labs</span>
            <span>Thoughtful technology, made for real life.</span>
            <a href="#top">Back to top <ArrowUpRight size={13} /></a>
          </div>
        </footer>
      </div>
    </>
  );
}
