const path1 = "/launch?";
const path2 = "/pins/check_update";
const path3 = "/ad-style-service/request";
const path4 = "/zst/events/r";
const path5 = "/ab/api/v1/config";
const path6 = "/me/guides";
const url = $request.url;
let headers = $request.headers;

if(
    url.indexOf(path1) != -1|
    url.indexOf(path2) != -1|
    url.indexOf(path3) != -1|
    url.indexOf(path4) != -1|
    url.indexOf(path5) != -1|
    url.indexOf(path6) != -1
) {
    
    try {
        for(let header in headers){
            headers[header]='';
        }
        console.log("[yaord:FilterPRIVACY:SUCCESS ] url=" + url);
    } catch (error) {
        console.log("[yaord:FilterPRIVACY:ERROR ] " + error);
        $notify("屏蔽隐私请求失败", "error", "请求url=" + url);
    }

}
$done({ url:url,headers:headers});