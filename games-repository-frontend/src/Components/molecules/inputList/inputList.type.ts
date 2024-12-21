export interface InputListProps {
    className?: string;
    inputClassName?: string;
    id?: string;
    placeholder?: string;
    layout?: 'column' | 'row';
    onChange?: (inputs:string[]) => void ;
    value?: string[];
    title?: string;
    description?: string;
}
  