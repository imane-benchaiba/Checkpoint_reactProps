import React from 'react';
import propTypes from "prop-types";

const Profile = (props) => {   
    const styletext = {color: "red", textAlign: 'center'};
    return (
        <div style={styletext}>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <h3>{props.bio}</h3>
            <div>{props.children}</div>
        </div>
    )
}
Profile.defaultProps = {
    name:"BENCHAIBA Imane",
    bio:"",
    profession:"Rédactrice web"
}
Profile.propTypes = {
    name: propTypes.string,
    profession: propTypes.string,
    bio: propTypes.string
};
export default Profile;
