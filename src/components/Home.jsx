import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showMessage: false });
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.showMessage && (
                    <p>Welcome to Our Competition World</p>
                )}
            </div>
        );
    }
}

export default Home;