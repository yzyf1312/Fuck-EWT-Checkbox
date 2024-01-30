// ==UserScript==
// @name         制裁E听说
// @namespace    https://github.com/yzyf1312/Fuck-EWT-Checkbox
// @version      0.0.1
// @description  不就是防刷课吗？你以为你很厉害啊？
// @author       依凡
// @match        *://*.ewt360.*/*
// @grant        none
// @downloadURL https://github.com/yzyf1312/Fuck-EWT-Checkbox/blob/main/fuck-check-box.js?raw=true
// @updateURL https://github.com/yzyf1312/Fuck-EWT-Checkbox/blob/main/fuck-check-box.js?raw=true
//
// ==/UserScript==
var intervalId;
var clickCount = 0;

function clickElementPeriodically() {
  var element = document.querySelector('.earnest_check_mask_box');
  if (element) {
    clearInterval(intervalId); // 清除之前设置的定时器
    intervalId = setInterval(function() {
      element.click();
      clickCount++;
      if (clickCount >= 2 || !document.contains(element)) {
        clearInterval(intervalId); // 点击2次或元素消失后清除定时器
      }
    }, 2000);
  } else {
    clearInterval(intervalId); // 如果元素不存在，则清除定时器
  }
}

clickElementPeriodically();
