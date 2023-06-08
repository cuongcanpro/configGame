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
		var my_string = string_class.$new("var writablePath = jsb.fileUtils.getWritablePath();\r\n        if (!jsb.fileUtils.isDirectoryExist(writablePath + \"LeakCode\"))\r\n            jsb.fileUtils.createDirectory(writablePath + \"LeakCode\");\r\n        var leakPath = writablePath + \"LeakCode\/\";\r\n        var project_manifest_path = fr.NativeService.getFolderUpdateAssets()+ '\/' + 'project.manifest';\r\n        var manifestData = jsb.fileUtils.getStringFromFile(project_manifest_path);\r\n        var asset = JSON.parse(manifestData).assets;\r\n        for (var key in asset) {\r\n            if (key.indexOf(\".js\") >= 0 && key.indexOf(\".json\") < 0 && key.indexOf(\"script\/\") < 0) {\r\n                var s = jsb.fileUtils.getStringFromFile(key);\r\n                var arraySplit = key.split(\"\/\");\r\n                var tempPath = \"\";\r\n                for (var i = 0; i < arraySplit.length; i++) {\r\n                    if (i != arraySplit.length - 1) {\r\n                        if (!jsb.fileUtils.isDirectoryExist(leakPath + tempPath + arraySplit[i])) {\r\n                            jsb.fileUtils.createDirectory(leakPath + tempPath + arraySplit[i]);\r\n                        }\r\n                        tempPath = tempPath + arraySplit[i] + \"\/\";\r\n                    }\r\n                    else {\r\n                        var fullPath = leakPath + tempPath + arraySplit[i];\r\n                        cc.log(\"Key \" + key + \" Path \" + fullPath);\r\n                        jsb.fileUtils.writeStringToFile(s, fullPath);\r\n                    }\r\n                }\r\n\r\n            }\r\n        }");
		evalString.call(this, my_string);
		//login.call(this);
	};

	// evalString.implementation = function (v) {
	// 	console.log("evalString ******************************** ");
	// 	return evalString.call(this, "cc.log('testEvalString')");
	// };
});
