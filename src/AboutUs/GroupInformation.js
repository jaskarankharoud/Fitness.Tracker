import Accordion from "react-bootstrap/Accordion";

function GroupInformation() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="member-header">Member 1</Accordion.Header>
        <Accordion.Body className="member-header">
          <h3>Information about team member 1</h3>
          <p>
            "Hi, my name is [Your Name]. I'm a student at [Your Occupation]. My
            student number is: . In my free time, I enjoy [Random Hobbies or
            Interests].
          </p>

          <p>Short explaination on what they did. - homepage</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="member2-header">Member 2</Accordion.Header>
        <Accordion.Body className="member2-header">
          <h3>Information about team member 2</h3>
          <p>
            "Hi, my name is [Your Name]. I'm a student at [Your Occupation]. My
            student number is: . In my free time, I enjoy [Random Hobbies or
            Interests].
          </p>
          <p>Short explaination on what they did. - About page</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header className="member3-header">Member 3</Accordion.Header>
        <Accordion.Body className="member3-header">
          <h3>Information about team member 3</h3>
          <p>
            "Hi, my name is [Your Name]. I'm a student at [Your Occupation]. My
            student number is: . In my free time, I enjoy [Random Hobbies or
            Interests].
          </p>
          <p>Short explaination on what they did. - Forms</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="member4-header">Member 4</Accordion.Header>

        <Accordion.Body className="member4-header">
          <h3>Information about team member 4</h3>
          <p>
            "Hi, my name is [Your Name]. I'm a student at [Your Occupation]. My
            student number is: . In my free time, I enjoy [Random Hobbies or
            Interests].
          </p>
          <p>Short explaination on what they did. - Detail on plans</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className="member5-header">Member 5</Accordion.Header>
        <Accordion.Body className="member5-header">
          <h3>Information about team member 5</h3>
          <p>
            "Hi, my name is [Your Name]. I'm a student at [Your Occupation]. My
            student number is: . In my free time, I enjoy [Random Hobbies or
            Interests].
          </p>
          <p>Short explaination on what they did. - bootstrap</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default GroupInformation;
