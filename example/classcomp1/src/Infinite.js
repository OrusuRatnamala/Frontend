import React from 'react';
class Infinite extends React.Component {
 
    render() {
        return (
            <div>
                <Turbify />
            </div>
        );
    }
}
class Turbify extends React.Component {
 
    render() {
        return (
            <div>
                <h2>Welcome to turbify</h2>
                <a href="Personal.html">Personal Details </a>
            </div>
        );
    }
}
 
export default Infinite;