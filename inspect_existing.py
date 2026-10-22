with open(r'c:\Nations lanka\My Concept\src\data\toursData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = re.findall(r"id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*country:\s*'([^']+)'", content)
print(f"Total tour packages found: {len(matches)}")
for i, m in enumerate(matches, 1):
    print(f"{i}. [{m[2]}] {m[1]} ({m[0]})")
