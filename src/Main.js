import React from 'react';
import './Main.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

function copyCodeToClipboard() {
  const el = document.getElementById("textarea_code");
  el.select()
  document.execCommand("copy")
}


function Main() {

  return (
    <div className="Main">
        <main>

            <div className="template h-100">
              <Row id="preview_background_div" className="h-75 d-flex align-content-center flex-wrap">
                <Col>
                  <div id="preview_text_div" className="preview_text_div">
                    PREVIEW...
                  </div>
                </Col>
              </Row>
              <div className="preview_code">
                <Row>
                  <Col className="text-left">
                    <Form.Label>CSS code</Form.Label>
                  </Col>
                  <Col className="text-right">
                  <Button variant="outline-dark" onClick={() => copyCodeToClipboard()} className="rounded-0" size="sm">Copy to clipboard</Button>
                  </Col>
                </Row>
                <Form.Control size="sm" as="textarea" id="textarea_code" rows={3} className="rounded-0"/>
              </div>
            </div>
        </main>

    </div>
  );
}

export default Main;
