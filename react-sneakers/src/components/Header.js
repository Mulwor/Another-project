function Header() {
    return (
        <header class = 'd-flex justify-between align-center p-40'>
            <div className = 'd-flex align-center'>
                <img width={40} height={40} src="/img/logotype.png" />
            
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>  
                    <p className="opacity-5">Магазин лучших кроссовок</p>  
                </div>
            </div>

            <ul className = 'd-flex'>
                <li class = "mr-30" >
                    <img width={18} height={18} src="/img/Vector.svg" />
                    <span> 1205 руб.</span>
                </li>
                
                <li>
                    <img width={18} height={18} src="/img/Union.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;