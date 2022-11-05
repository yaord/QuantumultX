const url = $request.url;
const headers = $request.headers;
const answerIdRegx = /\d{7,10}/;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';

try {
    delete headers['x-app-za'];
    delete headers['x-hybrid-config'];
    delete headers['X-Network-Type']
    delete headers['x-app-version'];
    delete headers['X-MS-ID'];
    delete headers['Authorization'];
    headers['dnt']=1;
    headers['upgrade-insecure-requests']=1;
    headers['exchange']='v=b3';
    console.log("[yaord:SUCCESS ] answerId=" + url.match(answerIdRegx)[0]);
} catch (error) {
    console.log("[yaord:ERROR ] " + error);
    $notify("客户端伪装失败", "error", "当前文章链接：" + url);
}finally{
    $done({ url:url,headers:headers});
}

