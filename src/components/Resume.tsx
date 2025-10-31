function Resume() {
  return (
    <section
      id="experience"  style={{ backgroundColor: "var(--bg-body)", paddingTop: "4rem", paddingBottom: "4rem",}}>
      <div className="container" style={{ maxWidth: "var(--max-width)" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h2
            className="section-heading"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: ".5rem",
              marginBottom: ".25rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            <span>Experience</span>
            <span
              style={{
                fontSize: ".8rem",
                fontWeight: 400,
                color: "var(--text-muted)",
              }}
            >
              so far...
            </span>
          </h2>

          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, var(--accent) 0%, transparent 60%)",
              borderRadius: "2px",
              marginBottom: "2rem",
              width: "100%",
              maxWidth: "280px",
            }}
          />
        </div>

        <div
          className="card"
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: ".5rem",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: 600 }}>
              <strong>Software Developer</strong> · Oracle 5G Industries
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: ".8rem",
                fontWeight: 500,
              }}
            >
              2023 — 2025
            </div>
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              marginTop: ".75rem",
              lineHeight: 1.5,
            }}
          >
            💡 Contributions to performance optimization, software improvement, and DevOps projects with a technical, scalability-focused approach.
          </p>

          <ul
            style={{
              marginTop: ".75rem",
              paddingLeft: "1rem",
              fontSize: ".9rem",
              lineHeight: 1.5,
              color: "var(--text-color)",
            }}
          >
            <li>Performance testing: stability and responsiveness under load.</li>
            <li>Software optimization: efficient and streamlined code.</li>
            <li>DevOps: automation, CI/CD, and continuous monitoring..</li>
          </ul>

          <p
            style={{
              fontSize: "0.9rem",
              marginTop: ".75rem",
              lineHeight: 1.5,
            }}
          >
            🔧 <strong>Technologies:</strong> Java 17, Python, Docker, Kubernetes,
            Helm, Podman, YAML, Git.
          </p>
        </div>

        <div
          className="card"
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: ".5rem",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: 600 }}>
              <strong>Software Developer Intern</strong> · Oracle DB VOS
              <span
                style={{
                  fontSize: ".8rem",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                }}
              >
                {" "}
                (Virtual Operating System)
              </span>
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: ".8rem",
                fontWeight: 500,
              }}
            >
              2022 — 2023
            </div>
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              marginTop: ".75rem",
              lineHeight: 1.5,
            }}
          >
            💡 Participation in network monitoring for Oracle DB at the middleware level.
          </p>

          <ul
            style={{
              marginTop: ".75rem",
              paddingLeft: "1rem",
              fontSize: ".9rem",
              lineHeight: 1.5,
              color: "var(--text-color)",
            }}
          >
            <li> Resolution of critical bugs using RDMA for high-speed data transfers.</li>
            <li> Implemented autonomous log monitoring for Oracle DB, improving responsiveness during peak load periods.</li>
            <li> Benchmarking of the database monitoring system using RDMA, identifying bottlenecks and opportunities for improvement.</li>
          </ul>

          <p
            style={{
              fontSize: "0.9rem",
              marginTop: ".75rem",
              lineHeight: 1.5,
            }}
          >
            🔧 <strong>Technologies:</strong> C, RDMA, Oracle DB, Oracle OCI, Linux,
            Bash, Git.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume