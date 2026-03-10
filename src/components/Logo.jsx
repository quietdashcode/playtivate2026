function Logo({ dark = false }) {
  return (
    <span className={`logo-wordmark${dark ? ' logo-wordmark--dark' : ''}`}>
      <svg
        className="logo-icon"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded square backdrop */}
        <rect
          width="40"
          height="40"
          rx="10"
          fill={dark ? 'rgba(255,255,255,0.14)' : '#4F46E5'}
        />
        {/* Stylised play-forward mark: two staggered triangles */}
        <polygon points="10,12 21,20 10,28" fill="white" opacity="0.7" />
        <polygon points="19,12 30,20 19,28" fill="white" />
      </svg>
      <span className="logo-text">
        <span className="logo-play">PLAY</span>TIVATE
      </span>
    </span>
  );
}

export default Logo;
