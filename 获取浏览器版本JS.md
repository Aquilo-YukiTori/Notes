### 获取浏览器版本
*2018/11/5*

暂行，IE8及以上<br>
```
var browser = function () {
	let ua = window.navigator.userAgent.toLowerCase(),
	version = '',
	index = 0,
	bwName = '';

	//chrome
	if(ua.indexOf('wow')<0 && ((index = ua.indexOf('chrome'))!==-1)) {
		version = ua.substring(index, ua.indexOf('safari'));
		bwName = 'Chrome';
	}

	//FireFox
	if((index = ua.indexOf('firefox')) !== -1) {
		version = ua.substring(index, ua.length);
		bwName = 'Firefox';
	}

	//Edge
	if((index = ua.indexOf('chrome'))!==-1 && ua.indexOf('wow')!==-1) {
		version = ua.substring(index, us.length);
		bwName = 'Edge';
	}

	//Safari
	if(ua.indexOf('chrome')<0 && (index = ua.indexOf('safari')!==-1)) {
		version = ua.substring(index, ua.length);
		bwName = 'Safari';
	}

	//IE Series
	if(ua.indexOf('trident')!==-1) {
		if((index = ua.indexOf('msie'))!==-1) {
			version = 'IE' + ua.substr(index+4, 3);
			bwName = 'IE';
		}
		else {
			version = 'IE 11.0';
			bwName = 'IE';
		}
	}
	return {
		version: version,
		browser: bwName
	};
}
```

##### 主流浏览器的userAgent字符串

IE11<br>
Mozilla/5.0 (                       Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
<br>
IE10<br>
Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
<br>
IE9<br>
Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
<br>
IE8<br>
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
<br>
Chrome<br>
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36
<br>
FireFox<br>
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0
<br>
Edge<br>
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36
<br>
Safari<br>
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
<br>

