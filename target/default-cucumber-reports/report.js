$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us02.feature");
formatter.feature({
  "name": "Agent Seller Hesap",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC_0002 Kullanici  gecerli  verilerle Agent Seller hesabi olusturabilmeli",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AgentSellerKayit"
    }
  ]
});
formatter.step({
  "name": "Kullanici Global Trader anasafasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.kullanici_Global_Trader_anasafasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Seller Join Now linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.kullanici_Seller_Join_Now_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Agent Seller Radio Butonuna Tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.kullanici_Agent_Seller_Radio_Butonuna_Tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Name check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.name_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.email_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sub domain check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.sub_domain_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mobile phone check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.mobile_phone_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Country check boxa tikla ve Country secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.country_check_boxa_tikla_ve_Country_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "State check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.state_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "City check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.city_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adres check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.adres_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Postal Code check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.enter_Postal_Code_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Categories check boxa tikla ve Categori secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.categories_check_boxa_tikla_ve_Categori_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password check boxa tikla ve doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.password_check_boxa_tikla_ve_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration Butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.registration_Butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici onay mesaji almali",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_02_StepDefinition.kullanici_onay_mesaji_almali()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.US_02_StepDefinition.kullanici_onay_mesaji_almali(US_02_StepDefinition.java:93)\r\n\tat ✽.Kullanici onay mesaji almali(file:///C:/Users/pinar/IdeaProjects/globaltrader/src/test/resources/features/us02.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});