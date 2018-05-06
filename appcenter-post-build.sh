# Start async test run and fetch the test run
TEST_RUN=$(appcenter test run xcuitest --app "Build2018/ac-github-ios" --devices "Build2018/release" --test-series master --locale en_US --build-dir DerivedData/Build/Products/Release-iphoneos --token $APP_CENTER_TOKEN --async | pcregrep -o1 -M 'Test run id: "(.+)"');
echo "Started new test run: $TEST_RUN"

# Trigger Logic App to monitor test run
echo "Triggering LogicApp flow...";

# All paramaters here should be replaced with environment variables on the branch configuration
curl -H "Content-Type: application/json" \
-X POST -d "{\"token\":\"$APP_CENTER_TOKEN\"," \
           "\"view_url\":\"/orgs/$ORG_NAME/apps/$APP_NAME]/test/runs/$TEST_RUN\"," \
           "\"test_run\":\"/$ORG_NAME/$APP_NAME/test_runs/$TEST_RUN\"}" \
           "$LOGIC_APP_URL"