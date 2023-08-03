import './Members.css'
import  ricardo   from    './../img/ricardo.png'
import  kevin   from    './../img/Kevin.jpg'
import sebastien from './../img/sebastien.png'
import elie from './../img/elie.jpg'
import lucas from './../img/lucas.jpg'
import meet from    './../img/meeting.svg'
import search from  './../img/searching.svg'

const   Members =   ()  =>  {
    return  (
        <div    className="members">
            <div    className="images_members">
                <img    className="first-img"   src={meet}  alt="imageET"    id="a"/>
                <img    className="second-img"  src={search}    alt="search-img"    />
            </div>
            <div        id="members"    className="column-content">
                <div    className="text">
                    <p><h1  className="memberstitle">Members</h1></p>
                    <div    className="members-content">
                        <p  className="text-ident-line-height">
                            Our team is made up of only young men; computer science and its univers fascinate us. Currently, we are more and more interested in the field of web development because all the information is happening on the net nowadays.
                            If each member of the group has his own objective, the field of study therefore remains the same.
                            <p  className="instruction">We are therefore delighted to introduce you each member of the group; <span>by clicking on each image below, the revelant information will be displayed.</span></p>
                        </p>
                        <a  href="#ricardo">< img   className="ricardo-img" src={ricardo} alt="images"  /></a>
                        <a  href="#kevin">< img   className="kevin-img" src={kevin} alt="images"  /></a>
                        <a  href="#sebastien">< img   className="sebastien-img" src={sebastien} alt="images"  /></a>
                        <a  href="#elie">< img   className="elie-img" src={elie} alt="images"  /></a>
                        <a  href="#lucas">< img   className="lucas-img" src={lucas} alt="images"  /></a>
                    </div>
                    <a   href="#group"  className="text-prev" id="pre">Previous</a>
                </div>
            </div>
            <div    className="footer"  id="foot">
                <p  className="footer-text">Powered by <span    id="span-text">The5guys</span></p>
            </div>
        </div>
    )
}

export  default Members