import { useTheme } from 'next-themes'

class ColorUtils {
  static aliases = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    loyalblue: '#4169e1',
  }

  static getColorValue(color) {
    if (color in ColorUtils.aliases) {
      return ColorUtils.aliases[color]
    } else {
      return color
    }
  }

  static hexToRgb(hex) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
  }

  static getContrastColor(color, theme) {
    color = ColorUtils.getColorValue(color)

    let r, g, b
    if (color.startsWith('rgb')) {
      ;[r, g, b] = color
        .substring(color.indexOf('(') + 1, color.indexOf(')'))
        .split(',')
        .map(Number)
    } else {
      ;[r, g, b] = ColorUtils.hexToRgb(color)
    }

    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
    const contrast = (1 + lum) / (1 + 1)

    if (theme === 'dark') {
      return contrast > 4.5 ? color : '#ffffff'
    } else {
      return contrast > 4.5 ? color : '#000000'
    }
  }
}

const FontSizeStrongTitle = (props) => {
  const defaultSize = '1.5em'

  const { theme, setTheme, resolvedTheme } = useTheme()
  const color = props.fontColor ? props.fontColor : 'black'
  const fontColor = ColorUtils.getContrastColor(color, theme)

  console.log('FontSizeStrongTitle', color, fontColor)

  return (
    <>
      <span className={'title_style'}>{props.children}</span>
      <style jsx>{`
        .title_style {
          font-size: ${props.fontSize ? props.fontSize : defaultSize};
          font-weight: 600;
          display: ${props.isLineFeed ? 'block' : 'inline'};
          //color: ${props.fontColor};
        }
      `}</style>
    </>
  )
}
// export async function getSi() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await fetch('https://.../posts')
//   // const posts = await res.json()
//   const { theme, setTheme, resolvedTheme } = useTheme()
//   const color = props.fontColor ? props.fontColor : 'black'
//   const fontColor = ColorUtils.getContrastColor(color, theme)
//
//   console.log('FontSizeStrongTitle', color, fontColor)
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default FontSizeStrongTitle
