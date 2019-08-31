import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ToDoBox from './ToDoBox'
import FilterComponent from './FilterComponent'
import FilterComponentTwo from './FilterComponentTwo'
import FileInput from './FileInput'


function FunComponent() {
 function componentWillMount() {
    console.log('组件将要被挂载')
  }
 function componentDidMount() {
    console.log('组件已经完成了挂载')
  }
  return <h1><input value="hi" />我是一个函数组件<input value={null} /></h1>
}

class App extends Component {
  render() {
    const productList = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <FunComponent />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
        <ToDoBox/>
        <h1>模糊查询商品</h1>
        <FilterComponent proList={productList}/>
        <FilterComponentTwo proList={productList}/>
        <FileInput />
        </section>
      </div>
    );
  }
}

export default App;
