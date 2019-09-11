import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tiles from './Tiles';



class Home extends Component{

    state = {
        country: 'India'
    }
    
    

    handleChange = (e)=>{
        this.setState({
            country : document.getElementById('country').value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("handleSubmit "+this.state.country);
        this.props.changeCountry(this.state.country);
        
    }

    componentDidMount(){
        this.props.changeCountry(this.state.country);
    }

    render(){
        console.log("Calling changecountry()....")
        
        // const country = 'India';
        console.log("cOuntry"+ this.state.country);
        return(
            <div>
                <div className="title-text">
                TOP TRACKS IN <span id="cName">India</span>
                </div>
                <div className="center sub">
                    <form onSubmit = {this.handleSubmit}>
                        <select id="country" className="blue-grey lighten-5" onChange={this.handleChange}>
                            <option value = "India" > India</option>
                            <option value = "Canada"> Canada</option>
                            <option value = "France"> France</option>
                            <option value = "China" > China</option>
                            <option value = "UK" > UK</option>
                            <option value = "Brazil" > Brazil</option>
                        </select>
                        <button className="orange white-text waves-effect waves-light btn button">Search</button><br />

                    </form>    
                </div>
            </div>
            
        )
    }
}

export default Home;