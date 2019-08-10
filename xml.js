//都需要root权限
runtime.requestPermissions([android.permission.WRITE_EXTERNAL_STORAGE]);
runtime.requestPermissions([android.permission.READ_EXTERNAL_STORAGE]);
//根据其他获取单个节点,type填写属性类型,name填写属性值
//开发者QQ2635760633，在线接单
function GetnodeByEelement(type,name){
    ////system/bin/uiautomator dump /storage/emulated/0/脚本/ui.xml
    result = shell("system/bin/uiautomator dump",true);    
    log(result);
    xmllist = files.read("/sdcard/window_dump.xml").match(/<node ([^<]+)>/g)
    for(i = 1; i < xmllist.length;i++){
        if (  xmllist[i].includes(type+'="'+name+'"') ){
            
           return xmllist[i]
        }
    }
}

//根据其他获取单个节点,type填写属性类型,name填写属性值
function GetnodesByEelement(type,name){
    ////system/bin/uiautomator dump /storage/emulated/0/脚本/ui.xml
    lis = new Array();
    result = shell("system/bin/uiautomator dump",true);    
    log(result);
    xmllist = files.read("/sdcard/window_dump.xml").match(/<node ([^<]+)>/g)
    for(i = 1; i < xmllist.length;i++){
        if (  xmllist[i].includes(type+'="'+name+'"') ){
           lis.push(xmllist[i])       
        }
    }
    return lis
}

//根据其他获取单个节点,type填写属性类型,name填写属性值，返回['0','0','0','0']
function GetboundByEelement(type,name){
    ////system/bin/uiautomator dump /storage/emulated/0/脚本/ui.xml
    result = shell("system/bin/uiautomator dump",true);    
    log(result);
    xmllist = files.read("/sdcard/window_dump.xml").match(/<node ([^<]+)>/g)
    for(i = 1; i < xmllist.length;i++){
        if (  xmllist[i].includes(type+'="'+name+'"') ){
           return xmllist[i].match(/bounds="[^"]*"/g).toString().replace('bounds=', '').replace('"[','').replace(']"','').replace("][",",").split(",")
        }
    }
}

//根据其他获取单个节点,type填写属性类型,name填写属性值[['0','0','0','0'],['0','0','0','0'],......]
function GetboundsByEelement(type,name){
    ////system/bin/uiautomator dump /storage/emulated/0/脚本/ui.xml
    lis = new Array();
    result = shell("system/bin/uiautomator dump",true);    
    log(result);
    xmllist = files.read("/sdcard/window_dump.xml").match(/<node ([^<]+)>/g)
    for(i = 1; i < xmllist.length;i++){
        if (  xmllist[i].includes(type+'="'+name+'"') ){
           lis.push(xmllist[i].match(/bounds="[^"]*"/g).toString().replace('bounds=', '').replace('"[','').replace(']"','').replace("][",",").split(","));
        }
    }
    return lis
}
