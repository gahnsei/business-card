import { useNavigate } from "react-router";
const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="info-container">
      <img
        className="info-img"
        src="https://gahnsei.github.io/kob9325.jpg"
        alt="Sei Gahn"
      />
      <h1 className="info-name">Sei Gahn</h1>
      <span className="info-job-title">Full Stack Developer</span>
      <a
        href="https://gahnsei.github.io"
        className="info-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        gahnsei.github.io
      </a>
      <div>
        <button className="info-button">
          <i class="fa-regular fa-envelope"></i>
          Email
        </button>
        <a
          href="https://linkedin.com/in/sei-gahn"
          target="_blank"
          rel="noreferrer"
        >
          <button className="info-button blue-button">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
