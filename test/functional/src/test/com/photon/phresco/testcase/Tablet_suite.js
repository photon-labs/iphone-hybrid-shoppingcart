/*
 * PHR_IphoneHybrid
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testTablet(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnScroll(Tablet_id);
		clickOnScreen(110,127);
		waitForFewSeconds(3);
		clickOnScreen(184,231);
		waitForFewSeconds(3);
		clickOnScreen(259,223);
		waitForFewSeconds(3);
		clickOnScroll(UpdateCart_id);
		waitForFewSeconds(3);
		clickOnScroll(Checkout_id);
		waitForFewSeconds(3);
		clickOnScreen(259,223);
		clickOnScroll(MyCart_id);
		waitForFewSeconds(1);
		clickOnScreen(259,223);
		clickOnScroll(Remove_id);
		waitForFewSeconds(1);		
		clickOnScroll(Back_id);
		UIALogger.logPass(testname);
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testTablet("TabletTest");