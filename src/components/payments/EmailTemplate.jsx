const EmailTemplate = ({ message }) => {
    console.log(message, "email template message");
    return (
        <div className="text-xl">{message}</div>
    )
}

export default EmailTemplate