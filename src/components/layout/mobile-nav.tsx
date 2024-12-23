'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navConfig } from '@/components/layout/nav-config';
import { Button } from '@/components/ui';

// Sử dụng lại categories từ navigation-menu.tsx

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='lg:hidden text-white'>
          <Menu className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} side='left' className='w-full p-0'>
        <div className='flex items-center justify-between p-4 border-b'>
          <Link
            href='/'
            className='flex items-center'
            onClick={() => setOpen(false)}
          >
            <span className='font-bold text-xl'>COOLMATE</span>
          </Link>
          <Button onClick={() => setOpen(false)}>
            <X className='w-6 h-6' />
          </Button>
        </div>

        <ScrollArea className='h-[calc(100vh-4rem)]'>
          <div className='space-y-2 p-4'>
            <Link
              href='/outlet'
              onClick={() => setOpen(false)}
              className='flex items-center justify-between p-4 bg-orange-500 text-white rounded-lg'
            >
              <span className='font-medium'>OUTLET</span>
              <span className='text-sm'>ƯU ĐÃI ĐẾN 50%</span>
              <ChevronRight className='w-5 h-5' />
            </Link>

            {Object.entries(navConfig).map(([category]) => (
              <Link
                key={category}
                href={`/${category.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setOpen(false)}
                className='flex items-center justify-between p-4 bg-gray-100 rounded-lg'
              >
                <span>{category}</span>
                <ChevronRight className='w-5 h-5' />
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
