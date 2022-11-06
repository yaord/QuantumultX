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

    //回答页
    if(headers['X-APP-VersionCode']) {
        console.log("去除问题回答列表广告")
        delete headers['X-APP-VersionCode'];
    }
    if(headers['X-Ab-Param']) {
        delete headers['X-APP-VersionCode'];
    }
    if(headers['x-ad']) {
        delete headers['x-ad'];
    }
    if(headers['X-Zse-84']) {
        delete headers['X-Zse-84'];
    }
    if(headers['X-B3-Traceid']) {
        delete headers['X-B3-Traceid'];
    }
    if(headers['x-ad-styles']) {
        console.log("去除问题回答列表广告")
        delete headers['x-ad-styles'];
    }
    if(headers['X-UDID']) {
        delete headers['X-UDID'];
    }
    if(headers['X-APP-Build']) {
        delete headers['X-APP-Build'];
    }
    if(headers['X-SUGER']) {
        delete headers['X-SUGER'];
    }

    headers['dnt']=1;
    headers['upgrade-insecure-requests']=1;
    headers['exchange']='v=b3';
    console.log("[yaord:noAgent:SUCCESS ] answerId=" + url.match(answerIdRegx)[0]);
} catch (error) {
    console.log("[yaord:noAgent:ERROR ] " + error);
    $notify("客户端伪装失败", "error", "当前文章链接：" + url);
}finally{
    $done({ headers:headers});
}

