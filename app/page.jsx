// filename: app/page.jsx
"use client";
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './page.module.css';

const STACK = [
  { cat: "Frontend",  items: ["Next.js 14","React 18","TypeScript","Tailwind CSS","Framer Motion","Radix UI"] },
  { cat: "Backend",   items: ["Node.js","Express","REST APIs","GraphQL","Prisma ORM","Zod"] },
  { cat: "Database",  items: ["PostgreSQL","MongoDB","Redis","Supabase","Firebase","PlanetScale"] },
  { cat: "DevOps",    items: ["Vercel","Railway","Docker","GitHub Actions","Nginx","AWS S3"] },
  { cat: "Design",    items: ["Figma","Design Systems","Prototyping","Accessibility","Motion Design"] },
  { cat: "Product",   items: ["Roadmapping","Sprint Planning","User Research","Analytics","A/B Testing","JTBD"] },
];


const MARQUEE = ["Software Engineer","·","Product Builder","·","Agency Founder","·","Lucide Tech","·","Next.js","·","TypeScript","·","Systems Thinker","·","Full Stack","·"];

export default function Portfolio() {
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" className={styles.hero}>
        <div className={styles.hwm}>DAS</div>
        <div className={styles.hbody}>
          <div className={styles.hkick}>
            <span className={styles.hkl} />
            FOLIO — 2025
          </div>
          <div className={styles.hTitleWrap}>
            <span className={styles.hn1}>DEBAPALLAB</span>
            <div className={styles.hn2Row}>
              <span className={styles.hkl2} />
              <span className={styles.hn2}>they call me Dev</span>
            </div>
          </div>
          <div className={styles.hbar}>
            <p className={styles.htag}>
              I don't just write code. I <strong>translate vision into form</strong> — for builders who know what they want, and dreamers still finding the words.
            </p>
            <div className={styles.hacts}>
              <Link href="/work" className={styles.bs}>VIEW WORK →</Link>
              <Link href="/#contact" className={styles.bg}>LET'S TALK →</Link>
            </div>
          </div>
        </div>
        <div className={styles.hstats}>
          {[["3+","years building"],["10+","projects shipped"],["01","agency founded"],["∞","problems solved"]].map(([n,l]) => (
            <div className={styles.hst} key={l}>
              <div className={styles.hsn}>{n}</div>
              <div className={styles.hsl}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. MARQUEE */}
      <div className={styles.mqw}>
        <div className={styles.mqt}>
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span className={`${styles.mqi} ${item === "·" ? styles.sep : ""}`} key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 3. ABOUT */}
      <ScrollReveal>
        <section id="about" className={styles.about}>
          <div className={styles.al}>
            <div>
              <div className={styles.ey}>ABOUT</div>
              <div style={{ marginTop: "3rem" }}>
                <div className={styles.sbig}>THE<br />MIND</div>
                <span className={styles.sit}>behind the work</span>
              </div>
            </div>
            <div className={styles.port}>
              <div className={`${styles.pc2} ${styles.tl}`} />
              <div className={`${styles.pc2} ${styles.br}`} />
              <img src="/portrait.png" alt="Debapallab Das" className={styles.portImg} />
              <div className={styles.pbadge}>
                <span className={styles.pbn}>Debapallab Das</span>
                <span className={styles.pbt}>portrait · verified</span>
              </div>
            </div>
          </div>
          <div className={styles.ar}>
            <div className={styles.ab}>
              <p>I'm <strong>Debapallab Das</strong> — a software engineer who thinks like a product manager and leads like someone who's been in the room when things go wrong. I founded <em>Lucide Tech</em> not because it was easy, but because I believed something better was possible.</p>
              <p>My engineering background taught me precision. My product experience taught me patience. The space between taught me that <strong>the best solutions live where empathy meets execution</strong> — where what a user needs matters more than what they say they want.</p>
              <p>I've shipped products end-to-end, led teams through ambiguity, and <em>won multiple UI/UX and Product Hackathons</em> in the past 2 years. I've developed an <strong>instinct for what's missing</strong> — that quiet friction nobody names but everyone feels.</p>
              <p><strong>Great software is an act of care.</strong> Every decision — from architecture to microcopy — is made with the person on the other end in mind.</p>
            </div>
            <div className={styles.asig}>
              <div className={styles.ssc}>Debapallab Das</div>
              <div className={styles.smt}>Founder, Lucide Tech<br />Engineer · Product Builder</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3.5 PROCESS PREVIEW */}
      <ScrollReveal>
        <section id="process" className={styles.process}>
          <div className={styles.prl}>
            <div className={styles.pre}>THE BLUEPRINT</div>
            <h2 className={styles.prt}>HOW VISION<br/>BECOMES FORM</h2>
            <p className={styles.prd}>I treat development as an act of system architecture. Every build follows a deterministic pipeline designed for speed, scale, and aesthetic clarity.</p>
            <Link href="/process" className={styles.prcta}>VIEW BLUEPRINT →</Link>
          </div>
          <div className={styles.prr}>
            <div className={styles.prv}>
              <div className={styles.prvg}>SYSTEM</div>
              <div className={styles.prvc}>
                <div className={styles.prvl}>ARCHITECTURE · 2025</div>
                <Link href="/process" className={styles.prlink}>EXPLORE PIPELINE →</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. STACK */}
      <ScrollReveal>
        <section id="stack" className={styles.stack}>
          <div className={styles.skh}>
            <div className={styles.skhl}>
              <div className={styles.ske}>TECH STACK</div>
              <div className={styles.skbig}>BUILT<br />WITH</div>
              <span className={styles.skit}>precision tools</span>
            </div>
            <div className={styles.skhr}>
              <p className={styles.skint}>
                I choose tools the way an architect chooses materials — <strong>intentionally, with the end structure in mind.</strong> Every framework, database, and deployment platform earns its place.
              </p>
            </div>
          </div>
          <div className={styles.skgrid}>
            {STACK.map(({ cat, items }, i) => (
              <div className={styles.skcol} key={cat}>
                <div className={styles.skcat}>{cat}</div>
                <div className={styles.skpills}>
                  {items.map(item => (
                    <span className={styles.skpill} key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 5. CONTACT */}
      <ScrollReveal>
        <section id="contact" className={styles.contact}>
          <div className={styles.ctl}>
            <div>
              <div className={styles.cte}>CONTACT</div>
              <div className={styles.ctbig}>LET'S<br />BUILD</div>
              <span className={styles.ctit}>something worth remembering</span>
            </div>
            <p className={styles.ctbl}>Whether you're a recruiter looking for someone who ships, or a founder who needs a partner who thinks — I'm here.</p>
          </div>
          <div className={styles.ctr}>
            {[
              ["Email","dev@lucidetech.in","mailto:dev@lucidetech.in"],
              ["LinkedIn","dev-designs","https://linkedin.com/in/dev-designs"],
              ["Agency","lucidetech.in","https://lucidetech.in"],
            ].map(([lbl,val,href]) => (
              <Link href={href} className={styles.cti} key={lbl} target="_blank" rel="noopener noreferrer">
                <span className={styles.cil}>{lbl}</span>
                <span className={styles.civ}>{val}</span>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
