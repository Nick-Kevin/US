import  './Sebastien.css'
import  sebastienImg from    './../img/sebastien.png' 

const   Sebastien   =   ()  =>  {
    return(
        <section    className="sebastien    text"   id="sebastien">
        <div    className="sebastien-navigation">
            <nav>
                <ul>
                    <li><a  href="#members"><h1><span   className="R">R</span><span className="e">e</span><span className="t">t</span><span className="u">u</span><span className="r">r</span><span className="n">n</span></h1></a></li>
                    <p>Other members:</p>
                    <div>
                        <li><a  href="#ricardo">Ricardo</a></li>
                        <li><a  href="#kevin">Kevin</a></li>
                        <li><a  href="#elie">Elie</a></li>
                        <li><a  href="#lucas">Lucas</a></li>
                    </div>

                </ul>
            </nav>
        </div>
            <div    className="sebastien-margin">
                <h1 class="third">third member</h1>
                <div class="row-1">
                    <div class="image">
                        <img src={sebastienImg} alt="smiley" id="seba"  className="edit"/>
                    </div>
                    <div class="content">
                        <div class="box-container">
                            <div class="box">
                                <p><span>name :</span>RANDRIAMANANA</p>
                                <p><span>firstName :</span>Aina Lovasoa Sébastien</p>
                                <p><span>class :</span>ESIIA 3</p>
                                <p><span>number :</span>15</p>
                                <p><span>date of birth :</span></p>
                                <p><span>place of birth :</span></p>
                            </div>
                            <div class="box">
                                <p><span>adress :</span></p>
                                <p><span>phone number :</span>0326784338</p>
                                <p><span>E-mail adress : </span>sebastienrandriamanana3@gmail.com</p>
                                <p><span>Github adress :AinaLovasoa53</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="heading">his<span   id="yellow">Skills:</span></h1>
                <div class="row-2">
                    <div class="skills">
                        <div class="progress eins">
                            <h3>html: <span> 79.5% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress zwei">
                            <h3>css: <span> 70% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress drei">
                            <h3>javaSript: <span> 78% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export  default Sebastien
