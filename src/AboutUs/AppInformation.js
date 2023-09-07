import React from "react";
import Stack from "react-bootstrap/Stack";

function VerticalExample() {
  return (
    <Stack gap={3}>
      <div className="bg-danger text-white p-3 border rounded">
        <div id="bginfo">
          Welcome to our diet app "Cooking with Love!", designed by Humber first
          year students to help you achieve your health and fitness goals! Our
          app provides a user-friendly platform to provide recipes towards a
          healthier lifestyle.
        </div>
      </div>
      <div className="bg-danger text-white p-3 border rounded">
        <div id="bginfo">
          Whether you're looking to lose weight, gain muscle, or simply maintain
          a healthy diet, our app offers a variety of recipes to support your
          journey.
        </div>
      </div>
      <div className="bg-danger text-white p-3 border rounded">
        <div id="bginfo">
          Our app also offers personalized meal plans based on your dietary
          preferences and goals. You can choose from a range of options such as
          atkins, keto, vegan and vegitarian.
        </div>
      </div>
      <div className="bg-danger text-white p-3 border rounded">
        <div id="bginfo">
          We understand that making lifestyle changes can be challenging however
          we're confident that you'll achieve your health and fitness goals in
          no time.
        </div>
      </div>
    </Stack>
  );
}

export default VerticalExample;
