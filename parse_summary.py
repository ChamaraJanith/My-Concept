import json, re

with open('vietnam_tours_raw.json', 'r', encoding='utf-8') as f:
    tours = json.load(f)

for t in tours:
    print("=" * 60)
    print(f"TOUR #{t['index']}: {t['filename']}")
    text = t['text']
    
    # Extract Title
    title_m = re.search(r'Tour:\s*(.+)', text)
    title = title_m.group(1).strip() if title_m else "N/A"
    
    # Extract Dates
    date_m = re.search(r'(?:Date of travel|Travel Period):\s*(.+)', text, re.IGNORECASE)
    dates = date_m.group(1).strip() if date_m else "N/A"
    
    # Extract Nights
    nights_m = re.search(r'No of nights:\s*(\d+)', text, re.IGNORECASE)
    nights = nights_m.group(1).strip() if nights_m else "N/A"
    
    # Extract Cost
    cost_m = re.findall(r'(?:Cost per person|Cost):\s*(.+)', text, re.IGNORECASE)
    cost = " | ".join([c.strip() for c in cost_m]) if cost_m else "N/A"
    
    # Extract Days
    days = re.findall(r'(Day \d+:[^\n]+)', text, re.IGNORECASE)
    
    print(f"  Title: {title}")
    print(f"  Dates: {dates}")
    print(f"  Nights: {nights}")
    print(f"  Cost: {cost}")
    print(f"  Days found ({len(days)}): {days[:10]}")
