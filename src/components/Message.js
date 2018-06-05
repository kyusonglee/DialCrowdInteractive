import React from 'react'
import { connect } from 'react-redux'
import Review from './Review';
import Card from "antd/lib/card";
import { sendMessage } from '../actions/messageActions';
const { Meta } = Card;

class Message extends React.Component {
    render() {
        return <div className="messageContainer" style={{ ...this.props.style }}>
            <div 
				style={{"display":"block"}}
                className={ 
                    (this.props.received ? "received" : "sent") + " message" 
                }>
			     <span className="messageText">{this.props.text}</span>
            </div>
				 {this.props.image != "" ? 
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src={this.props.image} />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
				 :null
				 }
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

