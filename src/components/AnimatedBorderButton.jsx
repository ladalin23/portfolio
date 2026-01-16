
import '../assets/css/component.css';

export const AnimatedBorderButton = ({ children, size = "md", }) => {
  return (
    <button className="btn-animated position-relative overflow-visible rounded-pill px-4 py-3 text-lg">
      <svg
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{overflow: 'visible'}}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="2"
          stroke-dasharray="400 550"
          stroke-dashoffset="400"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="animated-border-path"
        />
      </svg>

      <span className="position-relative z-10 d-flex justify-content-center align-items-center gap-2">
        {children}
      </span>
    </button>

  );
};
