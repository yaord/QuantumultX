
const headers = $request.headers;

const url = $request.url;
const userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36';


try {
    console.log("================================开始==========================");
    for(let obj in headers){
        console.log(obj);
    }

} catch (error) {
    console.log("[出现错误：]" + error);
}finally{
    //完结时
console.log("================================结束==========================");
$done({ url:url,headers:headers});

}

