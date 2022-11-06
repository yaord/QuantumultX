const url = $request.url;
let headers = $request.headers;

try {
    for(let header in headers){
        headers[header]='';
    }
    
    console.log("[wx:noAppMsgAD:SUCCESS ] url=" + url);
} catch (error) {
    console.log("[yaord:FilterPRIVACY:ERROR ] " + error);
    $notify("微信广告请求屏蔽失败", "error", "请求url=" + url);
} finally {
    $done({ headers:headers});
}