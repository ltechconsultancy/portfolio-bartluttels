export default function LinkedInButton() {
  return (
    <div className="linkedin-tooltip-container">
      <div className="linkedin-tooltip">
        <div className="linkedin-profile">
          <div className="linkedin-user">
            <div className="linkedin-img">BL</div>
            <div className="linkedin-details">
              <div className="linkedin-name">Bart Luttels</div>
              <div className="linkedin-about">IT Consultant & Developer</div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://linkedin.com/in/bart-luttels"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <div className="linkedin-layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="linkedin-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </span>
        </div>
        <span className="linkedin-text">LinkedIn</span>
      </a>
    </div>
  )
}
