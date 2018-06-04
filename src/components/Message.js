import React from 'react'
import { connect } from 'react-redux'

import Review from './Review';

class Message extends React.Component {
    render() {
        return <div className="messageContainer" style={{ ...this.props.style }}>
            <div 
                className={ 
                    (this.props.received ? "received" : "sent") + " message" 
                }>
                <span className="messageText">{"A"+ this.props.text }</span>
				<img src="https://skylar.speech.cs.cmu.edu/~kyusonglee/website/assets/img/cmu.png">

            </div>
            { this.props.received ? <Review index={ this.props.index }/> : null }
        </div>    
    }
}

function mapStateToProps(state, props) {
    return state.messages[props.index];
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

