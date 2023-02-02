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
              <div className="stage--grid">
                  <div id="checklist-container" className="stage--grid_checklist">CHECKLIST</div>
                  <div id="login-container" className="stage--grid_login">
                    <Login/>
                  </div>
                  <div id="info-container" className="stage--grid_info">INFO</div>
              </div>
          </section>

      </main>     
    </>
  )
}
