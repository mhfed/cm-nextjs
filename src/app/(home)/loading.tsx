import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='space-y-4'>
          <Skeleton className='aspect-square rounded-lg' />
          <Skeleton className='h-4 w-2/3' />
          <Skeleton className='h-4 w-1/2' />
        </div>
      ))}
    </div>
  );
}
