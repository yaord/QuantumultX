const path1 = "/ads_svp_video_";
const path2 = "/mmhead/";
const url = $request.url;
let headers = $request.headers;
let path = $request.path;

if(
    url.indexOf(path1) != -1|
    url.indexOf(path2) != -1
) {
    console.log("+++++++++++++++++++++开始");
    console.log("$request.path=" + $request.path);
    console.log("+++++++++++++++++++++结束");
    try {
        for(let header in headers){
            headers[header]='';
        }
        path="";
        console.log("[wx:FilterPRIVACY:SUCCESS ] url=" + url);
    } catch (error) {
        console.log("[wx:FilterPRIVACY:ERROR ] " + error);
        $notify("屏蔽隐私请求失败", "error", "请求url=" + url);
    }
}
$done({ path:path, headers:headers});