import React from "react";
import classes from "./classComponents2.module.css";

class ClassComponents2 extends React.Component{
    render() {
        return(
            <>
                <ul className={classes.red}>
                    <li>age: {this.props.objectAge}</li>
                </ul>

            </>
        )

    }
}
export default ClassComponents2