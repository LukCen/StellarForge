import { useState } from "react"
import Icons from "./Icons"

const { ChevronRight } = Icons


export default function Nav() {
  const [hover, setHover] = useState(false)
  return (
    <nav className="min-h-[50px] bg-grey-superlight flex w-full items-center">
      <a href="/" className="logo">
        <img src="./page_logo_desktop.webp" alt="Stellar Forge logo" />
      </a>
      <ul className="menu_list flex gap-4 px-4">
        <li onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="flex flex-col relative justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-500 min-h-[30px] items-center">
          <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href="#">Clothes <ChevronRight /></a>

          <ul className="menu_list__submenu flex absolute bottom-0 translate-y-[100%] min-h-fit flex-col h-full w-full px-4 bg-grey-light">
            <li className="flex relative"><a href="">Male fashion</a></li>
            <li className="flex relative"><a href="">Female fashion</a></li>
          </ul>
        </li>
        <li className="flex justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-500 min-h-[30px] items-center">
          <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href="#">Food <ChevronRight /></a>
        </li>
        <li className="flex justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-500 min-h-[30px] items-center">
          <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href="#">Electronics <ChevronRight /></a>
        </li>
      </ul>
    </nav>
  )
}

