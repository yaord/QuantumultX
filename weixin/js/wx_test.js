const url = $request.url;
const contentType ="application/x-www-form-urlencoded";
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';
const ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.12(0x17000c21) NetType/WIFI Language/zh_CN";
let headers = $request.headers;
let path = $request.path;

headers['user-agent']=userAgent;
headers['Content-Type']=contentType;
console.log("伪装 mmtls，其中url=" + url);
$done({ headers:headers});