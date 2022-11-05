
const headers = $request.headers;

const url = $request.url;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';


console.log("请求头接受测试:headers为object类型！");

console.log(JSON.parse(headers + ""));
//完结时
console.log("================================结束==========================");
$done({ url:url,headers:headers});
