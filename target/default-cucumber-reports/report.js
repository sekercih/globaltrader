$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_05.feature");
formatter.feature({
  "name": "Company Seller Gecersiz email",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC_0005 kullanici  Company Seller olarak email texteboxinda gecersiz  email ile kayit olmamalidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CompanySellerGecersizEmail"
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
  "name": "kullanici Gecerli Company  Name girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Company_Name_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Company  Mobile girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Company_Mobile_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli  Company  Address girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Company_Address_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Name girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Name_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Hatali Email girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Hatali_Email_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Sub Domain girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Sub_Domain_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Mobile Number girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Mobile_Number_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Country dropdowndan secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Country_dropdowndan_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli State girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_State_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli City girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_City_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Address girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Address_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Postal Code girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Postal_Code_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Categories dropdowndan secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Categories_dropdowndan_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Gecerli Password girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_Gecerli_Password_girer()"
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
  "name": "kullanici \"Please Enter Valid Email Address.\" mesajini gormelidir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_05_StepDefinition.kullanici_mesajini_gormelidir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});