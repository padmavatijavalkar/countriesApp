import { connect } from "react-redux";
import { fetchUsers } from "../Action/Action";
import App from "../App";


const mapStateToProps = (state) => {
  
    return {
      users: state.region.users,
      error: state.region.error,
       
    };};
    
  const mapDispatchToProps = (dispatch) =>( {
    fetchUsers:(user)=>dispatch(fetchUsers(user))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(App);