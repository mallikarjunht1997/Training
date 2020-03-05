import React from 'react';
import Axios from 'axios';
class DisplayUserData extends React.Component{
    state = {
        UserList: [ ]
    }
    componentDidMount(){
        console.log("hrllo")
        Axios.post(`http://localhost:8080/add/${aname}`)
        .then(res => {
            console.log(res.data)
            this.setState({UserList: res.data});
        });
    }
    render(){
        return (<ul>{this.state.UserList.map(userdata =><tr> <td>{userdata.aid}</td><td>{userdata.aname}</td></tr>)}</ul>);
    }
}


export default DisplayUserData
