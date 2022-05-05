import { Component } from "react";
import "./App.css";
import mock from "./mockFile/mock";
import Container from "./container/container";
import Header from './header/header';
import Dropdown from './component/dropdown';


class App extends Component {
  state={
    mock:mock.map((item,index)=>{
      return {id:item,name:item}
  })

  }
  componentDidMount(){
    this.props.fetchUsers(this.state.mock[0].id)

  }

  set(){

  }
  
  render() {
    
    
    return (

      <div>
      <Header />
      
      
        <div className="container">
          <label className="label">Region:</label>
          <Dropdown list={this.state.mock} change={this.props.fetchUsers}></Dropdown>

          

          <label className="label">Countries:</label>
          <Dropdown list={this.props.users||[]} change={this.set}></Dropdown>



        </div>
        </div>

    );
  }
}

export default App;