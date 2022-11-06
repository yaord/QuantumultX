const url = $request.url;
const answerIdRegx = /\d{7,10}/;
let body = $response.body;

try {
    let obj = JSON.parse(body);

    if(obj.data) obj.data=[];
    if(obj.paging) obj.paging=[];
    body = JSON.stringify(obj);
    console.log("[yaord:noRecomAD:SUCCESS ] answerId=" + url.match(answerIdRegx)[0]);
} catch (error) {
    console.log("[yaord:noRecomAD:ERROR ]" + error);
    $notify("推荐广告去除失败", "error", "当前文章链接：" + url);
} finally {
    $done({ body });
}