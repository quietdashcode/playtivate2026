function ProcessFlowDiagram() {
  const steps = [
    {
      cx: 120, n: '01', title: 'Discover',
      d1: 'Define audience, goals,', d2: 'and behaviors to change.',
    },
    {
      cx: 360, n: '02', title: 'Design',
      d1: 'Shape the learning flow,', d2: 'interactions, and criteria.',
    },
    {
      cx: 600, n: '03', title: 'Build',
      d1: 'Produce visuals, content,', d2: 'and the full experience.',
    },
    {
      cx: 840, n: '04', title: 'Validate',
      d1: 'Test with users, refine', d2: 'for quality and clarity.',
    },
    {
      cx: 1080, n: '05', title: 'Launch',
      d1: 'Deploy, support, and evolve', d2: 'the product post-release.',
    },
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 245"
      role="img"
      aria-label="Playtivate five-step process: Discover, Design, Build, Validate, Launch"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <linearGradient id="hww-cg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d2a6e" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <filter id="hww-sh" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="9" floodColor="rgba(79,70,229,0.24)" />
        </filter>
      </defs>

      {/* Connector lines with arrowheads */}
      {[
        { x1: 177, x2: 292, tx: 304 },
        { x1: 417, x2: 532, tx: 544 },
        { x1: 657, x2: 772, tx: 784 },
        { x1: 897, x2: 1012, tx: 1024 },
      ].map(({ x1, x2, tx }) => (
        <g key={x1}>
          <line x1={x1} y1="90" x2={x2} y2="90" stroke="#C7D2FE" strokeWidth="2" strokeDasharray="5,3" />
          <polygon points={`${x2},85.5 ${tx},90 ${x2},94.5`} fill="#A5B4FC" />
        </g>
      ))}

      {/* Step 1: Discover */}
      <g transform="translate(120,90)">
        <circle r="52" fill="url(#hww-cg)" filter="url(#hww-sh)" />
        <circle r="52" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        <circle cx="-2" cy="-4" r="12" stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" fill="none" />
        <line x1="6.5" y1="5.5" x2="13" y2="12" stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="38" cy="-44" r="15" fill="#0D9488" />
        <text x="38" y="-40" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">01</text>
        <text y="80" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="15.5" fontWeight="700" fill="#0F172A">Discover</text>
        <text y="100" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">Define audience, goals,</text>
        <text y="116" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">and behaviors to change.</text>
      </g>

      {/* Step 2: Design */}
      <g transform="translate(360,90)">
        <circle r="52" fill="url(#hww-cg)" filter="url(#hww-sh)" />
        <circle r="52" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        <rect x="-14" y="-11" width="28" height="6" rx="2.5" fill="rgba(255,255,255,0.9)" />
        <rect x="-14" y="-1" width="28" height="6" rx="2.5" fill="rgba(255,255,255,0.72)" />
        <rect x="-14" y="9" width="28" height="6" rx="2.5" fill="rgba(255,255,255,0.52)" />
        <circle cx="38" cy="-44" r="15" fill="#0D9488" />
        <text x="38" y="-40" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">02</text>
        <text y="80" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="15.5" fontWeight="700" fill="#0F172A">Design</text>
        <text y="100" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">Shape the learning flow,</text>
        <text y="116" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">interactions, and criteria.</text>
      </g>

      {/* Step 3: Build */}
      <g transform="translate(600,90)">
        <circle r="52" fill="url(#hww-cg)" filter="url(#hww-sh)" />
        <circle r="52" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        <polyline points="-14,-10 -8,0 -14,10" stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,-10 8,0 14,10" stroke="rgba(255,255,255,0.88)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="-4" y1="11" x2="4" y2="-11" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="-44" r="15" fill="#0D9488" />
        <text x="38" y="-40" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">03</text>
        <text y="80" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="15.5" fontWeight="700" fill="#0F172A">Build</text>
        <text y="100" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">Produce visuals, content,</text>
        <text y="116" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">and the full experience.</text>
      </g>

      {/* Step 4: Validate */}
      <g transform="translate(840,90)">
        <circle r="52" fill="url(#hww-cg)" filter="url(#hww-sh)" />
        <circle r="52" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        <circle r="16" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" />
        <polyline points="-6,0 -1,7 9,-7" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="-44" r="15" fill="#0D9488" />
        <text x="38" y="-40" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">04</text>
        <text y="80" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="15.5" fontWeight="700" fill="#0F172A">Validate</text>
        <text y="100" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">Test with users, refine</text>
        <text y="116" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">for quality and clarity.</text>
      </g>

      {/* Step 5: Launch */}
      <g transform="translate(1080,90)">
        <circle r="52" fill="url(#hww-cg)" filter="url(#hww-sh)" />
        <circle r="52" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        <polygon points="3,-13 -5,2 3,2 -3,13 11,-2 3,-2" fill="rgba(255,255,255,0.9)" />
        <circle cx="38" cy="-44" r="15" fill="#0D9488" />
        <text x="38" y="-40" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">05</text>
        <text y="80" textAnchor="middle" fontFamily="Space Grotesk,system-ui,sans-serif" fontSize="15.5" fontWeight="700" fill="#0F172A">Launch</text>
        <text y="100" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">Deploy, support, and evolve</text>
        <text y="116" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#6B7280">the product post-release.</text>
      </g>
    </svg>
  );
}

export default ProcessFlowDiagram;
