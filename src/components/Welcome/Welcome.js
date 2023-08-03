import './Welcome.css'
import sary from'./bgBlue5.jpg'
import essai    from    './../img/essai.svg'
import wait from    './../img/wait.svg'

const   Welcome =   ()  =>  {
    return(
        <div    className="column-content-wel"  id="welcome">
            <h1 className="hidden">*</h1>
            <div    className="images">
                <img className="bg5" src={sary} alt="Blue"></img>
                <img className="image2"  src={essai} alt="svg"/>
                <img className="image1"  src={wait} alt="svg"/>
            </div>
            <div    className="text">
                <p><h1  className="title">You project</h1></p>
                <p  className="text-content1">Welcome!</p>
                <p  className="text-content2   line-height">We are ESIIA 3 project group. We learn in ISPM Anstobolo.
                <p> We are very glad to introduce you our group members.</p> 
                </p>
                <p  className="text-content3   line-height">Enjoy reading our work!
                </p>
                 <a href="#group"   className="text-next">Next</a>
            </div>
        </div>
    )
}

export default Welcome;