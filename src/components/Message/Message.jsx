import './Message.css';

function Message({ text, show }) {
    return (
    <div className={`message ${show ? 'show' : ''}`}>
        {text}
    </div>
    );
}

export default Message;
