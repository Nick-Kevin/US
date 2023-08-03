import  './Ricardo.css'
import ricardoImg from './../img/ricardo.png'
import './../../fontawesome-free-5.15.4-web/css/all.css'

const   Ricardo =   ()  =>  {
    return(
    <section class="ricardo" id="ricardo">
        <div    className="ricardo-navigation">
            <nav>
                <ul>
                    <li><a  href="#members"><h1><span   className="R">R</span><span className="e">e</span><span className="t">t</span><span className="u">u</span><span className="r">r</span><span className="n">n</span></h1></a></li>
                    <p>Other members:</p>
                    <div>
                        <li><a  href="#kevin">Kevin</a></li>
                        <li><a  href="#sebastien">Sebastien</a></li>
                        <li><a  href="#elie">Elie</a></li>
                        <li><a  href="#lucas">Lucas</a></li>
                    </div>

                </ul>
            </nav>
        </div>
        <div    className="margin">
            <h1 class="first">first member</h1>
            <img    id="rica2"  src={ricardoImg}    alt="rica"    />
            <div class="row-1s">

                <div class="contents">
                    <div class="box-containers">
                        <div class="boxs">
                            <p><span>name :</span>TSIMAHOLISON</p>
                            <p><span>firstName :</span>Ricardo Johnatan</p>
                            <p><span>class :</span>ESIIA 3</p>
                            <p><span>number :</span>7</p>
                            <p><span>date of birth :</span>19 August 2002</p>
                            <p><span>place of birth :</span>MAROVOAY</p>
                        </div>
                        <div class="box">
                            <p><span>adress :</span>AIII008 Andakana Ankazo</p>
                            <p><span>phone number :</span>0341340260</p>
                            <p><span>E-mail adress : </span>tsimaholisonricardo@gmail.com</p>
                            <p><span>Github adress :</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="heading">his<span   id="yellow">Skills:</span></h1>
            <div class="row-2">
                <div class="skills">
                    <div class="progress eins">
                        <h3>html: <span> 75% </span></h3>
                        <div class="bar"> <span></span></div>
                    </div>
                    <div class="progress zwei">
                        <h3>css: <span> 50% </span></h3>
                        <div class="bar"> <span></span></div>
                    </div>
                    <div class="progress drei">
                        <h3>javaSript: <span> 40% </span></h3>
                        <div class="bar"> <span></span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export  default Ricardo