// 事件工具对象
var EventUtil = {
  getEvent: function(event){
    return event ? event : window.event;
  },
  getTarget: function(event){
    return event.target || event.srcElement;
  },
  preventDefault: function(event){
    if (event.preventDefault){
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  addHandler: function(element, type, handler){
    if (element.addEventListener){
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function(element, type, handler){
    if (element.removeEventListener){
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};

// EventUtil.addHandler(window, "load", function(){
//   frames["richedit"].document.designMode = "on";
//   //转换粗体文本
//   frames["richedit"].document.execCommand("bold", false, null);
//   //转换斜体文本
//   frames["richedit"].document.execCommand("italic", false, null);
//   //创建指向 www.wrox.com 的链接
//   frames["richedit"].document.execCommand("createlink", false,"http://www.wrox.com");
//   //格式化为 1 级标题
//   frames["richedit"].document.execCommand("formatblock", false, "<h1>");
// });

var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";
// 是否支持鼠标事件
var isSupported = document.implementation.hasFeature("MouseEvents", "2.0");
if(isSupported){
  // alert("OK!");
}
var isSupported = document.implementation.hasFeature("MouseEvent", "3.0");
if(isSupported){
  // alert("OK!");
}

// 鼠标坐标
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
  event = EventUtil.getEvent(event);
  div.innerText = "Client coordinates: " + event.clientX + "," + event.clientY;
  alert("Client coordinates: " + event.clientX + "," + event.clientY);
});

var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
  event = EventUtil.getEvent(event);
  div.innerText = "Screen coordinates: " + event.screenX + "," + event.screenY;
  alert("Screen coordinates: " + event.screenX + "," + event.screenY);
});

// div 显示key ASCII
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
  event = EventUtil.getEvent(event);
  div.innerText = event.keyCode;
});

// cavas 支持
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext){
  var context = drawing.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "#0000ff";
  //绘制红色矩形
  context.fillStyle = "#ff0000";
  context.fillRect(10, 10, 50, 50);
  //绘制半透明的蓝色矩形
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.fillRect(30, 30, 50, 50);
}

var submit = document.getElementById("submit");
EventUtil.addHandler(submit, "click", function(event){
  var o = document.getElementsByTagName('iframe')[0];
  o.contentWindow.postMessage(textbox.value, "http://mywebd.imwork.net:9080/iframe/");
});
