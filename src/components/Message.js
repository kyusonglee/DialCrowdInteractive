import React from 'react'
import { connect } from 'react-redux'

import Review from './Review';

class Message extends React.Component {
    render() {
        return <div className="messageContainer" style={{ ...this.props.style }}>
            <div 
				style={{"display":"block"}}
                className={ 
                    (this.props.received ? "received" : "sent") + " message" 
                }>
			     <span className="messageText">{this.props.text}</span>
				 {this.props.image != "" ? <img style={{"width":"350px"}} src={this.props.image}/>:null}
            </div>
            { this.props.received ? <Review index={ this.props.index }/> : null }
		     <div 
				style={{"display":"block"}}
                className={ "sent message" 
                }>
				 {this.props.candidate.length > 0 ? this.props.candidate.map((item,index) => (
				  <button>{item}</button>
				  )):null
				  }
            </div>
        </div>    
    }
}

function mapStateToProps(state, props) {
    return state.messages[props.index];
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

