import img1 from '../src/images/img1.jpg';
import img2 from '../src/images/img2.jpg';
import img3 from '../src/images/img3.jpg';
import phone from '../src/images/phone.png';
import whatsapp from '../src/images/whatsapp.png';



export default function hero(){
    return(
        <div className="hero">
                <h1 className="heading"><span className='tag' >Hospitality</span> Marketing <br></br>Agency</h1>
                <p>Experienced Hospitality Marketing Agency for over 10+ Years </p>
                <span className="images">
                <img src={img1}className='img1' ></img>
                <img src={img2} className='img2' ></img>
                <img src={img3} className='img3' ></img>
                </span>
                <span className="cont">
                    <img src={phone} className="phonelogo"></img>
                    <img src={whatsapp} className='app'></img>

                
                </span>
               




            </div>

    
        )
}