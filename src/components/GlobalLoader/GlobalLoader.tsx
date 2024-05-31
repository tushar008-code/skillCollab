import { Skeleton } from "@/components/ui/skeleton";

function GlobalLoader() {
  return (
    <div className="loader">
      <Skeleton className="w-full h-[80px] rounded" />
      <div className="body">
        <Skeleton className="rounded" />
        <Skeleton className="rounded" />
        <Skeleton className="rounded" />
      </div>
      <Skeleton className="w-full h-[80px] rounded" />
    </div>
  );
}

export default GlobalLoader;
