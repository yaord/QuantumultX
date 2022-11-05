
const headers = $request.headers;

const url = $request.url;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';
/*
    headers:
        Connection:
        Accept-Encoding:
        x-app-za:
        User-Agent:
        x-api-version:
        Authorization:
        x-hybrid-config:
        X-Network-Type:
        Host:
        x-app-version:
        Cookie:
        Accept-Language:
        Accept:
        X-MS-ID:

*/

try {
    console.log("================================开始==========================");
    //打印headers
    for(let header in headers){
        console.log("【" + header + "=" + headers[header] + "】");
    }

} catch (error) {
    console.log("[出现错误：]" + error);
}finally{
    //完结时
console.log("================================结束==========================");
$done({ url:url,headers:headers});

}

