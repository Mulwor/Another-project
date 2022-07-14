import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: "Мужские Кросовки Nike Blazer Mid Suede", 
    price: 12999,
    imageUrl: "/img/Sneakers/First-shoes.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270", 
    price: 15600,
    imageUrl: "/img/Sneakers/Second-shoes.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede", 
    price: 8499,
    imageUrl: "/img/Sneakers/Third-shoes.jpg"
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: "/img/Sneakers/Fourth-shoes.jpg"
  },
]

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
        { arr.map((obj) => ( 
            <Card 
              title = {obj.title}
              price = {obj.price} 
              imageUrl = {obj.imageUrl}
            />
         )) } 
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
