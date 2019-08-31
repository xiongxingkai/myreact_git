import React, { Component } from 'react';

class FilterComponentTwo extends Component{
    constructor(props){
        super(props);
        this.state={
            inputVal: '',
            isStock: false
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e) {
        console.log(e.target)
        if(e.target.type==='checkbox'){
            this.setState({
                isStock: e.target.checked
            })
        }else{
            this.setState({
                inputVal: e.target.value
            })
        }
    }
    render() {
        let proList = this.props.proList;
        if (this.state.inputVal!=='') {
            const reg = new RegExp(this.state.inputVal,'ig');
            console.log(reg);
            proList = proList.filter(item=>item.name.match(reg)!==null)
            if (this.state.isStock) {
                proList = proList.filter(item=>item.stocked===true)
            } 
            // if (this.state.isStock) {
            //     proList = proList.filter(item=>item.name.match(reg)!==null&&item.stocked===true)
            // } else {
            //     proList = proList.filter(item=>item.name.match(reg)!==null)
            // }
        } else {
            if (this.state.isStock) {
                proList = proList.filter(item=>item.stocked===true)
            } 
        }
        console.log('处理后的数据为', proList);
        return (
            <div className='searchBoxContainer'>
                <SearchBox inputVal={this.state.inputVal} isStock={this.state.isStock} handleChange={this.handleChange} />
                <ProductBox itemList={proList}/>
            </div>
        )
    }
}
class ProductBox extends Component{
    render() {
        return (
            <div>
                <b>Name</b>&nbsp;&nbsp;&nbsp;<b>Price</b>
                <ProductList itemList={this.props.itemList}/>
            </div>
        )
    }
}
class ProductList extends Component{
    render() {
        const set = new Set();
        this.props.itemList.forEach(item => {
            set.add(item.category)
        });
        return (
            <div>
                {
                    [...set].map((item,index) => 
                    (
                        <div key={index}>
                            <h3>{item}</h3>
                            {
                                this.props.itemList.filter(pp=>pp.category===item).map((pro,id)=> 
                                <div key={id}>
                                    <span className={pro.stocked ? '' :'red'}>{pro.name}</span>&nbsp;&nbsp;&nbsp;<span>{pro.price}</span>
                                </div>
                                )
                            }
                        </div>
                    )
                    )
                }
            </div>
        )
    }
}

class SearchBox extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e) {
        console.log(e.target)
        if(e.target.type==='checkbox'){
            this.props.changeCheckboxVal(e.target.checked);
        }else{
            this.props.changeInputVal(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.inputVal} onChange={this.props.handleChange} /> <br/>
                <label>
                    <input type='checkbox' checked={this.props.isStock} onChange={this.props.handleChange}/>
                    Only show products in isStock 
                </label>
            </div>
        )
    }
}




export default FilterComponentTwo;