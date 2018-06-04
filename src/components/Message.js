import React from 'react'
import { connect } from 'react-redux'
import Review from './Review';
import { sendMessage } from '../actions/messageActions';

class Message extends React.Component {
    render() {
        return <div className="messageContainer" style={{ ...this.props.style }}>
            <div 
				style={{"display":"block"}}
                className={ 
                    (this.props.received ? "received" : "sent") + " message" 
                }>
			     <span className="messageText">{this.props.text}</span>
				 {this.props.image != "" ? <img style={{"width":"70%"}} src={this.props.image}/>:null}
            </div>
            { this.props.received ? <Review index={ this.props.index }/> : null }
	 		{this.props.candidate.length > 0 ? this.props.candidate.map((item,index) => (
			  	 <button className="messageButtom"  onClick={()=>this.props.onEnter(item,Date.now())}  >{item}</button>
			      )):null}
        </div>    
    }
}

function mapStateToProps(state, props) {
    return state.messages[props.index];
}


const mapDispatchToProps = {
    onEnter: sendMessage,
}


export default connect(mapStateToProps, mapDispatchToProps)(Message)

