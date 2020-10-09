$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_03_company_seller_join_now.feature");
formatter.feature({
  "name": "US_03_CompanySeller",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Company_seller_join"
    },
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "name": "TC_0003 kullanici gecerli verilerle Company Seller hesabi olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Company_seller_join"
    },
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "kullanici \"http://glbtrader.com/\" sayfasindadir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_sayfasindadir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici  Seller Join Now butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Seller_Join_Now_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Company Seller sekmesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Company_Seller_sekmesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Company Name girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Company_Name_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Company Mobile girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Company_Mobile_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Company Address girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Company_Address_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Name girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Name_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Email girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Email_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Sub Domain girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Sub_Domain_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Mobile Number girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Mobile_Number_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Country dropdowndan secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Country_dropdowndan_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici State girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_State_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici City girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_City_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Address girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Address_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Postal Code girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Postal_Code_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Categories dropdowndan secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Categories_dropdowndan_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Password girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Password_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Registration butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_Registration_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"Thank you to join our team. You are Registered Successfully.\" masajini gormelidir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_masajini_gormelidir(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class \u003d \u0027text-center\u0027][2]\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027XYZ-MacBook-Pro.fritz.box\u0027, ip: \u0027fd00:0:0:0:40a:744e:8f8b:1e84%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/y7/wc9187xn7pj...}, goog:chromeOptions: {debuggerAddress: localhost:51749}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ba90732aa2cfba561e85197d18c7a358\n*** Element info: {Using\u003dxpath, value\u003d//p[@class \u003d \u0027text-center\u0027][2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat stepdefinitions.US_03_CompanySellerJoinStepDefinitions.kullanici_masajini_gormelidir(US_03_CompanySellerJoinStepDefinitions.java:95)\n\tat ✽.kullanici \"Thank you to join our team. You are Registered Successfully.\" masajini gormelidir(file:///Users/Abc/IdeaProjects/globaltrader/src/test/resources/features/US_03_company_seller_join_now.feature:22)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});