
const headers = $request.headers;

const url = $request.url;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';
try {
    console.log("================================开始==========================");
    
    delete headers['x-app-za'];
    delete headers['x-hybrid-config'];
    delete headers['X-Network-Type']
    delete headers['x-app-version'];
    delete headers['X-MS-ID'];
    delete headers['Authorization'];
    headers['dnt']=1;
    headers['upgrade-insecure-requests']=1;
    headers['exchange']='v=b3';
    $notify("隐藏agent", "成功", "成功伪装成chrome!");
} catch (error) {
    console.log("[出现错误：]" + error);
}finally{
    console.log("================================结束==========================");
    $done({ url:url,headers:headers});

}

