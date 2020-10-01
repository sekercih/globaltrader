$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test01.feature");
formatter.feature({
  "name": "Seller Join Now sekmesine tiklandiginda Agent Seller buttonu aktif olmalidir",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test01"
    }
  ]
});
formatter.scenario({
  "name": "Kullanici Agent Seller radio butonu tiklanabilmeli",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test01"
    }
  ]
});
formatter.step({
  "name": "Kullanici Global Trader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Test01.kullanici_Global_Trader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Seller Join Now butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Test01.kullanici_Seller_Join_Now_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Agent Seller radio butonunun tiklanabildigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Test01.kullanici_Agent_Seller_radio_butonunun_tiklanabildigini_dogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});