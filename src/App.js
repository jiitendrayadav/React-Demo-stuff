import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  state = {
    alldate: [],
    name: '',
    company: '',
    salary: '',
    designation: ''
  }
  handlechange = (e) => {
    this.setState({[e.target.name]:e.target.value})
    
  }
  submitform = (e) => {
    e.preventDefault();
    const {name, company, salary, designation, alldate} = this.state
    const datainfoobj = {
      name,
      company,
      salary,
      designation,
    }
    alldate.push(datainfoobj)
    this.setState({
      alldate
    })
     

  }
  rendertable = () => {
    
     const datainfo = this.state.alldate;
     const data = datainfo.map((dt, i) => {
       
       return(
         <tr key={i}>
         <td>{i + 1}</td>
         <td>{dt.name}</td>
         <td>{dt.company}</td>
         <td>{dt.salary}</td>
         <td>{dt.designation}</td>
         </tr>
       )
     })
     return data;
  }

  render() {
    return (
      <div>
        <h1>
            This is just demonstartion.!
        </h1>
        <form className="form-horizontal" onSubmit={this.submitform}>
    <fieldset>
  <legend>Form Name</legend>
   <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="Name">Name</label>
      <div className="col-md-4">
        <input id="Name" name="name" type="search" value={this.state.name}  className="form-control input-md" required="" onChange={this.handlechange}/>
        
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="Company">Company</label>  
      <div className="col-md-4">
      <input id="Company" name="company" type="text" value={this.state.company} className="form-control input-md" onChange={this.handlechange}/>
        
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="Salary">Salary</label>  
      <div className="col-md-4">
      <input id="Salary" name="salary" type="text" value={this.state.salary}  className="form-control input-md" required="" onChange={this.handlechange}/>
        
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="Designation">Designation</label>  
      <div className="col-md-4">
      <input id="Designation" name="designation" type="text" value={this.state.designation}  className="form-control input-md" required="" onChange={this.handlechange}/>
        
      </div>
    </div>
    <div className="form-group">
       
      <div className="col-md-8">
        <button id="Reset" name="Reset" className="btn btn-success">Sucess</button>
         
      </div>
    </div>

    </fieldset>
  </form>

  <table className="table table-striped">
  <thead>
    <tr>
    <th>S. No</th>
    <th>Name</th> 
    <th>Company</th>
    <th>Salary</th>
    <th>Designation</th>
    </tr>
  </thead>
   <tbody>
    {this.rendertable()}
   </tbody>
</table>

      </div>
    )
  }
}
