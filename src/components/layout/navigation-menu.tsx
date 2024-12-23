import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { navConfig } from '@/components/layout/nav-config';
import Image from 'next/image';
import Link from 'next/link';

export function MainNav() {
  return (
    <div className='flex items-center'>
      <div className='hidden lg:block'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/outlet' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'text-red-600 font-medium'
                  )}
                >
                  OUTLET -50%
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {Object.entries(navConfig).map(([category, content]) => (
              <NavigationMenuItem key={category} className='h-20'>
                <NavigationMenuTrigger className='text-white hover:text-gray-300 h-full'>
                  {category}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='mt-0'>
                  <div className='grid w-[800px] grid-cols-4 gap-3 p-4 bg-white'>
                    {content.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className='font-medium text-sm text-gray-500 mb-2'>
                          {section.title}
                        </h4>
                        <ul className='space-y-2'>
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className='text-sm hover:text-blue-600'
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className='col-span-4 mt-4 grid grid-cols-2 gap-4'>
                      {content.featured.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className='relative overflow-hidden rounded-lg'
                        >
                          <Image
                            width={100}
                            height={100}
                            src={item.imageSrc}
                            alt={item.title}
                            className='w-full h-48 object-cover'
                          />
                          <span className='absolute bottom-2 left-2 text-white font-medium'>
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {/* Các menu item khác */}
            {/* Thêm các menu item khác tương tự */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
