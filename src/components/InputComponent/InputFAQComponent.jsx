import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import './inputFAQ.css'

function InputComponentFAQ() {
  return (
    <>
 <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

<Alert variant="primary">Primary</Alert>{' '}
    </>
  );
}


export default InputComponentFAQ;
