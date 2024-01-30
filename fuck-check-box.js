// ==UserScript==
// @name         制裁E听说
// @namespace    https://github.com/yzyf1312/Fuck-EWT-Checkbox
// @version      0.0.1
// @description  不就是防刷课吗？你以为你很厉害啊？
// @author       依凡
// @match        *://*.ewt360.*/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/378351/%F0%9F%94%A5%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%F0%9F%94%A5%20CSDN%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4%E3%80%81%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96%EF%BC%9A%F0%9F%86%95%20%E4%B8%8D%E7%94%A8%E5%86%8D%E7%99%BB%E5%BD%95%E4%BA%86%EF%BC%81%E8%AE%A9%E4%BD%A0%E4%BD%93%E9%AA%8C%E4%BB%A4%E4%BA%BA%E6%83%8A%E5%96%9C%E7%9A%84%E5%B4%AD%E6%96%B0CSDN%E3%80%82.user.js
// @updateURL https://update.greasyfork.org/scripts/378351/%F0%9F%94%A5%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%F0%9F%94%A5%20CSDN%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4%E3%80%81%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96%EF%BC%9A%F0%9F%86%95%20%E4%B8%8D%E7%94%A8%E5%86%8D%E7%99%BB%E5%BD%95%E4%BA%86%EF%BC%81%E8%AE%A9%E4%BD%A0%E4%BD%93%E9%AA%8C%E4%BB%A4%E4%BA%BA%E6%83%8A%E5%96%9C%E7%9A%84%E5%B4%AD%E6%96%B0CSDN%E3%80%82.meta.js
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
