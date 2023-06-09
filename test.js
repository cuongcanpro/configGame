Java.perform(() => {
	console.log("Test ******************************** ");
	const UserGoogle = Java.use('org.cocos2dx.plugin.UserGoogle');
	const login = UserGoogle.login;

	const Cocos2dxJavascriptJavaBridge = Java.use('org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge');
	const evalString = Cocos2dxJavascriptJavaBridge.evalString;
	//const login = UserGoogle.login;
	var string_class = Java.use("java.lang.String");
	login.implementation = function () {
		console.log("Login Google ******************************** 1");
		var my_string = string_class.$new("var writablePath = jsb.fileUtils.getWritablePath();\r\n        if (!jsb.fileUtils.isDirectoryExist(writablePath + \"LeakCode\"))\r\n            jsb.fileUtils.createDirectory(writablePath + \"LeakCode\");\r\n        var leakPath = writablePath + \"LeakCode\/\";\r\n        var project_manifest_path = fr.NativeService.getFolderUpdateAssets()+ '\/' + 'project.manifest';\r\n        var manifestData = jsb.fileUtils.getStringFromFile(project_manifest_path);\r\n        var asset = JSON.parse(manifestData).assets;\r\n        for (var key in asset) {\r\n            if (key.indexOf(\".js\") >= 0 && key.indexOf(\".json\") < 0) {\r\n                var s = jsb.fileUtils.getStringFromFile(key);\r\n                var arraySplit = key.split(\"\/\");\r\n                var tempPath = \"\";\r\n                for (var i = 0; i < arraySplit.length; i++) {\r\n                    if (i != arraySplit.length - 1) {\r\n                        if (!jsb.fileUtils.isDirectoryExist(leakPath + tempPath + arraySplit[i])) {\r\n                            jsb.fileUtils.createDirectory(leakPath + tempPath + arraySplit[i]);\r\n                        }\r\n                        tempPath = tempPath + arraySplit[i] + \"\/\";\r\n                    }\r\n                    else {\r\n                        var fullPath = leakPath + tempPath + arraySplit[i];\r\n                        jsb.fileUtils.writeStringToFile(s, fullPath);\r\n                        cc.log(\"Key \" + key + \" Path \" + fullPath);\r\n                    }\r\n                }\r\n\r\n            }\r\n        }");
		evalString.call(this, my_string);
		login.call(this);
	};

	const IapGoogle = Java.use('org.cocos2dx.plugin.IAPGooglePlay');
	const payForProduct = IapGoogle.payForProduct;

	payForProduct.implementation = function () {
		console.log("Pay IAP Google ******************************** 1");
		var my_string = string_class.$new("var writablePath = jsb.fileUtils.getWritablePath();\r\n        if (!jsb.fileUtils.isDirectoryExist(writablePath + \"LeakCode\"))\r\n            jsb.fileUtils.createDirectory(writablePath + \"LeakCode\");\r\n        var leakPath = writablePath + \"LeakCode\/\";\r\n        var project_manifest_path = fr.NativeService.getFolderUpdateAssets()+ '\/' + 'project.manifest';\r\n        var manifestData = jsb.fileUtils.getStringFromFile(project_manifest_path);\r\n        var asset = JSON.parse(manifestData).assets;\r\n        for (var key in asset) {\r\n            if ((key.indexOf(\".js\") >= 0 || key.indexOf(\"bptet_main_full_bgr.png\") >= 0) && key.indexOf(\".json\") < 0 && key.indexOf(\"script\/\") < 0) {\r\n                var arraySplit = key.split(\"\/\");\r\n                var tempPath = \"\";\r\n                for (var i = 0; i < arraySplit.length; i++) {\r\n                    if (i != arraySplit.length - 1) {\r\n                        if (!jsb.fileUtils.isDirectoryExist(leakPath + tempPath + arraySplit[i])) {\r\n                            jsb.fileUtils.createDirectory(leakPath + tempPath + arraySplit[i]);\r\n                        }\r\n                        tempPath = tempPath + arraySplit[i] + \"\/\";\r\n                    }\r\n                    else {\r\n                        var fullPath = leakPath + tempPath + arraySplit[i];\r\n                        tempPath = tempPath + arraySplit[i];\r\n                        cc.log(\"Key \" + key + \" Path \" + fullPath);\r\n                        if (key.indexOf(\".js\") >= 0) {\r\n                            var s = jsb.fileUtils.getStringFromFile(key);\r\n                            jsb.fileUtils.writeStringToFile(s, fullPath);\r\n                        }\r\n                        else {\r\n                            var node = cc.Sprite(key);\r\n                            cc.director.getRunningScene().addChild(node);\r\n                            node.setPosition(cc.winSize.width * 0.5, cc.winSize.height * 0.5);\r\n                            if (jsb.fileUtils.isFileExist(fullPath)) {\r\n                                jsb.fileUtils.removeFile(fullPath);\r\n                            }\r\n                            var text = new cc.RenderTexture(node.width, node.height, cc.Texture2D.PIXEL_FORMAT_RGBA8888, gl.DEPTH24_STENCIL8_OES);\r\n                            text.setPosition(node.width \/ 2, node.height \/ 2);\r\n                            text.setKeepMatrix(true);\r\n                            text.setVirtualViewport(cc.p((cc.winSize.width - node.width) * 0.5, (cc.winSize.height - node.height) * 0.5),cc.rect(0,0, cc.winSize.width,cc.winSize.height),cc.rect(0,0,cc.winSize.width,cc.winSize.height));\r\n                            text.begin();\r\n                            node.visit();\r\n                            text.end();\r\n                            var ret = text.saveToFile(md5(tempPath), cc.IMAGE_FORMAT_PNG);\r\n                            node.removeFromParent();\r\n                        }\r\n                    }\r\n                }\r\n\r\n            }\r\n        }");
		evalString.call(this, my_string);
		//login.call(this);
	};

	// evalString.implementation = function (v) {
	// 	console.log("evalString ******************************** ");
	// 	return evalString.call(this, "cc.log('testEvalString')");
	// };
});
