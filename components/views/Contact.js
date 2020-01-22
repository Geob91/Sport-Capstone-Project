export default `
<div>
<form method="POST" data-netlify="true" class ="hello" name= "contact" id="contactForm">
  <div>
    <label for= "First Name">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First Name">
  </div>

  <div>
    <label for= "Last Name">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last Name">
  </div>

  <div>
    <label for= "Phone">Phone</label>
    <input type="tel" id="Phone" name="Phone" placeholder="number">
  </div>

  <div>
    <label for= "Email">Email</label>
    <input type="email" id="email" name="email" placeholder="example@email.com">
  </div>

  <div>
    <label for= "Message">Message</label>
    <textarea id ="Message" name="Message" placeholder="Your message" style="height:200px"></textarea>
  </div>

  <div>
    <button type ="submit" class="btn-quiz">Submit</button>
  </div>
  </div>
`;
