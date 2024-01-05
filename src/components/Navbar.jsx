function Navbar(){
    return(
        <div className="navbar">
            <a className="navbar-logo" href="/">
                <img src="./public/RP.png"></img>
            </a>
            <a className="navbar-about" href="/">
                About
            </a>
            <a className="navbar-news" href="/">
                News
            </a>
            <a className="navbar-resources" href="/">
                Resources
            </a> 
        </div>
    )
}

export default Navbar