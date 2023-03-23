import "../styles/ContactForm.css";
export function ContactForm(props) {
  return (
    <div className="container-parent">
      <h2 class="contact-page-title">Contact Us</h2>
      <form class="contact-form">
        <div>
          <h3>Name</h3>
          <div id="name-input-div">
            <input type="text" class="name-input" id="fname" name="fname" placeholder="First Name" required />
            <input type="text" class="name-input" id="lname" name="lname" placeholder="Last Name" required />
          </div>
          <h3>Email</h3>
          <input type="text" id="email" name="email" placeholder="example@email.com" required />
        </div>
        <h3>Service Requested</h3>
        <select id="services-options" required>
          <option value="none" selected disabled hidden>--None--</option>
          <option value="lead-gen">Lead Generation</option>
          <option value="ad-manage">Ad Management/Optimization</option>
          <option value="creative">Creative Marketing Services</option>
          <option value="other">Other</option>
        </select>
        <h3>Budget</h3>
        <input type="number" id="budget-input" placeholder="Estimated Monthly Budget" required />
        <h3>Message</h3>
        <textarea placeholder="Optional Message" />
        <div id="submit-button-div">
          <button class="submit-button" id="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}