$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/framework_test.feature");
formatter.feature({
  "name": "Framework Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "name": "Google Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@FrameworkTest"
    }
  ]
});
formatter.step({
  "name": "Kullanici google sitesine gider.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FrameworkTest.kullanici_google_sitesine_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sitenin titlesini alir.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FrameworkTest.kullanici_sitenin_titlesini_alir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "site titlesinin Google yazisinin var oldugunu assert eder.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FrameworkTest.site_titlesinin_Google_yazisinin_var_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});