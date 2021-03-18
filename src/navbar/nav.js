import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React, { Component } from "react"

import './nav.scss'
import './darkmode.scss'


class Nav extends Component {
  render() {
    return (
      <header>
        <div className="inner-header">
          <div className="logo">
            <a href="#banner">DEBORAH CALDEIRA</a>
          </div>
          <div className="navigation">
            <nav>
              <a href="#about">About</a>
              <a href="#stack">Stack</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div className="dark-button">
                    <input
                      type="checkbox"
                      id="toggle"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <label for="toggle"></label>
                  </div>
                )}
              </ThemeToggler>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav