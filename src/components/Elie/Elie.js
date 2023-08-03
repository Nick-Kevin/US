import  './Elie.css'
import elieImg  from    './../img/elie.jpg'

const   Elie    =   ()  =>  {
    return(
        <section    className="elie text"   id="elie">
            <div    className="elie-navigation">
            <nav>
                <ul>
                    <li><a  href="#members"><h1><span   className="R">R</span><span className="e">e</span><span className="t">t</span><span className="u">u</span><span className="r">r</span><span className="n">n</span></h1></a></li>
                    <p>Other members:</p>
                    <div>
                        <li><a  href="#ricardo">Ricardo</a></li>
                        <li><a  href="#kevin">Kevin</a></li>
                        <li><a  href="#sebastien">Sebastien</a></li>
                        <li><a  href="#lucas">Lucas</a></li>
                    </div>

                </ul>
            </nav>
        </div>
            <div    className="elie-margin">
                <h1 class="fourth">fourth member</h1>
                <div class="row-1">
                    <div class="image">
                        <img src={elieImg} alt="smiley" id="el"   className="edit"/>
                    </div>
                    <div class="content">
                        <div class="box-container">
                            <div class="box">
                                <p><span>name :</span>RAKOTOMAMONJY</p>
                                <p><span>firstName :</span>Elie</p>
                                <p><span>class :</span>ESIIA 3</p>
                                <p><span>number :</span></p>
                                <p><span>date of birth :</span>04 May 1998</p>
                                <p><span>place of birth :</span>Tsiroamandindy</p>
                            </div>
                            <div class="box">
                                <p><span>adress :</span>Andraisoro</p>
                                <p><span>phone number :</span>0344139379</p>
                                <p><span>E-mail adress : </span>rakotomamonjyelie@gmail.com</p>
                                <p><span>Github adress :Elie</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="heading">his<span   id="yellow">Skills:</span></h1>
                <div class="row-2">
                    <div class="skills">
                        <div class="progress eins">
                            <h3>html: <span> 64.35% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress zwei">
                            <h3>css: <span> 81.2% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress drei">
                            <h3>javaSript: <span> 50% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export  default Elie