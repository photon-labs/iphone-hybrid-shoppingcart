#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"




function testHelloWorld(testname){
	
try
    {  
	
	isStaticTextPresent("HelloWorld !");
	UIALogger.logPass(testname);
	
}
    catch(err)
    {
        UIALogger.logMessage("There is an error") ;
        UIALogger.logFail(testname);
		captureScreenshot("HelloWorld");
		
    }
}

testHelloWorld("HelloWorld");
