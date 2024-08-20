import { useState } from "react"
import Icons from "./Icons"

const { ChevronRight } = Icons

export default function NavItem({ title, link, children = null }) {
  const [hover, setHover] = useState(false)
  return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="flex relative justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-500 min-h-[30px] items-center">
      <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={link}>{title}<ChevronRight /></a>
      {hover && children && (
        <ul className="menu_list__submenu flex absolute bottom-0 translate-y-[100%] min-h-fit flex-col h-full w-full px-4 bg-grey-light">
          {children}
        </ul>
      )}
    </li>
  )
}
