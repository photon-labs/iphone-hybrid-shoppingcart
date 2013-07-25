#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testAudioDevice(testname){
	try{
		
		//clickOnScroll(Browse_id);
		clickOnStatictext("Audio Devices");
		waitForFewSeconds(1)
		clickOnScroll("Pearstone B&H Kit Vocal Microphone Accessory Bundle - Deluxe");	
		waitForFewSeconds(2)
		clickOnimages("7");
		waitForFewSeconds(2)
		target.frontMostApp().keyboard().typeString("3");
		waitForFewSeconds(2)
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(2)
		clickOnStatictext("Remove");
		waitForFewSeconds(2)
		clickOnScroll("Browse");		
		waitForFewSeconds(5)
		UIALogger.logPass(testname);
		
		
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail(testname);	
	}
}
testAudioDevice("AudioDeviceTest");