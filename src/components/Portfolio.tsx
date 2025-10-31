
type Project = {
  title: string
  desc: string
  img: string
  link: string
}

const projects: Project[] = [
  {
    title: "Alzheimer's Patients Assistant · Geolocation & Monitoring",
    desc: "Embedded IoT system (C++) for real-time geolocation and Kotlin mobile app for caregivers to monitor and receive alerts.",
    img: "/img/portfolio/alz-assistant.png",
    link: "https://youtu.be/JAMdi6xkOSk?si=yDK3dLOjqr2i5Xyi"
  },
  {
    title: "Audio Signal Compiler — SGN",
    desc: "Compiler for audio signal transformations using a typed DSL called SGN: input .txt (code) and .wav (signal); outputs plotted input/output and altered .wav; supports decimate, interpolate, amplitude, shift, and reflect.",
    img: "/img/portfolio/sgn-compiler.jpg",
    link: "https://youtu.be/OblwOxP1nvQ"
  },
  {
    title: "Computer Graphic Render Animation with frames",
    desc: "Frame-based renderer and animation pipeline implemented in C; produces per-frame rasterized renders with configurable shading and exports image sequences for compositing.",
    img: "/img/portfolio/render-animation.png",
    link: "https://youtu.be/PyxDft3F1xM"
  },
  {
    title: "Princess Memory Game — Java Swing",
    desc: "Java Swing memory game with 40 image-backed JButtons and a display JLabel; clicking a button shows its image on the label and supports matching gameplay.",
    img: "/img/portfolio/mem-java.png",
    link: "https://github.com/elissabj"
  },
  {
    title: "Cryptography Library",
    desc: "Python cryptography library — AES, RSA, digital signatures, and more; features a user-friendly GUI, clean API, and comprehensive unit tests for secure key handling.",
    img: "/img/portfolio/crypto-lib.jpg",
    link: "https://youtu.be/50FbNgh9Fjs?si=999_Z4cuTPJyrM37&t=100"
  },
  {
    title: "Azure Cloud E-commerce",
    desc: "Serverless Azure e‑commerce using Azure Functions, JavaScript, MySQL PaaS; optimized for fast deploys, automatic scaling, and low operational cost.",
    img: "/img/portfolio/carrito.jpg",
    link: "https://www.facebook.com/share/17YoCmTpDZ/?mibextid=wwXIfr"
  },
  {
    title: "Azure Topology",
    desc: "GNS3 topology hosted on Azure with OSPF routing, VLANs and multilayer switches; includes DNS, DHCP and SMTP services for a realistic, cloud-accessible lab environment.",
    img: "/img/portfolio/net-topology.png",
    link: "https://youtu.be/SGBFj3TGCpo?si=JdL29OoVLMGShQzo&t=675"
  },
  {
    title: "Jugando Mates con Max",
    desc: "Interactive math game for Mexican primary students where Max leads playful, curriculum-aligned math questions during gameplay and rewards to motivate learning.",
    img: "/img/portfolio/mates-max.png",
    link: "https://youtu.be/k5ozEUb3sqQ?si=S4bBIJ3w7l-PcMqQ"
  },
  {
    title: "Cellular Automaton Game",
    desc: "Interactive Python simulator of cellular automata (including Conway’s Game of Life) with real-time visualization, configurable rules and grid size, and step/animate controls.",
    img: "/img/portfolio/cellular-auto.png",
    link: "https://github.com/elissabj/EvolutionaryComputing"
  },

]

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-heading">Portfolio</h2>

        <div className="portfolio-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <img
                src={p.img}
                alt={p.title}
                className="project-img"
                loading="lazy"
              />

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <a
                  className="project-button"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio