import Skeleton from "./Skeleton";

interface HorizontalSkeletonProps {
  count?: number;
}

const HorizontalSkeleton = ({ count = 3 }: HorizontalSkeletonProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className="min-w-[500px] h-[225px] rounded-lg"
        />
      ))}
    </div>
  );
};

export default HorizontalSkeleton;
