import React, { Component } from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";
class DataApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recdata: [],
        }
    }
    apicall = () => {
        axios({
            method: 'GET',
            // url:'https://www.w3.org/TR/PNG/iso_8859-1.txt'
            url: 'http://dummy.restapiexample.com/api/v1/employees'
        })

            .then(res => {
                console.log(res.data)
                this.setState({ recdata: res.data.data })
                console.log(this.state.recdata)
            }
            );
    }
    render() {
        var { recdata } = this.state;
        // data.json();
        // data =  JSON.stringify(data); 
        // var array = JSON.parse(data);
        console.log("data", recdata)
        return (
            <React.Fragment>
                <button onClick={this.apicall}>Api Call</button>
            {/* {data} */}
                {/* <JsonToTable json={data} /> */}
                <table align='center' >
                    <tr>
                        <th>employe_ID</th>
                        <th>employee_Name</th>
                        <th>employee_Salary</th>
                        <th>employee_Age</th>
                        <th>profile_image</th>
                    </tr>
                    {recdata.map(item => (
                        <tr>
                            <td>{item.id} </td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary} </td>
                            <td>{item.employee_age}</td>
                            <td><imgage src={item.profile_image} alt='Employee image' /></td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        );
    }
}
export default DataApi;