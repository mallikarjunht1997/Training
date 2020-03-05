import React from 'react';
import Axios from 'axios';
class DisplayUserData extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: '', id: ''};
    }
    state = {
        UserList: [ ]
    }
    componentWillMount(){
        this.findAllData()
    }

    findAllData = () => {
        
        //console.log("hrllo")
        Axios.get('http://localhost:8080/find')
        .then(res => {
            console.log(res.data)
            this.setState({UserList: res.data});
        });
    }

    AddUser = (name) => {
        //console.log("name", this.state.aname)
        // debugger
         Axios.post('http://localhost:8080/add/'+this.state.name).then(res => {
           // console.log(res.data)
        });
        this.findAllData()
    }
    UpdateUser = (id, name) => {
       // console.log("name", this.state.aname)
        // debugger
         Axios.post('http://localhost:8080/update/'+this.state.id+'/'+this.state.name).then(res => {
            console.log(res.data)
        });
        this.findAllData()
    }
    DeleteUser = (id) => {
        console.log("id", this.state.aid)
        debugger
         Axios.delete('http://localhost:8080/delete/'+id).then(res => {
            console.log(res.data)
        });
        this.findAllData()
    }

    onChangeHandler = (e) => {
        this.setState ({
            aname: e.target.value
        })
    }
    editHandler = (e) => {

        // this.UpdateUser(e.target.id,e.target.aname)
    }
    deleteHandler = (e) => {
        // debugger
        // console.log(e.target.id)
        this.DeleteUser(e.target.id)
        // .then((data) => {
        //     let deletedata = this.state.blogPosts.filter((post) => {
        //         return id !== post.id;
        //     });

        //     this.setState(state => {
        //         state.blogPosts = blogPosts;
        //         return state;
        //     });
        // })
        // .catch((err) => {
        //     console.error('err', err);
        // });
    }

    render(){
        const { UserList, name, id} = this.state
        return (
            <>
                <form>
                <label>Enter your Name</label>
                <br/>
                    <input
                        type='text'
                        onChange={this.onChangeHandler}
                        defaultValue={name}
                    />
                    <br/>
                    <button onClick={this.AddUser}>Submit</button>
                </form>
                <form>
                    <br />
                <label>Enter Id to update</label>
                <br/>
                    <input
                        type='text'
                        onChange={this.deleteHandler}
                        defaultValue={id}
                    />
                    <br />
                    <label>Update Name</label>
                    <input
                        type='text'
                        onChange={this.onChangeHandler}
                        defaultValue={name}
                    />                    
                    <br/>
                    <button onClick={this.UpdateUser}>Update</button>
                </form> 
                <form>
                <table id='User'>
                    <th>Id</th><th>Name</th><th>Action</th>
                    {UserList !== undefined && UserList.map((userdata) =>
                    <tr> <td >{userdata.id}</td><td>{userdata.name}</td>
                    
                    <button id={userdata.id} onClick={this.deleteHandler} >Delete</button>
                    <button id={userdata.id} onClick={this.editHandler}>Edit</button></tr>)}
                </table>
                </form>
            </>
        );
    }
}

export default DisplayUserData