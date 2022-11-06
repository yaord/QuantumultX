const url = $request.url;
let headers = $request.headers;

try {
    for(let header in headers){
        headers[header]='';
    }
    
    console.log("[wx:noAppMsgAD:SUCCESS ] url=" + url);
    console.log("+++++++++++++++++++++开始");
    console.log("$request.path" + $request.path);
    console.log("$request.scheme" + $request.scheme);
    console.log("+++++++++++++++++++++结束");
} catch (error) {
    console.log("[wx:noAppMsgAD:ERROR ] " + error);
    $notify("微信广告请求屏蔽失败", "error", "请求url=" + url);
} finally {
    $done({ headers:headers});
}