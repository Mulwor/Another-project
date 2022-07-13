import Card from './components/Card'

function App() {
  return (
    <div className="wrapper clear">
      <div style = {{ display: 'none' }} className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30"> Корзина 
               <img className = "cu-p" src='/img/Krestik.svg' alt="Remove"/> 
             </h2>

            <div className="cartItem d-flex align-center mb-20">
              <div 
                style={{backgroundImage:'url(/img/Sneakers/First-shoes.jpg)' }} className='cartItemImg'>
              </div>

              <div className="mr-20 flex">
                <p className ="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              
              <img className = "removeBtn" src='/img/Krestik.svg' alt="Remove"/>
            </div>

            <div className="cartItem d-flex align-center">
              <div 
                style={{backgroundImage:'url(/img/Sneakers/First-shoes.jpg)' }} 
                className='cartItemImg'>
              </div>

              <div className="mr-20 flex">
                <p className ="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              
              <img className = "removeBtn" src='/img/Krestik.svg' alt="Remove"/>
            </div>

            <div className="cartTotalBlock">
                <ul>
                  <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 руб.</b>
                  </li>
                
                  <li>
                      <span>Налог 5%:</span>
                      <div></div>
                      <b>1074 руб.</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="img/Strelka.svg" alt="Arrow"/></button>
            </div>
        </div>
      </div>


      <header class = 'd-flex justify-between align-center p-40'>
        <div className = 'd-flex align-center'>
          <img width={40} height={40} src="/img/logotype.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>  
            <p className="opacity-1">Магазин лучших кроссовок</p>  
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

    <div className = 'content p-40'>
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
              <img src="/img/search.svg" alt='Search' />
              <input placeholder="Поиск ..." />
          </div>
        </div>
        
        <div className="d-flex">
          <Card />
          <div className = "card">
            <div className = 'favorite'>
              <img src="/img/Unlike.svg" alt="Unnactive-like"/>
            </div>
            
            <img width ={133} height={112} src = "/img/Sneakers/First-shoes.jpg" alt = "" />
            <h5> Мужские Кроссовки Under Armour Curry 8 </h5>
            <div className = "d-flex justify-between align-center">
              <div className = 'd-flex flex-column'>
                <span>Цена:</span>
                <b>12 999</b>
              </div>
              
              <button className='button'>
                  <img width={11} height={11} src="/img/Vector-plus.svg"/>
              </button>
            </div>
          </div>

          <div className = "card">
            <img width ={133} height={112} src = "/img/Sneakers/Second-shoes.jpg" alt = "" />
            <h5> Мужские Кроссовки Under Armour Curry 8 </h5>
            <div className = "d-flex justify-between align-center">
              <div className = 'd-flex flex-column'>
                <span>Цена:</span>
                <b>12 999</b>
              </div>
              
              <button className='button'>
                  <img width={11} height={11} src="/img/Vector-plus.svg"/>
              </button>
            </div>
          </div>


          <div className = "card">
            <img width ={133} height={112} src = "/img/Sneakers/Third-shoes.jpg" alt = "" />
            <h5> Мужские Кроссовки Under Armour Curry 8 </h5>
            <div className = "d-flex justify-between align-center">
              <div className = 'd-flex flex-column'>
                <span>Цена:</span>
                <b>12 999</b>
              </div>
              
              <button className='button'>
                  <img width={11} height={11} src="/img/Vector-plus.svg"/>
              </button>
            </div>
          </div>


          <div className = "card">
            <img width ={133} height={112} src = "/img/Sneakers/Fourth-shoes.jpg" alt = "" />
            <h5> Мужские Кроссовки Under Armour Curry 8 </h5>
            <div className = "d-flex justify-between align-center">
              <div className = 'd-flex flex-column'>
                <span>Цена:</span>
                <b>12 999</b>
              </div>
              
              <button className='button'>
                  <img width={11} height={11} src="/img/Vector-plus.svg"/>
              </button>
            </div>
          </div>
        

        </div>

    </div>
  </div>
  );
}

/* Function App() {...} - доступен везде где хочет пользователь. Находится данный код в
index.js: 
=> import App from './App'; - Мы импортировали код из этого файла, поместили в переменную App,
и это переменную используев в 19 строке: <App /> 

default - это определенная функция, переменная и т.д. которую мы хотим использовать в будущем
*/
export default App;
