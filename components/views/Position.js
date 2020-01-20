export default `
<h3>Please fill out the information below.</h3>

<form class="rugbyForm" id="theForm">
  <div>
    <label for="full-name">Full Name:</label>
    <input type="text" name="fullName" id="full-name" />
  </div>

  <div>
    <label for="age">Age:</label>
    <input type="number" name="age" id="age" step="1" />
  </div>

  <div>
    <label for="height-cm">Height in CM:</label>
    <input
      type="number"
      name="heightCm"
      id="height-cm"
      placeholder="cm"
    />
  </div>




  <div>
    <label for="weight-lbs">Weight lbs:</label>
    <input type="number" name="weight" id="weight-lbs" placeholder="lbs" />
  </div>




  <div>
    <label for="speed">Speed:</label>
    <select name="speed" id="speed">
      <option value="very slow">Very Slow</option>
      <option value="slow">Slow</option>
      <option value="medium">Medium</option>
      <option value="fast">Fast</option>
      <option value="very fast">Very Fast</option>
    </select>
  </div>

  <div id= "positionPlay">
  <a href ="http://www.stlhornetsrugby.com/" target="_blank">St Louis rugby club</a>
  <figure>
        <img src="https://i2.wp.com/www.ruck.co.uk/wp-content/uploads/2018/01/rugby_positions_thumb-1.jpg?fit=1160%2C569&ssl=1" />
        <figcaption>Rugby positions</figcaption>
  </div>

  <div>
    <button type ="submit" class="btn-quiz id="position-btn"">Submit</button>
  </div>
</form>
`;
