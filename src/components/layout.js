import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        hosted on{" "}
        <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages">
          Github Pages
        </a>
      </footer>
    </div>
  )
}

export default Layout
