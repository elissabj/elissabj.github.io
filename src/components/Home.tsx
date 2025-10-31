function Home() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        position: "relative",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url("/img/perfil.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 200, opacity: .85, marginBottom: ".25rem" }}>
          Hi, I'm
        </h2>
        <h1 style={{ fontSize: "4rem", fontWeight: 800, letterSpacing: "-.02em"}}>
          Elisa Ramos
        </h1>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 400, letterSpacing: "2px", opacity: .6 }}>
          SOFTWARE ENGINEER
        </h3>
      </div>
    </section>
  )
}

export default Home