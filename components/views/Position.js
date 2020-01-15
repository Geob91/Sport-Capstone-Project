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
    <label for="weight-Llbs">Weight lbs:</label>
    <input type="number" name="weight" id="weight-Llbs" placeholder="lbs" />
  </div>

  <input id="weight-Kg" placeholder="Kg"/>

  <div>
    <label for="speed">Speed:</label>
    <select name="speed" id="speed">
      <option value="very slow">Very Slow</option>
      <option value="slow">Slow</option>
      <option value="Medium">Medium</option>
      <option value="Fast">Fast</option>
      <option value="Very Fast">Very Fast</option>
    </select>
  </div>

  <div>
    <button type ="submit" onclick="myfunction()" class="btn-quiz id="position-btn"">Submit</button>
  </div>
</form>
`;
