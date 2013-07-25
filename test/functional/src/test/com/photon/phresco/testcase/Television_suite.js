#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testTelevision(testname){
	try{
		
		clickOnStatictext("Television");
		waitForFewSeconds(3);
		 clickOnimages("6");//review button id(6)
		waitForFewSeconds(3);
		isTextPresent("Customer Reviews");
		clickOnScroll("Browse");
		UIALogger.logPass(testname);
		
	}	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);
	}
}

function testSpecialOffers_Reviw(testname){
	try{
		
		clickOnScroll(Browse_id);
		waitForFewSeconds(2);
		clickOnScroll("Special Offers");
		waitForFewSeconds(2);
		clickOnScroll("LG Electronics 42PW350 3D Plasma HDTV");
		waitForFewSeconds(2);
		clickOnScreen(110, 235);
		waitForFewSeconds(2);
		clickOnScroll("Browse");
		waitForFewSeconds(2);
		UIALogger.logPass(testname);
		
	}	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);
	}
}

function testCameras(testname){
	try{
		//clickOnScroll(Browse_id);
		
		clickOnStatictext("Cameras");
		waitForFewSeconds(3);
		 clickOnimages("6");//review button id(6)
		target.logElementTree();
		waitForFewSeconds(3);
		isTextPresent("Customer Reviews");
		clickOnText("Post Review");
		waitForFewSeconds(3);
		target.logElementTree();
		clickOnScreen(98, 37);
		waitForFewSeconds(3);
		target.logElementTree();
		mainwindow.scrollViews()[0].webViews()[0].textFields()[0].setValue("Good Prodcut");
		waitForFewSeconds(3);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		clickOnScroll("Browse");		
		UIALogger.logPass(testname);
		
	}	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);
	}
}
testSpecialOffers_Reviw("testSpecialOffers_Reviw");
testTelevision("TelvisionTest");
testCameras("testCameras");

