
import Icons from "./Icons"

const { ChevronRight } = Icons

export default function NavItem({ title, link }) {

  return (
    <li className="flex relative justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-250 min-h-[30px] items-center">
      <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={link}>{title}<ChevronRight /></a>
    </li>
  )
}


export function NavItemSublist({ title, link, subitems }) {
  return (
    <li className="flex relative gap-2 justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-250 min-h-[30px] items-center">
      <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={link}>{title}</a>
      <ul className="sublist flex flex-col gap-2 absolute translate-y-[100%] bottom-[-8px]">
        {subitems.map((subitem, index) => (
          <li className="flex relative justify-between bg-grey-light rounded-3xl hover:rounded-none transition-all duration-250 min-h-[30px] items-center" key={index}>
            <a className="flex h-full w-full py-1 px-4 items-center transition-transform" href={subitem.link}>{subitem.title}</a>
          </li>
        ))}
      </ul>


    </li>
  )
}
