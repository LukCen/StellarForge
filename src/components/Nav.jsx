
import NavItem, { NavItemSublist } from "./NavItem"

export default function Nav() {


  return (
    <nav className="min-h-[50px] bg-grey-superlight flex w-full items-center">
      <a href="/" className="logo">
        <img src="/page_logo_desktop.webp" alt="Stellar Forge logo" />
      </a>
      <ul className="menu_list flex relative gap-4 px-4 min-h-[200]">

        <NavItemSublist
          title="Clothes"
          link="#"
          subitems={
            [{ title: "Men", link: "#" }, { title: "Women", link: "#" }]
          }
        />



        <NavItem title="Food" link="#" />
        <NavItem title="Electronics" link="#" />
        <NavItem title="Toys" link="#" />
      </ul>
    </nav >
  )
}

