import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const Wordpress2016Custom = {
  ...Wordpress2016,
  headerWeight: 300,
  bodyWeight: 200,
  boldWeight: 500,
  googleFonts: {
    name: "Muli",
    styles: ["200", "200i", "300", "300i", "500", "500i"],
  },
  headerFontFamily: ["Muli", "Georgia", "serif"],
  bodyFontFamily: ["Muli", "Georgia", "serif"],
  overrideThemeStyles: () => {
    return {
      "h1": {
        fontFamily: ["Muli", "sans-serif"].join(","),
        fontWeight: 500,
      },
      "a.gatsby-resp-image-link": {
        boxShadow: `none`,
      },
      "ul": {
          paddingLeft: '1.75rem',
          listStyle: 'square',
      },
      "ul li": {
          margin: 0,
      }
    }
  }
}

delete Wordpress2016Custom.googleFonts

const typography = new Typography(Wordpress2016Custom)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
