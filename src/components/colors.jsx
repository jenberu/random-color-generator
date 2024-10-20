import '../styles/color.css'
import { useState ,useRef} from "react";
const Color = ({ color}) => {
  
    return (
        
        <div  className="color" style={{backgroundColor: color }}>
         {color}
            </div>
    );
}
const Colores = () => {
    const generateColors = () => {
        const hexColors = [];
        for (let i = 0; i < 27; i++) {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            hexColors.push(randomColor)
        }
        return hexColors
    };
    // Initialize state with 27 colors

    const [colors, setColors] = useState(generateColors())
    const handleGenerate = () => {
        setColors(generateColors());
    };
    return (
        <>
        <p><h1>Hexadecimal Colors</h1></p> 

        <div className='wrapper'>
         <button onClick={handleGenerate}>generater</button>

        <div className="colors-wrapper">
            {
                colors.map((color, index) => (
                    <Color key={index} color={color} index={index} />
                ))
            }
            
            </div>
            </div>
            </>
    );

};
export {Colores}