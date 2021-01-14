import React, { Component } from 'react'
import axios from 'axios'
import Zips from './Zips'

export default class CitySearch extends Component {
    constructor(props) {
        super(props)
        this.state = { zipcodes: [], city: '' }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    componentDidMount() {
        const z = 'https://ctp-zip-api.herokuapp.com/city/' + this.state.city
        axios.get(z).then((output) => {
            this.setState({ zipcodes: output.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onChangeHandler(event) {
        let city = event.target.value 
        this.setState({ city: city.toUpperCase() })
    }

    async componentDidUpdate(priorState) {
        if (this.state.city !== priorState) {
            this.componentDidMount()
        }
    }

    render() { 
        return (
            <div>
                <span>Enter City</span>
                <input type='text' name='city' onChange={(event) => this.onChangeHandler(event)}/>
                {this.state.zipcodes.map((val, index) => { return <Zips val={val} key={index}/> })} 
            </div>
        )
    }
}
