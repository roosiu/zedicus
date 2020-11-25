import React, { useState } from 'react';
import './OptionText.css';
import { Form, Row, Col } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function OptionText() {

  const min = -75;
  const max = 75;
  const step = 1;
  const label = "Distance";
  const [ value, setValue ] = React.useState(0);


  return (
    <div className="OptionText">
      <div className="OptionTextTop">TEXT</div>
      <div>
        <Row>
          <Col xs="">
            <Form.Label>
              {label}
            </Form.Label>
          </Col>
          <Col xs="6">
            <Form.Control type="number" min={min} max={max} step={step} value={value} onChange={e => setValue(e.target.value)} size='sm' />
          </Col>
        </Row>
        <RangeSlider
            value={value}
            tooltip='on'
            onChange={e => setValue(e.target.value)}
            size='sm'
            min={min}
            max={max}
            step={step}
            variant='dark'
            tooltip='auto'
        />
      </div>
    </div>
  );
}

export default OptionText;