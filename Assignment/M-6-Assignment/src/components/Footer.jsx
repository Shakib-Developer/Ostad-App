import {useState} from 'react'

const Footer = () => {
    const [name, setName] = useState("SHAKIB");
    return (
        <div className="footer">
            <h4>My Name is {name}</h4>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a tenetur accusantium adipisci earum, eum suscipit impedit eveniet sit nostrum consequatur saepe vel eaque officia, unde corporis quis eligendi? Architecto.</p>
            
            <button onMouseEnter={()=> setName("AHAMMED")} onMouseLeave={()=> setName("SHAKIB")}>Change Name</button>
            
        </div>
    );
};

export default Footer;