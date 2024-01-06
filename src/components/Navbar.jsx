function Navbar(){
    return(
        <div className="navbar">
            <div className="logo-name">
                <a className="navbar-logo" href="/">
                    <img src="./public/RP.png"></img>
                </a>
                <h2>RunPlanner</h2>
            </div>
            

            <div className="navbar-pages">
                <a className="navbar-about" href="/">
                    <h3>About</h3>
                </a>
                <a className="navbar-news" href="/">
                    <h3>News</h3>
                </a>
                <a className="navbar-resources" href="/">
                <h3>Resources</h3>
                </a>
            </div> 
        </div>
    )
}

export default Navbar