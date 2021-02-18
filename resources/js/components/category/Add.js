import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

	constructor()
	{

		super();
		this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state={
			category_name: ''
		}

	}

	onChangeCategoryName(e){
		this.setState({
			category_name:e.target.value
		});
	}


	onSubmit(e){
		e.preventDefault();
		const category ={
			category_name :this.state.category_name
		}
		axios.post('http://localhost:8000/category/store',category).then(res=>console.log(res.data));
	}

    render() {
        return (
            <div>
          <br />
	<form onSubmit={this.onSubmit}> 
			<div class="form-group col-sm-6">
			<label for="exampleInputEmail1">Category Name</label>
			<input type="text" 
			className="form-control" 
			id="category_name" 
			value ={this.state.category_name}
			onChange={this.onChangeCategoryName}
			name= "category_name" 
			aria-describedby="emailHelp" 
			placeholder="Enter category name"/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
	</form>

            </div>
        );
    }
}

