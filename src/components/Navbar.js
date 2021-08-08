export default function Navbar(props){
    const togglePreview = props.togglePreview
    return (
        <nav className="navbar">
            <div className="navLinks">
                {/* <button onClick={togglePreview}> Preview </button> */}
                <a href="/" onClick={togglePreview}>Overview</a>
            </div>

        </nav>
    )
}

