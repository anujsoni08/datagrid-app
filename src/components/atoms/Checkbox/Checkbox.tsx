import { useRef, useEffect } from "react";

import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        ref={checkboxRef}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        aria-checked={indeterminate ? "mixed" : checked}
        aria-label={label || "Select row"}
      />
      {label && <span className="visually-hidden">{label}</span>}
    </div>
  );
};

export default Checkbox;
