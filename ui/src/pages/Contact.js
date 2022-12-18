import "../styles/Contact.css";
export function Contact(props) {
    return (
        <div class="input-div">
            <form class="input-form">
                <input class="contact-input" id="name" type="text" value="First Name" />
                <input class="contact-input" id="name" ype="text" value="Last Name" />
                <input class="contact-input" id="email"type="text" value="Email" />
                <input class="contact-input" id="message" type="text" value="Message" />
            </form>
        </div>
    );
}