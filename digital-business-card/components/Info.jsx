import React from "react";

function Info() {
    return (
        <header>
            <img className="img-profile" src="../images/dave.jpg" alt="Dave photo" />
            <h1 className="title-name">Dave Dan</h1>
            <p className="position-dev">Frontend Developer</p>
            <p className="web-dev">davetorre.com</p>
            <div className="btn-contact">
                <a className="btn-email"> <img className="img-email" src="../images/mail.png" alt="Email Icon" /> Email</a>
                <a className="btn-linkedin"><img className="img-linkedin" src="../images/linkedin.png" alt="LinkedIn Icon" /> LinkedIn</a>
            </div>
        </header>
    );
}

export default Info;