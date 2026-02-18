
interface ErrorStateProps{
  message?:string;
}
const ErrorState = ({message}:ErrorStateProps) => {
  return (
    <div className="text-center py-10 text-red-500">
      {message||"An error occurred while fetching data. Please try again later."}
    </div>
  )
}

export default ErrorState
