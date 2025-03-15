import styles from "./Button.module.css";

export interface ButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
