import Login from "../components/Login";

export default function Home() {
  return (
    <>
      <nav className="nav">
          <div className="nav-item">Title</div>
          <div className="nav-item">developed by</div>
          <div className="nav-item">about the site</div>
      </nav> 

      <main className="main-section">
          <section className="stage">
              <Login/>
          </section>

      </main>     
    </>
  )
}
