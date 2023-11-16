import React from 'react';
class ExampleState extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            pcounter: 100,
            name:'Ratna',
        }
    }
    incrementdisplay = () => {
        this.setState((previous) => (
            {
                pcounter:previous.pcounter + 1
            }
        )
        );
    }
    decrementdisplay = () => {
        this.setState((previous) => (
            {
                pcounter:previous.pcounter -1
            }
        )
        );
    }


    render() {
        return (
            <div>
                {this.state.name} 
                <h1> {this.state.pcounter}</h1>
                <button onClick={this.incrementdisplay}>Increment</button>&nbsp;
                <button onClick={this.decrementdisplay}>Decrement</button>
            </div>
        );
    }
}

export default ExampleState;