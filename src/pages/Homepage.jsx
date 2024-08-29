import Nav from "../components/Nav";
import ProductList from "../components/ProductList";

export default function Homepage() {
  return (
    <>
      <Nav />
      <section className="introduction flex flex-col gap-2 items-center">
        <h1>Welcome to Stellar Forge</h1>
        <p>Home to lowest prices and best deals.</p>
      </section>
      <ProductList />
    </>
  )
}
