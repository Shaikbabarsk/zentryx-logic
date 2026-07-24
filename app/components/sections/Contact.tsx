export default function Contact() {

return (

<section id="contact" className="contact">


<div className="section-container">


<h2>
Let's Build Something Amazing
</h2>



<p>
Have a project idea? Let's work together and
create innovative AI, software, and digital
solutions with Zentryx Logic.
</p>




<div className="contact-form-container">



<form

className="contact-form"

action="https://formspree.io/f/xwvgrngw"

method="POST"

>


<input

type="text"

name="name"

placeholder="Your Name"

required

/>


<input

type="email"

name="email"

placeholder="Your Email"

required

/>


<input

type="tel"

name="phone"

placeholder="Phone Number"

/>


<input

type="text"

name="company"

placeholder="Company Name"

/>


<textarea

name="message"

placeholder="Tell us about your project"

rows={5}

required

/>


<button type="submit">

Send Message

</button>


</form>





<div className="contact-info">


<h3>
Zentryx Logic
</h3>



<p>
AI | Software Development |
Cloud | Digital Innovation
</p>



<p>
📍 India
</p>



<h3>
Founder & Technology Lead
</h3>



<p>
Shaik Babar
</p>



<p>
Building AI-powered applications,
software solutions, and innovative
digital technologies.
</p>



<p>
📧 Email:
<br/>
shaikbabar011@gmail.com
</p>



<p>
📞 Contact:
<br/>
+91 8555812798
</p>



</div>



</div>


</div>


</section>

);

}