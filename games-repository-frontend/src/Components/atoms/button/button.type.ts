 export type ButtonProps = {
    size?: 'medium' | 'small';
    variant?: 'main' | 'secondary' | 'link';
    status?: 'default' | 'hover' | 'click' | 'disabled';
    children: React.ReactNode;
    onClick?: () => void;
  };