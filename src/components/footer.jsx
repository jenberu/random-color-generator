import React from "react";
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p>Copyright© {new Date().getFullYear()}</p>
                <h2>Designed and Built by Jemberu Kassie
            </h2>
            </div>
            
       </footer> 
    );
}
export default Footer