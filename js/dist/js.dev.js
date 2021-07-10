"use strict";

function getData(api) {
  fetch(api).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    build(data);
    click();
  });
}

getData('./api/normal.json');
var record = document.cookie;
changePic(record);

function changePic(record) {
  if (record.includes('cate1')) {
    getData('./api/cate1.json');
  }

  if (record.includes('cate2')) {
    getData('./api/cate2.json');
  }

  if (record.includes('cate3')) {
    getData('./api/cate3.json');
  }

  if (record.includes('cate4')) {
    getData('./api/cate4.json');
  }
}

function build(data) {
  var imgStr = '';
  var imgs = document.querySelector('.imgs');

  for (var i = 0; i < data.length; i += 1) {
    imgStr += "\n        <div class=\"img_inner".concat(i + 1, "\">\n        <a class=\"cate").concat(data[i].cate, "\" href=\"").concat(data[i].url, "\" target=\"_blank\" title=\"\u6211\u662F\u4E00\u500B\u5EE3\u544A\u62C9\">\n        <img class=\"img_resp\" src=\"./images/").concat(data[i].src, "\" alt=\"\u6211\u662F\u4F60\u770B\u4E0D\u5230\u7684\u5EE3\u544A\u62C9\" width=\"500\" height=\"330\">\n        </a>\n        </div>");
  }

  imgs.innerHTML = imgStr;
}

function click() {
  document.querySelector(".img_inner1").addEventListener('click', function () {
    var now = new Date();
    var exp = new Date(now.setDate(now.getDate() + 1));
    document.cookie = "cate = ".concat(this.childNodes[1].getAttribute('class'), "; expires = ").concat(exp.toUTCString());
    getData('./api/cate1.json');
  });
  document.querySelector(".img_inner2").addEventListener('click', function () {
    var now = new Date();
    var exp = new Date(now.setDate(now.getDate() + 1));
    document.cookie = "cate = ".concat(this.childNodes[1].getAttribute('class'), "; expires = ").concat(exp.toUTCString());
    getData('./api/cate2.json');
  });
  document.querySelector(".img_inner3").addEventListener('click', function () {
    var now = new Date();
    var exp = new Date(now.setDate(now.getDate() + 1));
    document.cookie = "cate = ".concat(this.childNodes[1].getAttribute('class'), "; expires = ").concat(exp.toUTCString());
    getData('./api/cate3.json');
  });
  document.querySelector(".img_inner4").addEventListener('click', function () {
    var now = new Date();
    var exp = new Date(now.setDate(now.getDate() + 1));
    document.cookie = "cate = ".concat(this.childNodes[1].getAttribute('class'), "; expires = ").concat(exp.toUTCString());
    getData('./api/cate4.json');
  });
}