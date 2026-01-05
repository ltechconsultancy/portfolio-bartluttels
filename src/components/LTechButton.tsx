export default function LTechButton() {
  return (
    <div className="social-btn ltech">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">LT</div>
            <div className="details">
              <div className="name">LTech Consultancy</div>
              <div className="about">IT Solutions & Consulting</div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://ltechconsultancy.nl"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
        </div>
        <span className="text">LTech</span>
      </a>
    </div>
  )
}
