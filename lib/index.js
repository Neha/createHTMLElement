const NAME = "neha";

const funName =  () => {
  var name = 'neha';
  return `Hello!! ${name}`
}

class DynamicHTML {
  constructor(params){
    const defaults = {
      width : "100px",
      height : "100px",
      bgColor : "transparent",
      text : "",
      fontFamily : "",
      fontSize : "",
      fontWeight : "",
      color : "",
      hAlign : "",
      vAlign : ""
    }
    const settings = Object.assign({}, defaults, params);
  }

 createElement () { 
  const tempHTML = 
  ` <style>
      .content {
        display: flex;
        background-color : ${this.settings.bgColor};
        width:${this.width}px;
        height:${this.height}px
      }
    </style>
    <div class="content"></div>`;
   
  return tempHTML;
}

createElementWithText() { 
  const tempHTML = ` <style>
      .content {
        display: flex;
        background-color:${this.settings.bgColor};
        width:${this.settings.width}px;
        height:${this.settings.height}px;
        font-family : ${this.settings.fontFamily};
        font-size : ${this.settings.fontSize};
        font-weight: ${this.settings.fontWeight};
        color : ${this.settings.color};
       
        justify-content: ${this.settings.vAlign};
        align-items: ${this.settings.hAlign};
      }
    </style>
    <div class="content"><span>${this.settings.text}</span></div>`;
    return tempHTML
}
  
}

export default DynamicHTML;