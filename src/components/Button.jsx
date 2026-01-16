export const Button = ({
  className = "",
  size = "md",
  children,
  ...props
}) => { 
  return (
    <button className={`btn-custom btn-${size}`}>
      <span className="d-flex align-items-center justify-content-center gap-2 position-relative">
        {children}
      </span>
    </button>
  );
};
