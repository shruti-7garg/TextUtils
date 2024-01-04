import React from 'react'
//import PropTypes from 'prop-types'

function Alert(props) {
    // capitalize function
const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

    return (
        // write props.alert && to check both conditions if true then give alert only
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        
    )
}

export default Alert
