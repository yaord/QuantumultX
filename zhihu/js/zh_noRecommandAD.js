const url = $request.url;
const answerIdRegx = /\d{7,10}/;
let body = $response.body;

try {
    console.log(body);
    let obj = JSON.parse(body);

    if(obj.data) obj.data=[];
    if(obj.paging) obj.paging=[];
    if(obj.ad_info) {
        console.log("response 去除问题回答列表广告")
        obj.ad_info.position=0;
        obj.ad_info.ad={};
        obj.ad_info.adjson=""; 
    }

    body = JSON.stringify(obj);
    console.log("[yaord:noRecomAD:SUCCESS ] answerId=" + url.match(answerIdRegx)[0]);
} catch (error) {
    console.log("[yaord:noRecomAD:ERROR ]" + error);
    $notify("推荐广告去除失败", "error", "当前文章链接：" + url);
} finally {
    $done({ body:obj });
}