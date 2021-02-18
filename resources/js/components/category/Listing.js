import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Listing extends Component {


	constructor()

	{

		super();
		this.state={
			categories:[]
		}
	}

	componentDidMount()
	{
		axios.get('http://localhost:8000/category').then(response=>{
			this.setState({categories:response.data});
		});
	}

	onDelete(category_id)
	{
		axios.delete(`http://localhost:8000/category/delete/`+category_id).then(response=>{

			var categories = this.state.categories;

			for(var i=0; i<categories.length; i++)
			{

				if (categories[i].id == category_id) 

				{
					categories.splice(i,1);
					this.setState({categories:categories});
				}
			}

		});

	}

    render() {
        return (
            <div>
           <br />
				<table className="table table-bordered table-striped">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">category</th>
				      <th scope="col">Status</th>
				      <th scope="col">Create at</th>
				      <th scope="col">Updated at</th>
				      <th scope="col">Action</th>
				    </tr>
				  </thead>
				  <tbody>
				  {

				  	this.state.categories.map(category=>{
				  		return(

						    <tr>
						      <th scope="row">1</th>
						      <td>{category.name}</td>
						      <td>{category.active==1?("Active"):("Inactive")}</td>
						      <td>{category.created_at}</td>
						      <td>{category.updated_at}</td>
						      <td>
						      <Link className = "btn btn-success" to ={`category/edit/${category.id}`}>Edit</Link>
						       <a className="btn btn-primary"  onClick ={this.onDelete.bind(this,category.id)} >Delete</a>
						      </td>

						    </tr>
				  		)
				  	})
				  }
				  </tbody>
				</table>

            </div>
        );
    }
}

