//
//  AppCenterSampleUITests.m
//  AppCenterSampleUITests
//
//  Created by Akvelon on 4/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <XCTest/XCTest.h>
#import <AppCenterXCUITestExtensions/AppCenterXCUITestExtensions.h>

@interface AppCenterSampleUITests : XCTestCase

@end

@implementation AppCenterSampleUITests

- (void)setUp {
    [super setUp];
    self.continueAfterFailure = NO;
}

- (void)tearDown {
    [super tearDown];
}

- (void)testNavigation {
  XCUIApplication *app =  [ACTLaunch launch];
  [[app.otherElements matchingIdentifier:@"welcomeScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"buildScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"testScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"distributeScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"crashesScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"analyticsScreen"].element swipeLeft];
  [[app.otherElements matchingIdentifier:@"pushScreen"].element swipeLeft];
  [app terminate];
}

@end
