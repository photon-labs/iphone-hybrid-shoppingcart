#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testComputer(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnStatictext("Computers");
		clickOnScroll("5");
		waitForFewSeconds(4);
		clickOnimages("7");
		waitForFewSeconds(4);
		target.frontMostApp().keyboard().typeString("9");
		waitForFewSeconds(4);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(4);
		clickOnStatictext("Remove");
		waitForFewSeconds(4);
		clickOnScroll("Browse");
		waitForFewSeconds(2);
		UIALogger.logPass(testname);
		
		}
	  	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);
		
	}
}
function testTablets(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnStatictext("Tablets");
		clickOnScroll("5");
		waitForFewSeconds(3);
		clickOnimages("7");
		waitForFewSeconds(2);
		target.frontMostApp().keyboard().typeString("0");
		waitForFewSeconds(2);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(2);
		clickOnStatictext("Remove");
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
function testAudioDevices(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnStatictext("Audio Devices");
		clickOnScroll("5");
		waitForFewSeconds(3);
		clickOnimages("7");
		waitForFewSeconds(2);
		target.frontMostApp().keyboard().typeString("5");
		waitForFewSeconds(2);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(3);
		clickOnStatictext("Remove");
		waitForFewSeconds(3);
		clickOnScroll("Browse");
		UIALogger.logPass(testname);
		
		}
	  	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);
		
	}
}
testComputer("ComputerTest");
testTablets("TabletsTest");
testAudioDevices("AudioDevicesTest")