import React from "react";
import { Link } from "gatsby";
import { Cross as Hamburger } from 'hamburger-react'

const MobileMenu = ({links}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div  className="flex-none px-2">
      <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} label="Hamburger Menu" />
      {isMobileMenuOpen && (
        <div className="absolute top-15 right-0 w-full bg-dark">
          <ul className="flex flex-col items-center justify-center w-full text-3xl">
            {links.map((link) => (
              <li key={link.name} className="mb-4">
                <Link to={link.url} activeClassName="font-bold" aria-label={`${link.name} `}>
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
