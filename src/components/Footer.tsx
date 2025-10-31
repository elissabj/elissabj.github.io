function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "transparent",
                paddingTop: "2rem",
                paddingBottom: "4rem",
                color: "var(--text-muted)",
                fontSize: ".8rem",
                textAlign: "center",
            }}
        >
            <div className="container">
                © {new Date().getFullYear()} elissabj · Made with ♥️ · All rights reserved
            </div>
        </footer>
    )
}

export default Footer