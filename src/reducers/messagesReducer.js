export default function messagesReducer(state, action) {
    switch(action.type) {
        case 'MESSAGE_ADD':
            return  state.concat([{
                text: action.text,
                time: action.time,
                received: action.received,
                image: action.image,
				candidate: action.candidate,
            }])
        default: 
            return state || []
    }
}

