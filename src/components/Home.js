import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tiles from './Tiles';



class Home extends Component{

    state = {
        country: 'India'
    }
    
    songsOfCountry(){
        const country = document.getElementById('country').value;
        document.getElementById('cName').innerText = country;
        console.log("HERE "+country);
        this.setState({
            country : country
        })
    }

    componentDidMount(){
        this.songsOfCountry();
    }

    render(){
        // const country = 'India';
        console.log("cOuntry"+ this.state.country);
        return(
            <div>
                <div className="title-text">
                TOP TRACKS IN <span id="cName">India</span>
                </div>
                <div className="center sub">
                    <select onChange={this.songsOfCountry.bind(this)} id="country" className="blue-grey lighten-5" >
                        <option value = "India"> India</option>
                        <option value = "Spain"> Spain</option>
                        <option value = "USA"> USA</option>
                        <option value = "Australia"> Australia</option>
                        <option value = "UK"> UK</option>
                        <option value = "Brazil"> Brazil</option>
                    </select>
                    <Link to = {'/' + this.state.country} >
                    <input type="button" className="orange white-text waves-effect waves-light btn button" value="SEARCH"/><br/>
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default Home;