
import NavItem from "./NavItem"



export default function Nav() {

  return (
    <nav className="min-h-[50px] bg-grey-superlight flex w-full items-center">
      <a href="/" className="logo">
        <img src="./page_logo_desktop.webp" alt="Stellar Forge logo" />
      </a>
      <ul className="menu_list flex gap-4 px-4">

        <NavItem title="Clothes" link="#">
          <ul className="flex flex-col">
            <NavItem title="Men" link="#" />
            <NavItem title="Women" link="#" />
          </ul>
        </NavItem>

        <NavItem title="Food" link="#" />
        <NavItem title="Electronics" link="#" />
        <NavItem title="Toys" link="#" />
      </ul>
    </nav >
  )
}

