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

  <input id="height-ft" placeholder="feet" />


  <div>
    <label for="weight-lbs">Weight lbs:</label>
    <input type="number" name="weight" id="weight-lbs" placeholder="lbs" />
  </div>

  <div>
  <label for="weight-Kg">Weight KGs:</label>
  <input id="weight-Kg" placeholder="Kg"/>

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
  </div>

  <div>
    <button type ="submit" class="btn-quiz id="position-btn"">Submit</button>
  </div>
</form>
`;
