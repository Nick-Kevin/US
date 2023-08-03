import  './Kevin.css'
import  Kevinimg   from    './../img/Kevin.jpg'

const   Kevin   =   ()  =>  {
    return(
        <section    className="kevin    text"   id="kevin">
            <div    className="kevin-navigation">
                <nav>
                    <ul>
                        <li><a  href="#members"><h1><span   className="R">R</span><span className="e">e</span><span className="t">t</span><span className="u">u</span><span className="r">r</span><span className="n">n</span></h1></a></li>
                        <p>Other members:</p>
                        <div>
                            <li><a  href="#ricardo">Ricardo</a></li>
                            <li><a  href="#sebastien">Sebastien</a></li>
                            <li><a  href="#elie">Elie</a></li>
                            <li><a  href="#lucas">Lucas</a></li>
                        </div>

                    </ul>
                </nav>
            </div>
            <div    className="kevin-margin">
                <h1 class="second">second member</h1>
                <div class="row-1">
                    <div class="image">
                        <img src={Kevinimg} alt="smiley" id="kev"   className="edit"/>
                    </div>
                    <div class="content">
                        <div class="box-container">
                            <div class="box">
                                <p  className="first-line"><span>name :</span>RAZAFINIRINA</p>
                                <p><span>firstName :</span>Nick Kevin</p>
                                <p><span>class :</span>ESIIA 3</p>
                                <p><span>number :</span>14</p>
                                <p><span>date of birth :</span>17 October 2002</p>
                                <p><span>place of birth :</span>Befelatanana</p>
                            </div>
                            <div class="box">
                                <p  className="first-line"><span>adress :</span>Malaza Ampitatafika</p>
                                <p><span>phone number :</span>0348310219</p>
                                <p><span>E-mail adress : </span>nicblou23@gmail.com</p>
                                <p><span>Github adress :</span>Nick-Kevin</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="heading">his<span   id="yellow">Skills:</span></h1>
                <div class="row-2">
                    <div class="skills">
                        <div class="progress eins">
                            <h3>html: <span> 65% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress zwei">
                            <h3>css: <span> 40% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress drei">
                            <h3>javaSript: <span> 30% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export  default Kevin