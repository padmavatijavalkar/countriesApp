import React,{Component} from 'react';


class Dropdown extends  Component{
    render(){
        return(
            <select onChange={(e)=>this.props.change(e.target.value)}>
              
              { this.props.list.map((value,index)=>{
                  return <option key={index} value={value.id}>{value.name}</option>
              })}

            </select>
        )
    }
}
export default Dropdown;