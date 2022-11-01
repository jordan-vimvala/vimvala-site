import React from "react";
import { Link } from "gatsby";
import { Cross as Hamburger } from 'hamburger-react'

const MobileMenu = ({links}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div  className="flex-none px-2">
      <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} />
      {isMobileMenuOpen && (
        <div className="absolute top-15 right-0 w-full bg-dark">
          <ul className="flex flex-col items-center justify-center w-full">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.url} activeClassName="font-bold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileMenu;
