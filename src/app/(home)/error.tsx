'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log('🚀 ~ error:', error);
  return (
    <div className='flex min-h-[400px] flex-col items-center justify-center'>
      <h2 className='mb-4 text-xl font-semibold'>
        Đã có lỗi xảy ra khi tải sản phẩm
      </h2>
      <button
        onClick={reset}
        className='rounded-md bg-primary px-4 py-2 text-white'
      >
        Thử lại
      </button>
    </div>
  );
}
