export interface InputProps {
    className?: string;
    size?: "normal" | "small" | "medium";
    label?: string;
    error?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "text" | "number"|"textarea"|"scroll" ;
    active?: boolean;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }