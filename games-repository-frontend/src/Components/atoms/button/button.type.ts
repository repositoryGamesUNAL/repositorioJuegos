export type ButtonProps = {
  size?: 'medium' | 'small';
  variant?: 'main' | 'secondary' | 'link' |'icon';
  status?: 'default' | 'hover' | 'click' | 'disabled';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; 
  type?: "button" | "submit" | "reset"; 
};
