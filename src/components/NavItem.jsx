
import Icons from "./Icons"
import { useState } from "react"

const { ChevronRight } = Icons

export default function NavItem({ title, link }) {

  return (
    <li className="flex relative justify-between bg-grey-light rounded-md hover:bg-grey-dark hover:text-white transition-all duration-250 min-h-[30px] items-center">
      <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={link}>{title}<ChevronRight /></a>
    </li>
  )
}


export function NavItemSublist({ title, link, subitems }) {

  const [isHovered, setIsHovered] = useState(false)
  return (

    <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex relative justify-between bg-grey-light rounded-md hover:bg-grey-dark hover:text-white transition-all duration-250 min-h-[30px] items-center ">
      <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={link}>{title}<ChevronRight /></a>

      {isHovered &&
        (<ul className="sublist flex flex-col absolute translate-y-[100%] bottom-0">
          {subitems.map((subitem, index) => (
            <li className="flex relative justify-between bg-grey-light rounded-md hover:bg-grey-dark transition-all duration-250 min-h-[30px] items-center" key={index} onMouseEnter={(event) => event.stopPropagation()}>
              <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={subitem.link}>{subitem.title}<ChevronRight /></a>
            </li>
          ))}
        </ul>)
      }
    </li>

  )
}
