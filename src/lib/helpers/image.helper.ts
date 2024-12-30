import chalk from 'chalk'

export class ImageHelper {
  private static readonly IMAGE_SIZES = {
    // Thumbnails
    xxs: { width: 255, height: 380 },
    xs: { width: 300, height: 442 },
    s: { width: 450, height: 663 },
    m: { width: 672, height: 990 },
    l: { width: 713, height: 1050 },
    xl: { width: 1069, height: 1575 },
    '2xl': { width: 1426, height: 2100 },
    full: { width: 1920, height: 1080 },

    // Specific sizes
    '80_80': { width: 80, height: 80 },
    '375_425': { width: 375, height: 420 },
    '550_623': { width: 550, height: 623 },
    '160_181': { width: 160, height: 181 },
    '270_306': { width: 270, height: 306 },
    '355_402': { width: 355, height: 402 },
    '585_663': { width: 585, height: 663 },
    '100_113': { width: 100, height: 113 },
    '50_67': { width: 50, height: 67 },
  } as const

  private static getDimensions(
    size?: keyof typeof ImageHelper.IMAGE_SIZES | 'full',
    width?: number,
    height?: number
  ) {
    if (!size || size === 'full') {
      return { width, height }
    }

    const preset = this.IMAGE_SIZES[size]
    return preset ?? { width, height }
  }

  private static isCloudflare(): boolean {
    return process.env.NEXT_PUBLIC_MEDIA_CLOUDFLARE === 'true'
  }

  private static getCloudflareUrl(
    dirname: string,
    filename: string,
    extension: string,
    dimensions: { width?: number; height?: number },
    quality: number
  ): string {
    const { width, height } = dimensions
    const widthParam = width ? `width=${width},` : ''
    const heightParam = height ? `height=${height},` : ''

    return `${process.env.NEXT_PUBLIC_MEDIA_URL}/cdn-cgi/image/${widthParam}${heightParam}quality=${quality},format=auto${dirname}/${filename}.${extension}`
  }

  private static getCdnUrl(
    dirname: string,
    filename: string,
    extension: string,
    dimensions: { width?: number; height?: number }
  ): string {
    const { width, height } = dimensions
    const sizeSuffix = width && height ? `_${width}x${height}` : ''

    return `${process.env.NEXT_PUBLIC_MEDIA_CDN_URL}${dirname}/${filename}${sizeSuffix}.${extension}`
  }

  public static getImageUrl(
    url: string,
    size?: keyof typeof ImageHelper.IMAGE_SIZES | 'full',
    width?: number,
    height?: number,
    quality: number = 80
  ): string {
    if (!url || typeof url !== 'string') return ''

    let pathname: string
    try {
      // Thêm base URL nếu url là relative path
      const fullUrl = url.startsWith('http')
        ? url
        : `${process.env.NEXT_PUBLIC_MEDIA_URL}${url}`
      pathname = new URL(fullUrl.replace('image/', 'uploads/')).pathname
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(
        chalk.red('🚀 ~ ImageHelper ~ getImageUrl ~ error:'),
        error,
        url
      )
      return ''
    }

    const pathParts = pathname.split('/')
    const [filename, extension] = pathParts.pop()?.split('.') ?? []

    if (!extension) return ''

    const dirname = pathParts.join('/')
    const dimensions = this.getDimensions(size, width, height)

    if (this.isCloudflare()) {
      return this.getCloudflareUrl(
        dirname,
        filename,
        extension,
        dimensions,
        quality
      )
    }

    return this.getCdnUrl(dirname, filename, extension, dimensions)
  }
}
