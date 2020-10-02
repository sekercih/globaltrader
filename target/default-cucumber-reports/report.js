$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_01.feature");
formatter.feature({
  "name": "Seller and Company seller\u0027i secebilme",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC_0001 Kullanici seller olarak Vendor Register Form\u0027una ulasabilmeli ve Agent Seller veya Company Seller olarak secim yapabilmeli.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@agent_seller"
    }
  ]
});
formatter.step({
  "name": "Kullanici glbTrader ana sayfasindadir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_01_Stepdef.kullanici_glbTrader_ana_sayfasindadir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Seller join linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_01_Stepdef.kullanici_Seller_join_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Vendor Register Form mesajini görmeli",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_01_Stepdef.kullanici_Vendor_Register_Form_mesajini_görmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Select Vendor Type mesajini görmeli",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_01_Stepdef.kullanici_Select_Vendor_Type_mesajini_görmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Agent Seller rodio butonuna veya Company Seller rodio butonuna tiklayabilmeli",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_01_Stepdef.kullanici_Agent_Seller_rodio_butonuna_veya_Company_Seller_rodio_butonuna_tiklayabilmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});