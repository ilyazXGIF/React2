import React from "react";
import classes from "./classComponents.module.css";

class ClassComponents extends React.Component{

    render() {
        console.log(this.props)
        console.log("cверху")
        return(
            <>
            <ul className={classes.red}>
                <li>name: {this.props.objectName}</li>
            </ul>
            </>
        )
    }
}

export default ClassComponents;