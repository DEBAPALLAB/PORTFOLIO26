// filename: app/work/page.jsx
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Work & Achievements — Dev',
  description: 'Case studies, builds, and competitive wins — 2023–2025',
};

const HACKATHONS = [
  {
    place: '1st Place 🥇',
    title: 'UX Wizarding',
    event: 'E-Summit 2025, IIIT Naya Raipur',
    category: 'UX Design Competition',
    work: 'User analysis, Personas, Wireframes, Full UX solution presentation.',
    team: 'Debapallab Das, Sumanth Kotikalapudi, Om Barapatre, Vedant Barapatre',
    time: '~10 months ago',
  },
  {
    place: '1st Place 🥇',
    title: 'Rebranding Wars',
    event: 'Challenge: Rebranding Zepto',
    category: 'Branding / Design Hackathon',
    work: 'Brand values, Visual identity, Campaign strategy.',
    team: 'Debapallab Das, Arjun Varshney, Fahad Ahmed, Aryan Chauhan',
    time: '~10 months ago',
  },
  {
    place: '2nd Place 🥈',
    title: 'Rebranding Wars',
    event: 'E-Summit, IIIT Nagpur',
    category: 'Design / Branding Hackathon',
    work: 'Kodak logo rebrand, UI/UX redesign for Krave Beauty.',
    team: 'Debapallab Das, Hetansh Vakta, Priya Basumatary',
    time: '~2 weeks ago',
  },
  {
    place: '3rd Place 🥉',
    title: 'Cineblitz',
    event: 'Delhi Technological University (DTU)',
    category: 'Video / Creative Hackathon',
    work: 'Ideation, filming, editing under time constraints.',
    team: 'Debapallab Das, Aditya Bagde, Tanishq Chandra, Suraj Singh',
    time: '~10 months ago',
  },
];

export default function WorkPage() {
  return (
    <main className={styles.container}>
      <ScrollReveal>
        <section id="work" className={styles.work}>
          <div className={styles.wkh}>
            <div className={styles.wkhl}>SELECTED WORK</div>
            <div className={styles.wkhr}>case studies & builds — 2023–2025</div>
          </div>
          
          <div className={styles.pfeat}>
            <div className={styles.pfl}>
              <div>
                <div className={styles.pfcat}>Web Application · Featured</div>
                <div className={styles.pft}>LUCIDE<br />PLATFORM</div>
                <div className={styles.pfsu}>The agency's flagship product suite</div>
                <p className={styles.pfd}>A full-stack platform built for modern agencies — project management, client portals, and delivery tracking unified into one cohesive experience. Designed system-first, shipped client-ready.</p>
                <div className={styles.ptags}>
                  {["Next.js 14","TypeScript","PostgreSQL","Prisma","Vercel","Product Design"].map(t => (
                    <span className={styles.ptag} key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <Link href="/work/lucide-platform" className={styles.pfcta}>READ CASE STUDY →</Link>
            </div>
            <div className={styles.pfr}>
              <div className={styles.pfrc} />
              <div className={styles.pfrbg}>01</div>
              <div className={styles.pfrl}>preview · coming soon</div>
            </div>
          </div>
          
          <div className={styles.psrow}>
            <div className={styles.ps}>
              <div className={styles.psn}>02 · AI Product</div>
              <Link href="#" className={styles.pst}>NOTION AI<br />INTERFACE</Link>
              <div className={styles.pssub}>Notion Based Architectured Productivity</div>
              <p className={styles.psd}>AI powered productivity interface mapped exactly to the Notion architecture. Engineered to reduce systematic friction and amplify continuous output.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["AI","Next.js","Design Systems"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <span className={styles.pscs}>Active Project —</span>
            </div>
            
            <div className={styles.ps}>
              <div className={styles.psn}>03 · SaaS</div>
              <Link href="https://www.comparefi.in/" target="_blank" rel="noreferrer" className={styles.pst}>COMPARE FI</Link>
              <div className={styles.pssub}>Financial Comparison Engine</div>
              <p className={styles.psd}>A robust platform enabling users to cleanly compare financial instruments. Built with scalability and performance optimization in mind.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["React","Tailwind CSS","Data Integration"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <a href="https://www.comparefi.in/" target="_blank" rel="noreferrer" className={`${styles.pscs} ${styles.pscsLink}`}>Visit comparefi.in →</a>
            </div>
            
            <div className={styles.ps}>
              <div className={styles.psn}>04 · AI Application</div>
              <Link href="https://www.notaprompt.in/" target="_blank" rel="noreferrer" className={styles.pst}>NOT A PROMPT</Link>
              <div className={styles.pssub}>Prompt orchestration platform</div>
              <p className={styles.psd}>Moving beyond typical text boxes, providing a refined engine for prompt generation, saving time and delivering optimized models.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["OpenAI","React","Tailwind CSS"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <a href="https://www.notaprompt.in/" target="_blank" rel="noreferrer" className={`${styles.pscs} ${styles.pscsLink}`}>Visit notaprompt.in →</a>
            </div>
            
            <div className={styles.ps}>
              <div className={styles.psn}>05 · Web Presence</div>
              <Link href="https://aaradhyapreview.netlify.app/" target="_blank" rel="noreferrer" className={styles.pst}>AARADHYA</Link>
              <div className={styles.pssub}>Portfolio & Business Preview</div>
              <p className={styles.psd}>A digital presence crafted meticulously to communicate brand value immediately and establish market credibility.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["Frontend","UI/UX", "Animation"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <a href="https://aaradhyapreview.netlify.app/" target="_blank" rel="noreferrer" className={`${styles.pscs} ${styles.pscsLink}`}>Visit preview →</a>
            </div>
            
            <div className={styles.ps}>
              <div className={styles.psn}>06 · E-Commerce/Agency</div>
              <Link href="https://aarshglobalex.netlify.app/" target="_blank" rel="noreferrer" className={styles.pst}>AARSH GLOBAL</Link>
              <div className={styles.pssub}>Global trading interface</div>
              <p className={styles.psd}>A high-conversion frontend built for global reach, showcasing products with a modern layout and smooth interaction flows.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["Web App", "Responsive Design"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <a href="https://aarshglobalex.netlify.app/" target="_blank" rel="noreferrer" className={`${styles.pscs} ${styles.pscsLink}`}>Visit preview →</a>
            </div>

            <div className={styles.ps}>
              <div className={styles.psn}>07 · Web Application</div>
              <Link href="/work/arcane-analytics" className={styles.pst}>ARCANE</Link>
              <div className={styles.pssub}>Deep data visualization</div>
              <p className={styles.psd}>Visualizing high-dimensional data for research teams. Making complex insights accessible without losing the granularity required for scientific accuracy.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["React","D3.js","WebGL"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <Link href="/work/arcane-analytics" className={`${styles.pscs} ${styles.pscsLink}`}>READ CASE STUDY →</Link>
            </div>

            <div className={styles.ps}>
              <div className={styles.psn}>08 · In Development</div>
              <div className={styles.pst}>ONGOING<br />VENTURES</div>
              <div className={styles.pssub}>Confidential heavy builds</div>
              <p className={styles.psd}>Two massive architectures currently in development, focusing on systemic automation and enterprise-grade performance.</p>
              <div className={styles.ptags} style={{ marginBottom: "1rem" }}>
                {["Systems Design","Automation","Performance"].map(t => (
                  <span className={styles.ptag} key={t}>{t}</span>
                ))}
              </div>
              <span className={styles.pscs}>In Progress —</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HACKATHONS */}
      <ScrollReveal>
        <section className={styles.hackathons}>
          <div className={styles.hwTitleRow}>
            <div className={styles.hwEy}>COMPETITIVE</div>
            <h2 className={styles.htq}>HACKATHONS & WINS</h2>
          </div>
          <div className={styles.hackGrid}>
            {HACKATHONS.map((h, i) => (
              <div className={styles.hackCard} key={i}>
                <div className={styles.hcPlace}>{h.place}</div>
                <h3 className={styles.hcTitle}>{h.title}</h3>
                <div className={styles.hcEvent}>{h.event} · {h.category}</div>
                <p className={styles.hcWork}><strong>Work:</strong> {h.work}</p>
                <div className={styles.hcTeam}>
                  TEAM: {h.team} <br/>
                  TIME: {h.time}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.ctaSection}>
          <span className={styles.ctaEyebrow}>WORK WITH ME</span>
          <h2 className={styles.ctaTitle}>READY TO BUILD<br />SOMETHING REAL?</h2>
          <Link href="/#contact" className={styles.ctaButton}>GET IN TOUCH →</Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
