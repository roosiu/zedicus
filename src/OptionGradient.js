import React from 'react';
import './OptionGradient.css';
import { Col, Form, Row } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function OptionGradient() {

  const textArea = document.getElementById("textarea_code");
  const preview_text_div = document.getElementById("preview_text_div");
  const preview_background_div = document.getElementById("preview_background_div");
  const [ value1, setValue ] = React.useState(30);
  preview_text_div.style.display = "none";

  let codeToArea = "background: rgb(30, 50, 230); \nbackground: -moz-linear-gradient("+value1+"deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%)\nbackground: -webkit-linear-gradient("+value1+"deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%);\nbackground: -o-linear-gradient("+value1+"deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%);\nbackground: -ms-linear-gradient("+value1+"deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%);\nbackground: linear-gradient("+(parseInt(value1)+90)+"deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%);";
  preview_background_div.style.background = "rgb(30, 50, 230)";
   textArea.value = codeToArea;
  return (
    <div className="Text">
      <div className="TextTop">GRADIENT</div>
      {/* TextShadowDistanceHor */}
      <Row>
            <Col xs="">
              <Form.Label>
              Gradient Angle
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowDistanceHor" min={0} max={360} step={1} value={value1} onChange={e => setValue(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={value1}
              onChange={e => setValue(e.target.value)}
              size='sm'
              min={0}
              max={360}
              step={1}
              variant='dark'
              tooltip='auto'
          />
    </div>
  );
}

export default OptionGradient;