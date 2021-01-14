import React, { Component } from "react"

class Zips extends Component {
    render() {
        return (
            <div>
                <p className = "Zipcode">{this.props.val}</p>
            </div>
        )
    }
}

export default Zips
