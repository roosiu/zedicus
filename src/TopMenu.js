import React from 'react';
import './TopMenu.css';
import ReactDOMServer from 'react-dom/server';
import OptionText from './OptionText';
import OptionGradient from './OptionGradient';
import OptionBorder from './OptionBorder';
import OptionShadow from './OptionShadow';


function OpenOption(e) {
  e.preventDefault();
  var SideMenuInner = document.getElementById("SideMenuInner");
  var link = e.target.dataset.link;
  console.log(link);
  switch (link) {
    case "OptionText":
      SideMenuInner.innerHTML=ReactDOMServer.renderToString(<OptionText />);
      break;
    case "OptionGradient":
      SideMenuInner.innerHTML=ReactDOMServer.renderToString(<OptionGradient />);
      break;
    case "OptionBorder":
      SideMenuInner.innerHTML=ReactDOMServer.renderToString(<OptionBorder />);
      break;
    case "OptionShadow":
      SideMenuInner.innerHTML=ReactDOMServer.renderToString(<OptionShadow />);
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
