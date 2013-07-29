#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testMobilePhone(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnStatictext("Mobile Phones");	
		waitForFewSeconds(1)
		clickOnScroll("Apple iPhone 4");
		waitForFewSeconds(1)
		clickOnScreen(184, 235);
		waitForFewSeconds(1)
		target.frontMostApp().keyboard().typeString("2");
		waitForFewSeconds(1)
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(1)
		clickOnStatictext("Remove");
		waitForFewSeconds(1)
		clickOnScroll("Browse");
		
		UIALogger.logPass(testname);
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testMobilePhone("MobilePhoneTest");