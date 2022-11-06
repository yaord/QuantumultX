const path1 = "/ads_svp_video_";
const url = $request.url;
let headers = $request.headers;

if(
    url.indexOf(path1) != -1
) {

    try {
        for(let header in headers){
            headers[header]='';
        }
        
        console.log("[wx:FilterPRIVACY:SUCCESS ] url=" + url);
    } catch (error) {
        console.log("[wx:FilterPRIVACY:ERROR ] " + error);
        $notify("屏蔽隐私请求失败", "error", "请求url=" + url);
    }
}
$done({ headers:headers});