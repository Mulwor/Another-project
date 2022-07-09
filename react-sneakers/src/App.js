function App() {
  return (
    <div className="wrapper">
      <header>
        <div className = 'headerLeft'>
          <img width={40} height={40} src = "/img/..." />
          <div className = 'headerInfo'>
            <h3>React Sneakers</h3>  
            <p>Магазин лучших кроссовок</p>  
          </div>
        </div>

      <ul className = 'headerRight'>
          <li>
            <svg />
            <span> 1205 руб.</span>
          </li>
          <li>
            <svg />
          </li>
      </ul>
    </header>

    <div className = 'content'>
      <h1>Все кросовки</h1>
      ....
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
   