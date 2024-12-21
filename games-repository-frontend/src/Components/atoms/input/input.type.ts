export interface InputProps {
  size?: "normal" | "large";
  label?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "textarea" | "scroll";
  active?: boolean;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string | string[] | number; // Ahora permite números
  onBlur?: () => void;
  name?: string;
  }
  