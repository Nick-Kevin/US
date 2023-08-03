import  './Lucas.css'
import  lucasImg   from    './../img/lucas.jpg'

const   Lucas   =   ()  =>  {
    return(
        <section    className="lucas    text"   id="lucas">
            <div    className="lucas-navigation">
            <nav>
                <ul>
                    <li><a  href="#members"><h1><span   className="R">R</span><span className="e">e</span><span className="t">t</span><span className="u">u</span><span className="r">r</span><span className="n">n</span></h1></a></li>
                    <p>Other members:</p>
                    <div>
                        <li><a  href="#ricardo">Ricardo</a></li>
                        <li><a  href="#kevin">Kevin</a></li>
                        <li><a  href="#sebastien">Sebastien</a></li>
                        <li><a  href="#elie">Elie</a></li>
                    </div>

                </ul>
            </nav>
        </div>
            <div    className="lucas-margin">
                <h1 class="fifth">fifth member</h1>
                <div class="row-1">
                    <div class="image">
                        <img src={lucasImg} alt="smiley" id="luc"  className="edit"/>
                    </div>
                    <div class="content">
                        <div class="box-container">
                            <div class="box">
                                <p><span>name :</span>RAKOTOSON</p>
                                <p><span>firstName :</span>Lucas</p>
                                <p><span>class :</span>ESIIA 3</p>
                                <p><span>number :</span></p>
                                <p><span>date of birth :</span></p>
                                <p><span>place of birth :</span></p>
                            </div>
                            <div class="box">
                                <p><span>adress :</span></p>
                                <p><span>phone number :</span></p>
                                <p><span>E-mail adress : </span>@gmail.com</p>
                                <p><span>Github adress :</span>Lucras</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="heading">his<span   id="yellow">Skills:</span></h1>
                <div class="row-2">
                    <div class="skills">
                        <div class="progress eins">
                            <h3>html: <span> 90% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress zwei">
                            <h3>css: <span> 74.7% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                        <div class="progress drei">
                            <h3>javaSript: <span> 30.9% </span></h3>
                            <div class="bar"> <span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export  default Lucas