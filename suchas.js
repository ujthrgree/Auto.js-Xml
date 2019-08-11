    
    //这里将aujtojs的包复制进来 Tap函数看下面
    
    
    log( GetboundsByEelement("resource-id","xxx"));
    all = GetboundsByEelement("resource-id","xxx");
    for (i=1; i <= all.length; i++){
        log(all[i])
        log((parseInt(all[i][0])+parseInt(all[i][2]))/2+ ","+(parseInt(all[i][1])+parseInt(all[i][3]))/2)
        Tap((parseInt(all[i][0])+parseInt(all[i][2]))/2,(parseInt(all[i][1])+parseInt(all[i][3]))/2)
        sleep(rest);
        id("input").findOne().setText(sendingText);
        sleep(rest);
        nd = GetboundByEelement("text","xxx");
        Tap((parseInt(nd[0])+parseInt(nd[2]))/2,(parseInt(nd[1])+parseInt(nd[3]))/2)
        sleep(rest);
        nd = GetboundByEelement("content-desc","xxx");
        Tap((parseInt(nd[0])+parseInt(nd[2]))/2,(parseInt(nd[1])+parseInt(nd[3]))/2)
        sleep(rest);
    }
