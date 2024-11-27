"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = {
  "SẢN PHẨM": {
    sections: [
      {
        title: "THEO SẢN PHẨM",
        items: [
          { title: "Tất cả", href: "/products" },
          { title: "Sản phẩm mới", href: "/products/new" },
          { title: "Bán chạy nhất", href: "/products/best-sellers" },
          { title: "Combo/Set đồ", href: "/products/combo" },
          { title: "Đồ thu đông", href: "/products/winter" },
          { title: "Exdry", href: "/products/exdry" },
        ]
      },
      {
        title: "ÁO NAM",
        items: [
          { title: "Tất cả Áo Nam", href: "/ao-nam" },
          { title: "Áo thun", href: "/ao-nam/thun" },
          { title: "Áo sơ mi", href: "/ao-nam/so-mi" },
          { title: "Áo polo", href: "/ao-nam/polo" },
          { title: "Áo khoác", href: "/ao-nam/khoac" },
          { title: "Áo Tank top", href: "/ao-nam/tank-top" },
        ]
      },
      {
        title: "QUẦN NAM",
        items: [
          { title: "Tất cả Quần Nam", href: "/quan-nam" },
          { title: "Quần shorts", href: "/quan-nam/shorts" },
          { title: "Quần jeans", href: "/quan-nam/jeans" },
          { title: "Quần dài", href: "/quan-nam/dai" },
          { title: "Quần thể thao", href: "/quan-nam/the-thao" },
        ]
      },
      {
        title: "PHỤ KIỆN NAM",
        items: [
          { title: "Tất cả phụ kiện", href: "/phu-kien" },
          { title: "Tất/Vớ", href: "/phu-kien/tat" },
          { title: "Mũ/Nón", href: "/phu-kien/mu-non" },
          { title: "Túi", href: "/phu-kien/tui" },
          { title: "Ví/Thắt lưng", href: "/phu-kien/vi-that-lung" },
        ]
      }
    ],
    featured: [
      {
        title: "Quần Dài Nam Kaki Excool",
        href: "/products/quan-dai-kaki-excool",
        imageSrc: "/images/quan-dai-kaki.jpg"
      },
      {
        title: "Quần Jogger Nam UT",
        href: "/products/quan-jogger-ut",
        imageSrc: "/images/quan-jogger.jpg"
      }
    ]
  },
  // Thêm các menu khác tương tự...
}

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/outlet" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-red-600 font-medium")}>
              OUTLET -50%
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {Object.entries(categories).map(([category, content]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger className="text-white hover:text-gray-300">
              {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[800px] grid-cols-4 gap-3 p-4 bg-white">
                {content.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href} className="text-sm hover:text-blue-600">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-4 mt-4 grid grid-cols-2 gap-4">
                  {content.featured.map((item) => (
                    <Link 
                      key={item.title}
                      href={item.href}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <Image
                      width={100}
                      height={100}
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-white font-medium">
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
        <NavigationMenuItem>
          <Link href="/do-lot" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ĐỒ LÓT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Thêm các menu item khác tương tự */}
      </NavigationMenuList>
    </NavigationMenu>
  )
} 