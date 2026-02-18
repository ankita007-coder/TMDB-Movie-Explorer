
interface SkeletonProps{
  className?:string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-surface rounded-md ${className}`}>
      
    </div>
  )
}

export default Skeleton
