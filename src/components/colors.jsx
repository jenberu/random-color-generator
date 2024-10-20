
import { useState ,useRef} from "react";
const Color = ({ color,index }) => {
  
    return (
        
        <div key={index} className="color" style={{backgroundColor: color }}>
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

    const [colors, setColors] = useState(generateColors)
    const handleGenerate = () => {
        setColors(generateColors());
    };
    return (
        <div className="colors-wrapper">
            <button onClick={handleGenerate}>generater</button>
            {
                colors.map((color, index) => (
                    <Color color={color} index={index} />
                ))
            }
            
        </div>
    );

};
export {Colores}