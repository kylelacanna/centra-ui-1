import "../styles/ContactForm.css";
export function ContactForm(props) {
  return (
    <div className="container-parent">
      <h2>Contact Us!</h2>
      <form>
        <div>
          <h3>Name</h3>
          <input type="text" id="fname" name="fname" />
          <input type="text" id="lname" name="lname" />
        </div>
        <h3>Email</h3>
        <input type="text" id="email" name="email" />

        <h3>Service Requested</h3>
        <select id="services-options">
          <option value="none" selected disabled hidden>--None--</option>
          <option value="lead-gen">Lead Generation</option>
          <option value="ad-manage">Ad Management/Optimization</option>
          <option value="creative">Creative Marketing Services</option>
          <option value="other">Other</option>
        </select>
        <h3>Budget</h3>
        <input type="number" id="budget-input" required />
        <h3>Message</h3>
        <textarea />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}