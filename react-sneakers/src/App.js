function App() {
  return (
    <div className="wrapper clear">
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
      <h1 clsa>Все кросовки</h1>
        <div className="d-flex">
          <div className = "card">
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


          <div className = "card">
            <img width ={133} height={112} src = "/img/Sneakers/Fifth-shoes.jpg" alt = "" />
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
            <img width ={133} height={112} src = "/img/Sneakers/Sixth-shoes.jpg" alt = "" />
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
            <img width ={133} height={112} src = "/img/Sneakers/Sixth-shoes.jpg" alt = "" />
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
            <img width ={133} height={112} src = "/img/Sneakers/Sixth-shoes.jpg" alt = "" />
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
  )
}

/* Function App() {...} - доступен везде где хочет пользователь. Находится данный код в
index.js: 
=> import App from './App'; - Мы импортировали код из этого файла, поместили в переменную App,
и это переменную используев в 19 строке: <App /> 

default - это определенная функция, переменная и т.д. которую мы хотим использовать в будущем
*/
export default App;
   