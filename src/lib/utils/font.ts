import localFont from 'next/font/local'

export const pangea = localFont({
  src: [
    {
      path: '../../assets/fonts/Pangea-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pangea-SemiBold.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-pangea',
  display: 'swap',
})

export const criteriaCF = localFont({
  src: [
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-ExtraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-DemiBold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Bold.otf',
      // Tối đa là font 600 thôi, nên tạm thời bỏ font 700 dùng font 600
      // path: '../../assets/fonts/OTF/CriteriaCF-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/OTF/CriteriaCF-Super.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-criteria',
  display: 'swap',
})
