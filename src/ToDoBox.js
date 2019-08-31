import React, { Component } from 'react';

class ToDoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            toDoListArr: ['复习前端知识点','修改简历'],
            inputVal: ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleDel=this.handleDel.bind(this);
    }
    handleChange(e) {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleAdd() {
        let arr=this.state.toDoListArr.map(item=>item)
        arr.push(this.state.inputVal)
        this.setState({
            toDoListArr: arr,
            inputVal: ''
        })
    }
    handleDel(index) {
        console.log(index);
        let arr=this.state.toDoListArr.map(item=>item);
        arr.splice(index,1);
        this.setState({
            toDoListArr: arr
        })
    }
    render() {
        return (
            <div>
                <ToDoInput inputVal={this.state.inputVal} change={this.handleChange} add={this.handleAdd}/>
                <ToDoList toDoListArr={this.state.toDoListArr} del={this.handleDel} />    
            </div>
        )
    }
} 
class ToDoInput extends Component{
    render() {
        return (
            <div>
                <input type='text' value={this.props.inputVal} onChange={this.props.change}/>
                <button type='button' onClick={this.props.add}>增加代办事项</button>
            </div>
        )
    }
}
// function ToDoList(props) {
//     return (
//         <div>
//             <ul>
//                 {
//                     props.toDoListArr.map((item,index)=>
//                     <ToDoListItem key={index} name={item} id={index} del={props.del}/>
//                     )
//                 }
//             </ul>
//             <p>共有{props.toDoListArr.length}条代办事项</p>
//         </div>
//     )
// }
class ToDoList extends Component{
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.toDoListArr.map((item,index)=>
                        <ToDoListItem key={index} name={item} id={index} del={this.props.del}/>
                        )
                    }
                </ul>
                <p>共有{this.props.toDoListArr.length}条代办事项</p>
            </div>
        )
    }
}
// function ToDoListItem (props) {
//     return (
//         <li>
//             <button onClick={()=>{props.del(props.id)}}>删除</button>
//             <span>{props.name}</span>
//         </li>
//     )
// }
class ToDoListItem extends Component{
    render() {
        return (
            <li>
                <button onClick={()=>this.props.del(this.props.id)}>删除</button>
                <span>{this.props.name}</span>
            </li>
        )
    }
}




export default ToDoBox;