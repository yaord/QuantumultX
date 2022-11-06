const url = $request.url;
const answerIdRegx = /\d{7,10}/;

let body = $response.body;
const headRegx = /\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\"(\s)*\>/;
const allRegex = /\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\"(\s)*\>(.|\n)+\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\-img\"(\s)*\>(\s)*\<\/div\>(\s)*\<\/div\>(\s)*\<\/div\>/;
body = filterAD();

function filterAD() {
    try {
        let matchStr = body.match(headRegx);
        if(matchStr == null | matchStr == undefined | matchStr == "") {
            $notify("广告页面元素定位失败", "error", "当前文章链接：" + url);
            return body;
        }

        let target = body.match(allRegex)[0];
        console.log("[yaord:noAD:SUCCESS ] answerId=" + url.match(answerIdRegx)[0]);
        //只替换一次
        return body.replace(target,"");
    } catch (error) {
        console.log("[yaord:noAD:ERROR ] " + error);
        $notify("广告页面元素定位失败", "error", "当前文章链接：" + url);
    }
    
}

const myRequest = {
    url: 'https://autumnfish.cn/song/url?id=211',
    method: "GET"// Optional, default GET.
    //headers: headers, // Optional.
    //body: JSON.stringify(data) // Optional.
};

//尝试发送请求
$task.fetch(myRequest).then(response => {
    console.log("请求：" + response.body);
    $notify("Title", "Subtitle", "成功");
    $done();
}, reason => {
    console.log("请求错误：" + reason.error);
    $done();
});

$done({ body });
