import Image from 'next/image';

export function SearchBar() {
  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Tìm kiếm sản phẩm...'
        className='pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <Image
        src='/images/search-icon.png'
        alt='Search'
        width={20}
        height={20}
        className='absolute left-3 top-1/2 transform -translate-y-1/2'
      />
    </div>
  );
}
