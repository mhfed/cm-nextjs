// TODO: Cần fix lại
interface ImageSize {
  width: number
  height: number
}

const IMAGE_SIZES: Record<string, ImageSize> = {
  xxs: { width: 255, height: 380 },
  xs: { width: 300, height: 442 },
  s: { width: 450, height: 663 },
  m: { width: 672, height: 990 },
  l: { width: 713, height: 1050 },
  xl: { width: 1069, height: 1575 },
  '2xl': { width: 1426, height: 2100 },
  '80_80': { width: 80, height: 80 },
  '375_425': { width: 375, height: 420 },
  '550_623': { width: 550, height: 623 },
  '160_181': { width: 160, height: 181 },
  '270_306': { width: 270, height: 306 },
  '355_402': { width: 355, height: 402 },
  '585_663': { width: 585, height: 663 },
  '100_113': { width: 100, height: 113 },
  '50_67': { width: 50, height: 67 },
}

export function getImage(
  url: string,
  size?: keyof typeof IMAGE_SIZES | 'full',
  width?: number,
  height?: number,
  quality: number = 80
): string {
  if (typeof url !== 'string') return ''

  url = url.replace('image/', 'uploads/')
  const urlObj = new URL(url)
  const pathParts = urlObj.pathname.split('/')
  const filename = pathParts[pathParts.length - 1]

  const pathInfo = {
    extension: filename.split('.').pop() || '',
    dirname: pathParts.slice(0, -1).join('/'),
    filename: filename.split('.')[0],
  }

  if (!pathInfo.extension) return ''

  let finalWidth = width
  let finalHeight = height

  if (size && size !== 'full' && IMAGE_SIZES[size]) {
    finalWidth = IMAGE_SIZES[size].width
    finalHeight = IMAGE_SIZES[size].height
  }

  if (process.env.NEXT_PUBLIC_MEDIA_CLOUDFLARE === 'true') {
    const widthParam = finalWidth ? `width=${finalWidth},` : ''
    const heightParam = finalHeight ? `height=${finalHeight},` : ''

    return `${process.env.NEXT_PUBLIC_MEDIA_URL}/cdn-cgi/image/${widthParam}${heightParam}quality=${quality},format=auto${pathInfo.dirname}/${pathInfo.filename}.${pathInfo.extension}`
  } else {
    const sizeSuffix =
      size && size !== 'full' ? `_${finalWidth}x${finalHeight}` : ''

    return `${process.env.NEXT_PUBLIC_MEDIA_CDN_URL}${pathInfo.dirname}/${pathInfo.filename}${sizeSuffix}.${pathInfo.extension}`
  }
}
