import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa" 
function Contact() { 
    return ( 
    <section id="contact"> 
        <div className="container" style={{ textAlign: "center" }}> 
            <h2 className="section-heading">Get In Touch</h2> 
            
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap", }} > 
                <a href="https://github.com/elissabj" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-color)", fontSize: "2rem" }} title="GitHub" > 
                    <FaGithub /> 
                </a> 
                <a href="https://www.linkedin.com/in/elissabj/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-color)", fontSize: "2rem" }} title="LinkedIn" > 
                    <FaLinkedin />
                </a> 
                <a href="mailto:elissabjg@gmail.com" style={{ color: "var(--text-color)", fontSize: "2rem" }} title="Correo" >
                    <FaEnvelope /> 
                </a> 
                <a href="tel:+525539890056" style={{ color: "var(--text-color)", fontSize: "2rem" }} title="Cel" > 
                    <FaPhone /> 
                </a> 
            </div> 
        </div> 
    </section> 
    ) 
} 
export default Contact