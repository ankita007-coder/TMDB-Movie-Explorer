interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className = "" }: GridProps) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
