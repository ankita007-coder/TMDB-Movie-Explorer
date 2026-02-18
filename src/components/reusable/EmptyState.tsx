
interface EmptyStateProps{
  message:string;
}
const EmptyState = ({message}:EmptyStateProps) => {
  return (
    <div className="text-center py-10 text-textMuted">
      {message}
    </div>
  )
}

export default EmptyState
