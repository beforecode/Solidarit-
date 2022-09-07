// css
import c from "../styles/contact.module.css"
import g from "../styles/global_static_routes.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function About() {
  return (
    <div>
      <Nav />
      <div className={g.static_route}>
        <main>
          <div className={c.title}>
            <p className={g.g_title}>Nous Contacter</p>
          </div>
          <div className={g.content}>
            <h1>Internationale des Services Publics</h1>
          </div>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  )
}
