export interface InputProps {
    size?: "normal" | "small";
    label?: string;
    error?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "text" | "number"|"text area" ;
    active?: boolean;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  