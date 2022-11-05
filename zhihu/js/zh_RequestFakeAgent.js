
const headers = $request.headers;

const url = $request.url;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';
/* 
    headers:
        Connection:keep-alive
        Accept-Encoding:gzip, deflate, br
        x-app-za:OS=iOS&Release=15.4&Model=iPhone14,2&VersionName=6.0.0&VersionCode=1336&Width=1125&Height=2436&DeviceType=Phone&Brand=Apple&OperatorType=46002
        User-Agent:ZhihuHybrid osee2unifiedRelease/1336 osee2unifiedReleaseVersion/6.0.0 Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148
        x-api-version:3.0.93
        Authorization:Bearer gt2.0AAAAAD_u-2oVzxwtG1ZAAAAAAAtNVQJgAgBlr47RWx5MJIcxEg0xySnTnhNVbQ==
        x-hybrid-config:{"x-safe-area-inset-top":44,"font_resize":1.1333333333333333,"ab_signature":"CiRBRUJXR3kwY3p4VkxCZFNEbklEc0JuZWdpdW9yQXB3VlpCdz0SIDNmM2E5OTU3OThjNGJjYzM3ZjEwOWQ1YjQ2M2U5OTBiGg8IAhIFNi4wLjAaBDEzMzY=","theme":"light","x-safe-area-inset-bottom":34}
        X-Network-Type:WiFi
        Host:www.zhihu.com
        x-app-version:6.0.0
        Cookie:
        Accept-Language:zh-CN,zh-Hans;q=0.9
        Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*;q=0.8
        X-MS-ID:D2ywDmDaA0OTLNSO6jdPvIdJWhqggLdIjWOfTf/0a5UHQX9e

*/

try {
    console.log("================================开始==========================");
    //打印headers
    // for(let header in headers){
    //     console.log("【" + header + "=" + headers[header] + "】");
    // }

    //自定义头部
    // headers['x-app-za']="";
    // headers['User-Agent']=userAgent;
    // headers['x-hybrid-config']="";
    // headers['X-Network-Type']="5G";
    // headers['x-app-version']="";
    // headers['Accept-Language']="zh-CN,zh;q=0.9";
    // headers['X-MS-ID']="";

        delete headers['x-app-za'];
        delete headers['x-hybrid-config'];
        delete headers['X-Network-Type']
        delete headers['x-app-version'];
        delete headers['X-MS-ID'];
        delete headers['Authorization'];
        headers['dnt']=1;
        headers['upgrade-insecure-requests']=1;
        headers['exchange']='v=b3';

    /*
        删除属性 即模拟浏览器
        delete headers['x-app-za'];
        delete headers['x-hybrid-config'];
        delete headers['X-Network-Type']
        delete headers['x-app-version'];
        delete headers['X-MS-ID'];
        delete headers['Authorization'];
        headers['dnt']=1;
        headers['upgrade-insecure-requests']=1;
        headers['exchange']='v=b3';

    */

} catch (error) {
    console.log("[出现错误：]" + error);
}finally{
    //完结时
console.log("================================结束==========================");
$done({ url:url,headers:headers});

}

