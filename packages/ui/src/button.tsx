import "../styles/ui.css";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className="bg-purple-500 p-2 rounded">
      {children}
    </button>
  );
}

Button.displayName = "Button";
