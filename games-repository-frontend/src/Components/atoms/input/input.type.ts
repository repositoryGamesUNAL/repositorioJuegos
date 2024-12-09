export interface InputProps {
    size?: "normal" | "small"|"fixed";
    label?: string;
    error?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "text" | "number"|"textarea" ;
    active?: boolean;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  