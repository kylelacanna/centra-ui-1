import "../styles/Contact.css";
export function Contact(props) {
    return (
        <div>
            <form>
                <input class="contact-input" type="text" value="First Name" />
                <input class="contact-input" type="text" value="Last Name" />
                <input class="contact-input" type="text" value="Email" />
                <input class="contact-input" type="text" value="Message" />
            </form>
        </div>
    );
}