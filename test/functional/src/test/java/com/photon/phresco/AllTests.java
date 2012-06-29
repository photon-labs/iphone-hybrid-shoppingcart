/*
 * ###
 * PHR_IphoneHybrid
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
/*package com.photon.phresco;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ AccessoriesTest.class,  AudioDeviceTest.class,
		CameraTest.class, ComputerTest.class, MobileTest.class,
		MoviesTest.class, Mp3Test.class, RegisterTest.class, TabletTest.class,
		TelevisionTest.class, VideogamesTest.class })
public class AllTests {

}*/
package com.photon.phresco;

import junit.framework.Test;
import junit.framework.TestSuite;

public class AllTests {

	public static Test suite() {
		TestSuite suite = new TestSuite(AllTests.class.getName());
		
		// $JUnit-BEGIN$
		suite.addTestSuite(RegisterTest.class);
		suite.addTestSuite(TelevisionTest.class);
		suite.addTestSuite(ComputerTest.class);
		suite.addTestSuite(MobileTest.class);
		suite.addTestSuite(AudioDeviceTest.class);
		suite.addTestSuite(TabletTest.class);
		suite.addTestSuite(MoviesTest.class);
		suite.addTestSuite(Mp3Test.class);
		suite.addTestSuite(VideogamesTest.class);
		suite.addTestSuite(AccessoriesTest.class);
		// $JUnit-END$
		return suite;
	}

}

