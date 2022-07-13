import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
    <Drawer />
    <Header />
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
