import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './OptionText.css';

function OptionText() {
  const textArea = document.getElementById("textarea_code");
  const preview_text_div = document.getElementById("preview_text_div");
  const preview_background_div = document.getElementById("preview_background_div");

  const [ value1, setValue ] = React.useState(1);
  const [ value2, setValue2 ] = React.useState(2);
  const [ value3, setValue3 ] = React.useState(1);
  const [ value4, setValue4 ] = React.useState(0);
  const [ valuer, setValuer ] = React.useState(150);
  const [ valueg, setValueg ] = React.useState(150);
  const [ valueb, setValueb ] = React.useState(150);

  let codeToArea = "text-shadow: "+value1+"px "+value2+"px "+value4+"px rgba("+valuer+", "+valueg+", "+valueb+", "+value3+");";
  preview_text_div.style.textShadow = value1 + "px "+value2+"px "+value4+"px rgba("+valuer+", "+valueg+", "+valueb+", "+value3+")";
   textArea.value = codeToArea;
   preview_text_div.style.display = "block";
preview_background_div.style.background = "rgb(255, 255, 255)"
  return (
    <div className="Text">
      <div className="TextTop">TEXT</div>
      <div>
        {/* TextShadowDistanceHor */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Shadow Distance Horizontal
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowDistanceHor" min={-75} max={75} step={1} value={value1} onChange={e => setValue(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={value1}
              onChange={e => setValue(e.target.value)}
              size='sm'
              min={-75}
              max={75}
              step={1}
              variant='dark'
              tooltip='auto'
          />

        {/* TextShadowDistanceVer */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Shadow Distance Vertical
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowDistanceVer" min={-75} max={75} step={1} value={value2} onChange={e => setValue2(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={value2}
              onChange={e => setValue2(e.target.value)}
              size='sm'
              min={-75}
              max={75}
              step={1}
              variant='dark'
              tooltip='auto'
          />
        {/* TextShadowOpacity */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Shadow Opacity
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowOpacity" min={0} max={1} step={0.01} value={value3} onChange={e => setValue3(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={value3}
              onChange={e => setValue3(e.target.value)}
              size='sm'
              min={0}
              max={1}
              step={0.01}
              variant='dark'
              tooltip='auto'
          />
        {/* TextShadowBlur */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Shadow Blur
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowBlur" min={0} max={30} step={1} value={value4} onChange={e => setValue4(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={value4}
              onChange={e => setValue4(e.target.value)}
              size='sm'
              min={0}
              max={30}
              step={1}
              variant='dark'
              tooltip='auto'
          />
        {/* TextShadowColorR */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Color R
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowColorR" min={0} max={255} step={1} value={valuer} onChange={e => setValuer(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={valuer}
              onChange={e => setValuer(e.target.value)}
              size='sm'
              min={0}
              max={255}
              step={1}
              variant='dark'
              tooltip='auto'
          />
        {/* TextShadowColorG */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Color G
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowColorG" min={0} max={255} step={1} value={valueg} onChange={e => setValueg(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={valueg}
              onChange={e => setValueg(e.target.value)}
              size='sm'
              min={0}
              max={255}
              step={1}
              variant='dark'
              tooltip='auto'
          />
        {/* TextShadowColorB */}
          <Row>
            <Col xs="">
              <Form.Label>
              Text Color B
              </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control type="number" className="input_class" id="TextShadowColorB" min={0} max={255} step={1} value={valueb} onChange={e => setValueb(e.target.value)} size='sm' />
            </Col>

          </Row>
          <RangeSlider
              value={valueb}
              onChange={e => setValueb(e.target.value)}
              size='sm'
              min={0}
              max={255}
              step={1}
              variant='dark'
              tooltip='auto'
          />
      </div>
    </div>

  );
}

export default OptionText;