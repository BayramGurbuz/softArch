import "./Button.css";

export function Button({ children, ...props }) {
  return (
    <button className="auth-button" {...props}>
      {children}
    </button>
  );
}