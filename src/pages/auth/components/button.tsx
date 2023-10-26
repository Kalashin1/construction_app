type Props = {
  action?: (...args: unknown[]) => void;
  label: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  extraClass?: string;
}
const Button = ({
  action,
  label,
  extraClass,
  disabled=false,
}: Props) => {
  return (
    <button
      onClick={action}
      className={`${extraClass} rounded-md mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90`}
      disabled={disabled}
    >
      {disabled ? '...loading': label}
    </button>
  )
}

export default Button;