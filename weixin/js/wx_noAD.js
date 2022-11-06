const url = $request.url;
let headers = $request.headers;
let path = $request.path;

try {
    for(let header in headers){
        headers[header]='';
    }
    path="";
    console.log("[wx:noAppMsgAD:SUCCESS ] url=" + url);
} catch (error) {
    console.log("[wx:noAppMsgAD:ERROR ] " + error);
    $notify("微信广告请求屏蔽失败", "error", "请求url=" + url);
} finally {
    $done({ path:path, headers:headers});
}