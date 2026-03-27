with open('app/page.jsx', 'a', encoding='utf-8') as f:
    f.write('''      {/* 5. CONTACT */}
      <ScrollReveal>
        <section id="contact" className={styles.contact}>
          <div className={styles.ctl}>
            <div>
              <div className={styles.cte}>CONTACT</div>
              <div className={styles.ctbig}>LET\\'S<br />BUILD</div>
              <span className={styles.ctit}>something worth remembering</span>
            </div>
            <p className={styles.ctbl}>Whether you\\'re a recruiter looking for someone who ships, or a founder who needs a partner who thinks — I\\'m here.</p>
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
''')
