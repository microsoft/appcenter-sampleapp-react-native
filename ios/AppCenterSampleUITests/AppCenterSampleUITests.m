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
    [ACTLaunch launch];
}

- (void)tearDown {
    [super tearDown];
}

- (void)testNavigation {
  XCUIApplication *app = [ACTLaunch launchApplication:[[XCUIApplication alloc] init]];

  [/*@START_MENU_TOKEN@*/app.otherElements[@"welcomeScreen"]/*[["app","[",".otherElements[@\"welcomeScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"buildScreen"]/*[["app","[",".otherElements[@\"buildcreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"testScreen"]/*[["app","[",".otherElements[@\"testScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"distributeScreen"]/*[["app","[",".otherElements[@\"distributeScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"crashesScreen"]/*[["app","[",".otherElements[@\"crashesScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"analyticsScreen"]/*[["app","[",".otherElements[@\"analyticsScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
  [/*@START_MENU_TOKEN@*/app.otherElements[@"pushScreen"]/*[["["app","[",".otherElements[@\"pushScreen\"]"],[[[-1,0,1]],[[1,8,3],[-1,3,3],[1,2,2]],[[1,8,3],[-1,3,3]],[[-1,7],[-1,6],[1,5,5],[-1,4,4]],[[-1,7],[-1,6],[1,5,5]],[[-1,7],[-1,6]]],[0,0,3,0]]@END_MENU_TOKEN@*/ swipeLeft];
}

@end
