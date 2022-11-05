//$notify("知乎","回答","新回答")
console.log("+++++++++++++++++++++++++++开始++++++++++++++++++++++++++++");

const url = $request.url;
let body = $response.body;
const headRegx = /\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\"(\s)*\>/;
const allRegex = /\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\"(\s)*\>(.|\n)+\<(\s)*div(\s)*class(\s)*\=(\s)*\"ListItemLoading\-img\"(\s)*\>(\s)*\<\/div\>(\s)*\<\/div\>(\s)*\<\/div\>/;
body = filterAD();


function filterAD() {
    try {
        let matchStr = body.match(headRegx);
        if(matchStr == null | matchStr == undefined | matchStr == "") {
            console.log("1.未找到最外层元素 class:ListItemLoading");
            return body;
        }

        let target = body.match(allRegex)[0];
        console.log("2.找到目标：" + target);
        //只替换一次
        return body.replace(target,"");
    } catch (error) {
        console.log("错误：" + error);
    }
    
}

console.log("+++++++++++++++++++++++++++结束++++++++++++++++++++++++++++");
//完结时
$done({ body });



/*

    参考文档：https://zhuanlan.zhihu.com/p/352724534
 
*/