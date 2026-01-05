export default function EmailButton() {
  return (
    <div className="social-btn email">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">@</div>
            <div className="details">
              <div className="name">Email</div>
              <div className="about">info@bartluttels.nl</div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="mailto:info@bartluttels.nl"
        className="icon"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>
        </div>
        <span className="text">Email</span>
      </a>
    </div>
  )
}
