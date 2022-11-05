const url = $request.url;
let body = $response.body;
console.log("=================================开始");
try {
    let obj = JSON.parse(body);
    
    console.log(obj.data);
    console.log(obj.paging);
    if(obj.data) obj.data=[];
    if(obj.paging) obj.paging=[];

    
    body = JSON.stringify(obj);
} catch (error) {
    console.log("错误：" + error);
} finally {
    console.log("=================================结束");
    //完结时
    $done({ body });
}