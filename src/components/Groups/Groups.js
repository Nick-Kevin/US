import  './Groups.css'
import  meeting from    './../img/chat.svg'
import  share   from    './../img/sharing.svg'

const   Groups  =   ()  =>  {
    return(
        <div    className="column-content-group"    id="group">
            <img    src={meeting}   className="meet"    alt="img"   id="meet"    />
            <img    src={share} className="share"   alt="share"    />
            <div    className="text">
                <p><h1    className="text-group1">Our group</h1></p>
                <p  className="text-group2  ident    line-height">A 5-member team give you their best to improve their skill in JavaScipt technology for a better future.</p>
                 <p  className="text-group3  ident">This group was created in May 2022 for the purpose of carrying out projects whose subjects or topics are given by professors in Higher Institute Politechnic of Madagascar.
                 <p>We aim to stay ahead of the competition in the institute in every area of expertise but especially when it comes to web development.
                     To do this, our goal is to complete a project as soon as possible and then take advantage of possible improvements until deadlines.
                 </p>
                 </p>
                <a href="#welcome"    className="text-prev">Previous</a>
                <a href="#members"    className="text-next">Next</a>
            </div>
        </div>
    )
}

export  default Groups