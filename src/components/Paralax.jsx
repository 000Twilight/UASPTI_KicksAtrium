import { Parallax } from "react-parallax";
import Image1 from "../foto/top.png";
import Image2 from "../foto/par1.jpg";
import Image3 from "../foto/par2.jpg";
import Image4 from "../foto/par3.jpg";

function Paralax() {
    const bgImageStyle = {
        filter: 'grayscale(50%)',
    };

    return (
        <div className="App paralax">
            <Parallax strength={0} bgImage={Image1} style={bgImageStyle}>
                <div className="content h-screen"></div>
            </Parallax>

            <Parallax strength={300} bgImage={Image2}>
                <div className="content h-screen"></div>
            </Parallax>

            <Parallax strength={300} bgImage={Image3}>
                <div className="content h-screen"></div>
            </Parallax>

            <Parallax strength={300} bgImage={Image4}>
                <div className="content h-screen"></div>
            </Parallax>
            <Parallax>
                <div className="h-24"></div>
            </Parallax>
        </div>
    );
}

export default Paralax;