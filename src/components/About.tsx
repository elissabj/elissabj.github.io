import { FaFileDownload } from "react-icons/fa"

function About() {
  return (
    <section
      id="about-container" style={{ backgroundColor: "var(--bg-body)", paddingTop: "4rem", paddingBottom: "4rem", }}>
      <div className="container" style={{ maxWidth: "var(--max-width)" }}>
        <div
          className="card"
          style={{
            marginBottom: "3rem",
            padding: "2rem",
          }}
        >
          <div
            className="about-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div
              className="about-col-text"
              style={{
                flex: "1 1 70%",
                minWidth: "260px",
              }}
            >
              <h2
                className="section-heading"
                style={{
                  marginBottom: ".5rem",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                }}
              >
                About me
              </h2>

              <p
                className="section-subtitle"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "var(--text-muted)",
                  marginBottom: ".5rem",
                }}
              >
                Computer Systems Engineer passionate about challenges, theology, and wine 🍷.
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text-color)",
                }}
              >
                Driven to become a better version of myself; I love solving problems with data, AI, and mathematics.
                I never want to stop learning, teaching, and sharing knowledge that's why I co-founded Curies Community.
              </p>
              <br></br>

              <h2
                className="section-heading"
                style={{
                  marginTop: "1rem",
                  marginBottom: ".5rem",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                }}
              >
                Education
              </h2>
              <p
                className="section-subtitle"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "var(--text-muted)",
                  marginBottom: ".5rem",
                }}
              >
                Computer Systems Engineer (B.S.), ESCOM IPN, CGPA of 90/100 (3.6/4).
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text-color)",

                }}
              >
                Graduated with honors. <strong>BEIFI research scholarship </strong> since 2019 for the projects "IoT-enabled embedded web servers" and "pre-diagnosis methodologies for
                actinic keratosis". <strong>Relevant </strong> coursework includes <strong>C</strong>omputer  <strong>G</strong>raphics,  <strong>E</strong>volutionary
                <strong> C</strong>omputing,
                <strong>W</strong>eb  <strong>A</strong>pplications  <strong>D</strong>evelopment,  <strong>N</strong>eural
                <strong> N</strong>etworks, and  <strong>C</strong>ryptography;
                <strong> languages:</strong>Spanish (native), English (B2), French (A1).
              </p>

            </div>
            <div
              className="about-col-button"
              style={{
                flex: "1 1 35%",
                minWidth: "200px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <a
                href="/docs/ElisaRamosResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >
                <FaFileDownload style={{ marginRight: "8px" }} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About