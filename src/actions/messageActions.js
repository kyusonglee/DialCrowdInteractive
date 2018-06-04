export function sendMessage(text, time) {
    return { 
        type: 'MESSAGE_SEND', 
        text,
        time,
    }
}

export function addMessage(text, time, received,image) {
    return {
        type: 'MESSAGE_ADD',
        text,
        time,
        received,
		image,
    }
}
