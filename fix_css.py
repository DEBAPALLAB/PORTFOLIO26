import sys

def fix_css():
    with open('app/page.module.css', 'r', encoding='utf-8') as f:
        content = f.read()

    insertion = '''  .process { grid-template-columns: 1fr; }
  .prh { grid-template-columns: 1fr; }
  .prhl { border-right: none; border-bottom: 1px solid var(--rule2); }
  .prrow { grid-template-columns: 1fr 1fr; }
  .prq { flex-direction: column; gap: 1.5rem; padding: 3rem 1.5rem; }
  .pfeat { grid-template-columns: 1fr; }
  .pfr { min-height: 220px; }
  .psrow { grid-template-columns: 1fr; }
  .ps { border-right: none; border-bottom: 1px solid var(--rule2); padding: 3rem 1.5rem; }
'''
    content = content.replace('  .contact {', insertion + '  .contact {')
    with open('app/page.module.css', 'w', encoding='utf-8') as f:
        f.write(content)

fix_css()
