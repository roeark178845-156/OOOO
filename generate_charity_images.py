import subprocess
import os

def create_svg_01():
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2c3038"/>
      <stop offset="40%" stop-color="#4a505e"/>
      <stop offset="100%" stop-color="#1f232a"/>
    </linearGradient>
    <linearGradient id="redBanner" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d92323"/>
      <stop offset="50%" stop-color="#e63939"/>
      <stop offset="100%" stop-color="#b81d1d"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2d06b"/>
      <stop offset="50%" stop-color="#d4a338"/>
      <stop offset="100%" stop-color="#9e741b"/>
    </linearGradient>
    <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d9b282"/>
      <stop offset="100%" stop-color="#aa7f4f"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="900" fill="url(#bg1)"/>

  <!-- Building Entry Architecture -->
  <rect x="100" y="100" width="1000" height="680" fill="#242830" rx="12"/>
  <rect x="180" y="160" width="840" height="620" fill="#181b20"/>
  <!-- Glass windows reflection -->
  <rect x="220" y="180" width="220" height="400" fill="#2e3542" opacity="0.6"/>
  <rect x="760" y="180" width="220" height="400" fill="#2e3542" opacity="0.6"/>

  <!-- Stacked Donation Boxes -->
  <g id="boxes">
    <!-- Row 1 -->
    <rect x="250" y="520" width="140" height="100" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="400" y="500" width="150" height="120" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="560" y="510" width="140" height="110" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="710" y="490" width="160" height="130" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <!-- Row 2 -->
    <rect x="280" y="430" width="130" height="90" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="420" y="410" width="140" height="90" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="570" y="420" width="130" height="90" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="710" y="400" width="140" height="90" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <!-- Row 3 -->
    <rect x="330" y="350" width="120" height="80" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="460" y="340" width="130" height="80" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
    <rect x="600" y="350" width="120" height="80" fill="url(#boxGrad)" stroke="#7c5830" stroke-width="2" rx="4"/>
  </g>

  <!-- Ground -->
  <rect x="100" y="620" width="1000" height="160" fill="#3a3f4a"/>

  <!-- Red Charity Banner -->
  <rect x="230" y="270" width="740" height="110" fill="url(#redBanner)" rx="8" shadow="true"/>
  <rect x="236" y="276" width="728" height="98" fill="none" stroke="#ffeb82" stroke-width="2" rx="6" opacity="0.8"/>
  <text x="600" y="345" fill="#fef08a" font-size="52" font-family="'Noto Sans CJK TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-weight="bold" text-anchor="middle">陳柏霖愛心物資捐贈</text>

  <!-- Gold Decorative Frame Overlay -->
  <path d="M 40 40 L 220 40 L 220 50 L 50 50 L 50 220 L 40 220 Z" fill="url(#gold)"/>
  <path d="M 1160 40 L 980 40 L 980 50 L 1150 50 L 1150 220 L 1160 220 Z" fill="url(#gold)"/>
  <path d="M 40 860 L 220 860 L 220 850 L 50 850 L 50 680 L 40 680 Z" fill="url(#gold)"/>
  <path d="M 1160 860 L 980 860 L 980 850 L 1150 850 L 1150 680 L 1160 680 Z" fill="url(#gold)"/>
  <path d="M 20 20 Q 1200 0 1200 120 L 1200 0 L 1080 0 C 1180 30 1180 80 1200 120 Z" fill="url(#gold)" opacity="0.8"/>
</svg>'''

def create_svg_02():
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ded8cc"/>
      <stop offset="100%" stop-color="#b0a898"/>
    </linearGradient>
    <linearGradient id="redBanner2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cc1b1b"/>
      <stop offset="50%" stop-color="#e02828"/>
      <stop offset="100%" stop-color="#a81313"/>
    </linearGradient>
    <linearGradient id="gold2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2d06b"/>
      <stop offset="50%" stop-color="#d4a338"/>
      <stop offset="100%" stop-color="#9e741b"/>
    </linearGradient>
    <linearGradient id="yellowVest" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  </defs>

  <!-- Background Room -->
  <rect width="1200" height="900" fill="url(#bg2)"/>
  <rect x="80" y="80" width="1040" height="740" fill="#ece6da" rx="12"/>
  
  <!-- Bookshelves / Background detail -->
  <rect x="120" y="240" width="180" height="280" fill="#8c6d4f" rx="4"/>
  <rect x="130" y="260" width="160" height="15" fill="#d9b282"/>
  <rect x="130" y="320" width="160" height="15" fill="#d9b282"/>
  <rect x="130" y="380" width="160" height="15" fill="#d9b282"/>

  <!-- Volunteers Group (Stylized silhouettes in yellow vests) -->
  <g id="volunteers">
    <!-- Row of volunteers -->
    <circle cx="280" cy="380" r="32" fill="#d4a373"/>
    <path d="M 230 460 Q 280 410 330 460 L 320 540 L 240 540 Z" fill="url(#yellowVest)"/>

    <circle cx="370" cy="370" r="32" fill="#e0a96d"/>
    <path d="M 320 450 Q 370 400 420 450 L 410 540 L 330 540 Z" fill="url(#yellowVest)"/>

    <circle cx="460" cy="360" r="34" fill="#c68b59"/>
    <path d="M 410 440 Q 460 390 510 440 L 500 540 L 420 540 Z" fill="url(#yellowVest)"/>

    <circle cx="550" cy="365" r="32" fill="#d4a373"/>
    <path d="M 500 445 Q 550 395 600 445 L 590 540 L 510 540 Z" fill="url(#yellowVest)"/>

    <circle cx="640" cy="370" r="32" fill="#e0a96d"/>
    <path d="M 590 450 Q 640 400 690 450 L 680 540 L 600 540 Z" fill="url(#yellowVest)"/>

    <circle cx="730" cy="360" r="34" fill="#d4a373"/>
    <path d="M 680 440 Q 730 390 780 440 L 770 540 L 690 540 Z" fill="url(#yellowVest)"/>

    <circle cx="820" cy="375" r="32" fill="#c68b59"/>
    <path d="M 770 455 Q 820 405 870 455 L 860 540 L 780 540 Z" fill="url(#yellowVest)"/>

    <circle cx="910" cy="380" r="30" fill="#e0a96d"/>
    <path d="M 865 460 Q 910 410 955 460 L 945 540 L 875 540 Z" fill="url(#yellowVest)"/>
  </g>

  <!-- Red Banner Held in Front -->
  <rect x="200" y="450" width="800" height="120" fill="url(#redBanner2)" rx="8"/>
  <rect x="206" y="456" width="788" height="108" fill="none" stroke="#ffeb82" stroke-width="2" rx="6"/>
  <text x="600" y="525" fill="#ffffff" font-size="44" font-family="'Noto Sans CJK TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-weight="bold" text-anchor="middle">2024 樂活愛心團隊 陳柏霖公益贊助</text>

  <!-- Boxes in Foreground -->
  <rect x="220" y="590" width="160" height="110" fill="#cbb292" stroke="#8c6d4f" stroke-width="2" rx="4"/>
  <rect x="390" y="580" width="180" height="120" fill="#cbb292" stroke="#8c6d4f" stroke-width="2" rx="4"/>
  <rect x="580" y="590" width="170" height="110" fill="#cbb292" stroke="#8c6d4f" stroke-width="2" rx="4"/>
  <rect x="760" y="580" width="160" height="120" fill="#cbb292" stroke="#8c6d4f" stroke-width="2" rx="4"/>

  <!-- Gold Ornamental Corners -->
  <path d="M 40 40 L 220 40 L 220 50 L 50 50 L 50 220 L 40 220 Z" fill="url(#gold2)"/>
  <path d="M 1160 40 L 980 40 L 980 50 L 1150 50 L 1150 220 L 1160 220 Z" fill="url(#gold2)"/>
  <path d="M 40 860 L 220 860 L 220 850 L 50 850 L 50 680 L 40 680 Z" fill="url(#gold2)"/>
  <path d="M 1160 860 L 980 860 L 980 850 L 1150 850 L 1150 680 L 1160 680 Z" fill="url(#gold2)"/>
</svg>'''

def create_svg_03():
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7dd3fc"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="redBanner3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="50%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="gold3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2d06b"/>
      <stop offset="50%" stop-color="#d4a338"/>
      <stop offset="100%" stop-color="#9e741b"/>
    </linearGradient>
  </defs>

  <!-- Outdoor Sky & Building -->
  <rect width="1200" height="400" fill="url(#sky)"/>
  <rect x="0" y="320" width="1200" height="580" fill="#e2e8f0"/>
  
  <!-- Community Center Building Entrance -->
  <rect x="150" y="160" width="900" height="300" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4"/>
  <rect x="250" y="240" width="700" height="220" fill="#334155" opacity="0.8"/>

  <!-- Volunteers Group Outdoor -->
  <g id="volunteers3">
    <circle cx="260" cy="420" r="30" fill="#d4a373"/>
    <rect x="235" y="450" width="50" height="100" fill="#2563eb" rx="6"/>

    <circle cx="340" cy="410" r="30" fill="#e0a96d"/>
    <rect x="315" y="440" width="50" height="110" fill="#475569" rx="6"/>

    <circle cx="420" cy="415" r="30" fill="#c68b59"/>
    <rect x="395" y="445" width="50" height="105" fill="#facc15" rx="6"/>

    <circle cx="500" cy="410" r="32" fill="#d4a373"/>
    <rect x="475" y="440" width="50" height="110" fill="#1e293b" rx="6"/>

    <circle cx="580" cy="415" r="30" fill="#e0a96d"/>
    <rect x="555" y="445" width="50" height="105" fill="#dc2626" rx="6"/>

    <circle cx="660" cy="410" r="30" fill="#d4a373"/>
    <rect x="635" y="440" width="50" height="110" fill="#facc15" rx="6"/>

    <circle cx="740" cy="420" r="30" fill="#c68b59"/>
    <rect x="715" y="450" width="50" height="100" fill="#0284c7" rx="6"/>

    <circle cx="820" cy="415" r="30" fill="#e0a96d"/>
    <rect x="795" y="445" width="50" height="105" fill="#16a34a" rx="6"/>

    <circle cx="900" cy="420" r="30" fill="#d4a373"/>
    <rect x="875" y="450" width="50" height="100" fill="#0891b2" rx="6"/>
  </g>

  <!-- Red Banner -->
  <rect x="220" y="480" width="760" height="120" fill="url(#redBanner3)" rx="8"/>
  <rect x="226" y="486" width="748" height="108" fill="none" stroke="#ffeb82" stroke-width="2" rx="6"/>
  <text x="600" y="555" fill="#ffffff" font-size="46" font-family="'Noto Sans CJK TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-weight="bold" text-anchor="middle">2025 陳柏霖 愛心團隊 捐贈</text>

  <!-- Donated Boxes Below Banner -->
  <rect x="350" y="610" width="140" height="90" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>
  <rect x="500" y="600" width="150" height="100" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>
  <rect x="660" y="610" width="140" height="90" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>

  <!-- Gold Frame -->
  <path d="M 40 40 L 220 40 L 220 50 L 50 50 L 50 220 L 40 220 Z" fill="url(#gold3)"/>
  <path d="M 1160 40 L 980 40 L 980 50 L 1150 50 L 1150 220 L 1160 220 Z" fill="url(#gold3)"/>
  <path d="M 40 860 L 220 860 L 220 850 L 50 850 L 50 680 L 40 680 Z" fill="url(#gold3)"/>
  <path d="M 1160 860 L 980 860 L 980 850 L 1150 850 L 1150 680 L 1160 680 Z" fill="url(#gold3)"/>
</svg>'''

def create_svg_04():
    return '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="redBanner4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b91c1c"/>
      <stop offset="50%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="gold4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2d06b"/>
      <stop offset="50%" stop-color="#d4a338"/>
      <stop offset="100%" stop-color="#9e741b"/>
    </linearGradient>
    <linearGradient id="vest4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#bg4)"/>
  <rect x="60" y="60" width="1080" height="780" fill="#f8fafc" rx="16"/>

  <!-- Large Volunteer Group in Yellow Vests -->
  <g id="volunteers4">
    <!-- Back Row -->
    <circle cx="200" cy="320" r="28" fill="#d4a373"/>
    <path d="M 160 380 Q 200 340 240 380 L 230 460 L 170 460 Z" fill="url(#vest4)"/>

    <circle cx="290" cy="310" r="28" fill="#e0a96d"/>
    <path d="M 250 370 Q 290 330 330 370 L 320 460 L 260 460 Z" fill="url(#vest4)"/>

    <circle cx="380" cy="305" r="28" fill="#c68b59"/>
    <path d="M 340 365 Q 380 325 420 365 L 410 460 L 350 460 Z" fill="url(#vest4)"/>

    <circle cx="470" cy="310" r="28" fill="#d4a373"/>
    <path d="M 430 370 Q 470 330 510 370 L 500 460 L 440 460 Z" fill="url(#vest4)"/>

    <circle cx="560" cy="300" r="28" fill="#e0a96d"/>
    <path d="M 520 360 Q 560 320 600 360 L 590 460 L 530 460 Z" fill="url(#vest4)"/>

    <circle cx="650" cy="305" r="28" fill="#d4a373"/>
    <path d="M 610 365 Q 650 325 690 365 L 680 460 L 620 460 Z" fill="url(#vest4)"/>

    <circle cx="740" cy="310" r="28" fill="#c68b59"/>
    <path d="M 700 370 Q 740 330 780 370 L 770 460 L 710 460 Z" fill="url(#vest4)"/>

    <circle cx="830" cy="315" r="28" fill="#e0a96d"/>
    <path d="M 790 375 Q 830 335 870 375 L 860 460 L 800 460 Z" fill="url(#vest4)"/>

    <circle cx="920" cy="320" r="28" fill="#d4a373"/>
    <path d="M 880 380 Q 920 340 960 380 L 950 460 L 890 460 Z" fill="url(#vest4)"/>

    <circle cx="1000" cy="325" r="28" fill="#c68b59"/>
    <path d="M 960 385 Q 1000 345 1040 385 L 1030 460 L 970 460 Z" fill="url(#vest4)"/>
  </g>

  <!-- Red Banner -->
  <rect x="250" y="470" width="700" height="110" fill="url(#redBanner4)" rx="8"/>
  <rect x="256" y="476" width="688" height="98" fill="none" stroke="#ffeb82" stroke-width="2" rx="6"/>
  <text x="600" y="540" fill="#ffffff" font-size="42" font-family="'Noto Sans CJK TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif" font-weight="bold" text-anchor="middle">2024 樂活愛心團隊 陳柏霖公益贊助</text>

  <!-- Kneeling Volunteers & Boxes in Front -->
  <g id="frontRow">
    <circle cx="240" cy="580" r="28" fill="#e0a96d"/>
    <path d="M 200 640 Q 240 600 280 640 L 270 720 L 210 720 Z" fill="url(#vest4)"/>

    <rect x="320" y="630" width="130" height="90" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>
    <rect x="470" y="620" width="140" height="100" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>
    <rect x="620" y="630" width="130" height="90" fill="#d9b282" stroke="#a17a4a" stroke-width="2" rx="4"/>

    <circle cx="820" cy="580" r="28" fill="#d4a373"/>
    <path d="M 780 640 Q 820 600 860 640 L 850 720 L 790 720 Z" fill="url(#vest4)"/>

    <circle cx="940" cy="585" r="28" fill="#c68b59"/>
    <path d="M 900 645 Q 940 605 980 645 L 970 720 L 910 720 Z" fill="url(#vest4)"/>
  </g>

  <!-- Gold Frame -->
  <path d="M 40 40 L 220 40 L 220 50 L 50 50 L 50 220 L 40 220 Z" fill="url(#gold4)"/>
  <path d="M 1160 40 L 980 40 L 980 50 L 1150 50 L 1150 220 L 1160 220 Z" fill="url(#gold4)"/>
  <path d="M 40 860 L 220 860 L 220 850 L 50 850 L 50 680 L 40 680 Z" fill="url(#gold4)"/>
  <path d="M 1160 860 L 980 860 L 980 850 L 1150 850 L 1150 680 L 1160 680 Z" fill="url(#gold4)"/>
</svg>'''

files = [
    ("charity-01.svg", "public/images/charity-01.jpg", create_svg_01()),
    ("charity-02.svg", "public/images/charity-02.jpg", create_svg_02()),
    ("charity-03.svg", "public/images/charity-03.jpg", create_svg_03()),
    ("charity-04.svg", "public/images/charity-04.jpg", create_svg_04()),
]

for svg_name, jpg_path, svg_content in files:
    with open(svg_name, "w", encoding="utf-8") as f:
        f.write(svg_content)
    subprocess.run(["ffmpeg", "-y", "-i", svg_name, jpg_path], check=True)
    os.remove(svg_name)
    print(f"Successfully generated {jpg_path}")

