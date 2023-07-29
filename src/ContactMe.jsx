function ContactMe() {
    return (
        <div className="contact-me">
            <div className="contact-details">
                <h1>Contact Me</h1>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>123 Anytown Road<br/>
                Anytown, California 12345</p>
                
                <div className="phone">
                    <div>Phone Symbol</div>
                    <p>834-345-6789</p>
                </div>
                
                <div className="email">
                    <div>Email Symbol</div>
                    <p>fred.t.jones@fake-email.org</p>
                </div>

                <ul className="social-media-links">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>

            <div>Picture 2 of Me</div>
        </div>
    )
}

export default ContactMe