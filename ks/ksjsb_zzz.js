/*
快手极速版-周周赚十五万金币
环境变量添加 ksjsb_zzz 设置指定助力码
抓包教程地址：http://cxgc.top/archives/ksjsb
欢迎填我邀请码：791642607
交流群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-周周赚十五万金币
2 0 0,10,16,22 * * * https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js, tag=快手极速版-周周赚十五万金币, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "2 0 0,10,16,22 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js,tag=快手极速版-周周赚十五万金币
===================================Surge================================
快手极速版-周周赚十五万金币 = type=cron,cronexp="2 0 0,10,16,22 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js
====================================小火箭=============================
快手极速版-周周赚十五万金币 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js, cronexpr="2 0 0,10,16,22 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-周周赚十五万金币');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./ksCookie.js') : '';
let ksjsb_zzz = $.isNode() ? (process.env.ksjsb_zzz ? process.env.ksjsb_zzz : "") : ($.getdata('ksjsb_zzz') ? $.getdata('ksjsb_zzz') : "")
let cookiesArr = [], cookie = '', message;
const fetch = require('node-fetch')
let assistanceId = ''
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
let github = true
function gettext() {
    return {
        url: `https://jdwxx.github.io/jd_job/ksjsb.json`,
        timeout: 10000
    }
}
async function getHub(){
    return new Promise(resolve => {
        setTimeout(() => {
            $.get(gettext(), (err, resp, data) => {
                try {
                    if(data){
                        data = JSON.parse(data)
                        assistanceId = data.assistanceId
                    }
                } catch (e) {
                    github = false
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            })
        })
    })
}

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取快手账号 ksjsbCookie \n直接使用抓包工具抓包', 'http://cxgc.top/archives/ksjsb', {"open-url": "http://cxgc.top/archives/ksjsb"});
        return;
    }
    console.log("快手抓取ck教程：http://cxgc.top/archives/ksjsb")
    console.log("不偷ck，只拿第一个号助力")
    if(ksjsb_zzz == ""){
        console.log("未读取到助力码，将自动助力第一个账号")
        console.log("环境变量添加 ksjsb_zzz 设置指定助力码")
        console.log("")
    }
    await getHub()
    if(!github){
        console.log("\n异常错误,请稍候重试\n")
        return;
    }
    $.zlm = ''
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
            message = '';
            console.log(`******开始【快手账号${$.index}】*********`);
            let ksck = cookiesArr[i]
            if(";" != ksck.substring(ksck.length - 1,ksck.length)){
                ksck = ksck + ";"
            }
            ksck = ksck.replace("\n","")
            let Cookiee = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_915d04d3e08b51be; c=XIAOMI; ver=10.2; appver=10.2.41.3075; language=zh-cn; " +
                "countryCode=CN; sys=ANDROID_11; mod=Xiaomi%28M2102K1AC%29; net=WIFI; deviceName=Xiaomi%28M2102K1AC%29; isp=CUCC; ud=2679516878; did_tag=2; " +
                "egid=DFPDD30FAAB20CE7CE0D47D8521CAA763C67A1C56851A62DB45407590BDC794C; thermal=10000; kcv=1455; app=0; bottom_navigation=true; oDid=TEST_ANDROID_497a643a1b2607a2; " +
                "android_os=0; boardPlatform=lahaina; androidApiLevel=30; newOc=XIAOMI; slh=0; country_code=cn; nbh=56; hotfix_ver=; did_gt=1649573954019; max_memory=256; oc=XIAOMI; " +
                "sh=3200; app_status=3; ddpi=560; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+Snapdragon+8350; is_background=0; sw=1440; ftt=K-T-T; apptype=22; abi=arm64; " +
                "userRecoBit=0; device_abi=arm64; totalMemory=7266; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_670069f0de42ba0c; sbh=137; darkMode=false; " +
                "client_key=2ac2a76d; " +
                "keyconfig_state=2; sid=41166352-9e35-48a0-b668-5179f79a1e3f; cold_launch_time_ms=1649581649095; " +
                "__NSWJ=UMY1j7J8Z5rgx8UlK2T0%2BnS9TO44%2FWTAklpXVnqfjSrSFrTT1pI%2FIYQx6%2BNs739AAAAAAQ%3D%3D;" + ksck
            try {
                console.log("去助力 -> " + assistanceId)
                await fetch("https://nebula.kuaishou.com/rest/zt/encourage/assistance/friendAssist", {
                    "headers": {
                        "Host": "nebula.kuaishou.com",
                        "Connection": "keep-alive",
                        "Content-Length": 35,
                        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
                        "content-type": "application/json",
                        "Accept": "*/*",
                        "Origin": "https://nebula.kuaishou.com",
                        "X-Requested-With": "com.kuaishou.nebula",
                        "Sec-Fetch-Site": "same-origin",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Dest": "empty",
                        "Referer": "https://nebula.kuaishou.com/nebula/daily-invite?fid=2679516878&cc=panelPoster&shareMode=APP&followRefer=151&originShareId=16878110569540&shareMethod=PICTURE&kpn=NEBULA&subBiz=WEEK&shareId=16878110569540&shareObjectId=" + assistanceId + "&shareUrlOpened=0&timestamp=1649585686326&layoutType=4&source=RETURN_POPUP&login_extra=ENLIVEN_POPULARITY_DIALOG",
                        "Accept-Encoding": "gzip, deflate",
                        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                        "Cookie": Cookiee
                    },
                    "body": '{"assistanceId":' + assistanceId + '}',
                    "method": "POST"
                }).then(res => res.json())
                    .then(json => {
                        console.log("助力结果:" + json.msg)
                        console.log()
                    });

                await $.wait(1000)
                await fetch("https://nebula.kuaishou.com/rest/zt/encourage/assistance/detail?assistanceMetaId=2", {
                    "headers": {
                        "Host": "nebula.kuaishou.com",
                        "Connection": "keep-alive",
                        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
                        "content-type": "application/json",
                        "Accept": "*/*",
                        "X-Requested-With": "com.kuaishou.nebula",
                        "Sec-Fetch-Site": "same-origin",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Dest": "empty",
                        "Referer": "https://nebula.kuaishou.com/nebula/daily-cash/home?layoutType=4&source=CASH_PAGE_TASK",
                        "Accept-Encoding": "gzip, deflate",
                        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                        "Cookie": Cookiee
                    },
                    "method": "GET"
                }).then(res => res.json())
                    .then(json => {
                        console.log("快手账号:" + json.assistanceInfo.createNickName)
                        console.log("邀请人数:" + json.assistanceInfo.assistedCount)
                        console.log("累计金额:" + json.assistanceInfo.accumulatedAmount)
                        console.log("累计取款:" + json.assistanceInfo.accumulatedWithdraw)
                        console.log("当前账号助力码:" + json.assistanceInfo.assistanceId)
                        if(ksjsb_zzz != ""){
                            $.zlm = ksjsb_zzz
                            assistanceId = ksjsb_zzz
                        }
                        if(ksjsb_zzz == "" && $.index == 1 && json.assistanceInfo && json.assistanceInfo.assistanceId){
                            $.zlm = json.assistanceInfo.assistanceId
                            assistanceId = $.zlm
                            console.log("后面的号都会助力:" + $.zlm)
                        }
                    });

            }catch (e){

            }
            if($.zlm == ''){
                console.log("第一个账号未获取到助力码,请检查 ksjsbCookie  参数格式，为防止后面账号助力到我，结束运行")
                break
            }
            await $.wait(1000)
        }
    }

})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
