import sys

def modify_jsx():
    with open('app/page.jsx', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    with open('app/page.jsx', 'w', encoding='utf-8') as f:
        skip = False
        for line in lines:
            if 'const PROCESS = [' in line:
                skip = True
            elif skip and '];' in line and not line.startswith(' '):
                skip = False
                continue
                
            if skip:
                continue

            if '{/* 5. PROCESS */}' in line:
                skip = True
            elif skip and '{/* 7. CONTACT */}' in line:
                skip = False
                
            if not skip:
                f.write(line)

def modify_css():
    with open('app/page.module.css', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    with open('app/page.module.css', 'w', encoding='utf-8') as f:
        skip = False
        in_media = False
        for line in lines:
            if '/* PROCESS */' in line:
                skip = True
            elif skip and '/* CONTACT */' in line:
                skip = False
                
            if skip:
                continue
                
            if '@media (max-width: 900px)' in line:
                in_media = True
                
            if in_media:
                if any(x in line for x in ['.process {', '.prh {', '.prhl {', '.prrow {', '.prq {', '.pfeat {', '.pfr {', '.psrow {', '.ps {']):
                    continue
            
            f.write(line)

modify_jsx()
modify_css()
