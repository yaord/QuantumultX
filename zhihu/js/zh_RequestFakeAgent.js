
const headers = $request.headers;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';


console.log("请求头接受测试");
console.log(headers);
console.log(typeof headers);
//完结时
$done({ url });
