import React from 'react';
import './TopMenu.css';
import OptionText from './OptionText';
import OptionGradient from './OptionGradient';
import OptionBorder from './OptionBorder';
import OptionShadow from './OptionShadow';
import ReactDOM from 'react-dom';


function OpenOption(e) {
  e.preventDefault();
  var SideMenuInner = document.getElementById("SideMenuInner");
  var link = e.target.dataset.link;

  switch (link) {
    case "OptionText":
      ReactDOM.render(<OptionText />, SideMenuInner);
      break;
    case "OptionGradient":
      ReactDOM.render(<OptionGradient />, SideMenuInner);
      break;
    case "OptionBorder":
      ReactDOM.render(<OptionBorder />, SideMenuInner);
      break;
    case "OptionShadow":
      ReactDOM.render(<OptionShadow />, SideMenuInner);
      break;

    default:
      break;
  }




}

function TopMenu() {
  return (
    <div className="TopMenuDiv">
      <div className="Logo">
          zedicus
      </div>
      <div className="ButtonsDiv">
          <button id="ButtText" data-link="OptionText" onClick={OpenOption}>text</button>
          <button id="ButtGradient" data-link="OptionGradient" onClick={OpenOption}>gradient</button>
          <button id="ButtBorder" data-link="OptionBorder" onClick={OpenOption}>border</button>
          <button id="ButtShadow" data-link="OptionShadow" onClick={OpenOption}>shadow</button>
      </div>
    </div>
  );
}

export default TopMenu;
