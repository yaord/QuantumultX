const path1 = "/launch?";
const path2 = "/pins/check_update";
const path3 = "/ad-style-service/request";
const path4 = "/zst/events/r";
const path5 = "/ab/api/v1/config";
const path6 = "/me/guides";
let url = $request.url;

if(
    url.indexOf(path1) != -1|
    url.indexOf(path2) != -1|
    url.indexOf(path3) != -1|
    url.indexOf(path4) != -1|
    url.indexOf(path5) != -1|
    url.indexOf(path6) != -1
) {
    console.log("屏蔽隐私连接 :" + url);
    url='';
}
$done({ url });