import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>NONNA PILI Pastas caseras</h1>
            <div>
                <button>Fideos</button>
                <button>Ravioles</button>
                <button>Sorrentinos</button>
                <button>Salsas</button>
            </div>
            <CartWidget/>
        </nav> 
    )
}

export default NavBar