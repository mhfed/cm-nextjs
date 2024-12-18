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
    <div className='flex flex-col items-center justify-center min-h-[400px]'>
      <h2 className='text-xl font-semibold mb-4'>
        Đã có lỗi xảy ra khi tải sản phẩm
      </h2>
      <button
        onClick={reset}
        className='px-4 py-2 bg-primary text-white rounded-md'
      >
        Thử lại
      </button>
    </div>
  );
}
