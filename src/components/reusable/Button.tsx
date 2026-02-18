interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 rounded-md bg-accent text-white hover:opacity-90 transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
