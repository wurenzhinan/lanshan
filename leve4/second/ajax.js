function ajax (options) {
  var xhr = null
  var params = formsParams(options.data)
  //创建对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
  }
  // 连接
  if (options.type == "GET") {
    xhr.open(options.type, options.url + "?" + params, options.async)
    xhr.send(null)
  } else if (options.type == "POST") {
    xhr.open(options.type, options.url, options.async)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send(params)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      options.success(xhr.responseText)
    }
  }
  function formsParams (data) {
    var arr = []
    for (var prop in data) {
      arr.push(prop + "=" + data[prop])
    }
    return arr.join("&")
  }

}

ajax({
  url: " https://query.asilu.com/weather/baidu/",  // url---->地址
  type: "GET",   // type ---> 请求方式
  async: true,   // async----> 同步：false，异步：true 
  data: {        //传入信息
  },
  success: function (data) {   //返回接受信息
    console.log(data)
  }
})