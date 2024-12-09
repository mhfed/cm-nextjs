'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { SearchIcon, X } from 'lucide-react';
import { useRef, useState } from 'react';

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const popularCategories = [
    'Tập gym',
    'ECC',
    'Áo Basic',
    'CoolFast',
    'Jeans',
    'Áo khoác',
    'Excool',
    'Tất',
    'Quần',
    'Polo',
    'Áo thun',
  ];

  const recentProducts = [
    {
      name: 'Áo phao dày Ultrawarm Puffer',
      image: '/path-to-image-1.jpg',
    },
    // ... thêm các sản phẩm khác
  ];

  const handleCategoryClick = (category: string) => {
    setSearchValue(category);
    // Focus input after setting value
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Check if click is in the overlay area (100px on either side)
    const clickX = e.clientX;
    const windowWidth = window.innerWidth;
    if (clickX < 100 || clickX > windowWidth - 100) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className='relative cursor-pointer' onClick={() => setOpen(true)}>
        <Input
          ref={inputRef}
          type='search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Tìm kiếm sản phẩm...'
          className='pl-10 pr-4 py-2 rounded-full bg-gray-100 cursor-pointer'
          readOnly
        />
        <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className='p-0 gap-0 max-w-full w-screen min-h-screen bg-transparent gap-2'
        >
          <div className='flex items-center px-4 py-3 bg-white'>
            <div className='relative flex-1'>
              <Input
                ref={inputRef}
                type='search'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Tìm kiếm sản phẩm...'
                className='pl-10 h-12 bg-gray-100 rounded-full shadow-none focus-visible:ring-0'
                autoFocus
              />
              <SearchIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
            </div>
            <button onClick={() => setOpen(false)} className='ml-4'>
              <X className='w-6 h-6 text-gray-500' />
            </button>
          </div>

          {/* Content with Side Margins */}
          <div className='h-full border-none' onClick={handleOverlayClick}>
            <div className='max-w-[calc(100%-200px)] mx-auto bg-white p-6 rounded-lg overflow-hidden'>
              {/* Categories */}
              <div className='mb-8'>
                <h3 className='text-base font-medium mb-4'>
                  Từ khóa nổi bật ngày hôm nay
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {popularCategories.map((category) => (
                    <button
                      key={category}
                      className='px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-50'
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Products */}
              <div>
                <h3 className='text-base font-medium mb-4'>
                  Sản phẩm đã xem gần đây
                </h3>
                <div className='grid grid-cols-4 gap-6'>
                  {recentProducts.map((product, index) => (
                    <div key={index} className='space-y-2'>
                      <div className='aspect-square bg-gray-50 rounded-lg overflow-hidden'>
                        <img
                          src={product.image}
                          alt={product.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <p className='text-sm line-clamp-2'>{product.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
