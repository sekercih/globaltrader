$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_04.feature");
formatter.feature({
  "name": "scenario outline example mail",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.scenarioOutline({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.step({
  "name": "E-Mail kutucuğuna \"\u003cmail\u003e\" datası gönderilir",
  "keyword": "And "
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cmesaj\u003e\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mail",
        "mesaj"
      ]
    },
    {
      "cells": [
        "",
        "Please Enter Valid Email Address"
      ]
    },
    {
      "cells": [
        "ali55gmail.com",
        "Please Enter Valid Email Address"
      ]
    },
    {
      "cells": [
        "ali55 @gmail.com",
        "Please Enter Valid Email Address"
      ]
    },
    {
      "cells": [
        "ali55@gmailcom",
        "Please Enter Valid Email Address"
      ]
    },
    {
      "cells": [
        "ali55@gmail.com",
        "Please Enter Valid Email Address"
      ]
    }
  ]
});
formatter.scenario({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.https_www_glbtrader_com_adresine_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.seller_Join_Now_linki_tıklanır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.company_Seller_kutucuğu_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Mail kutucuğuna \"\" datası gönderilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.e_Mail_kutucuğuna_datası_gönderilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.registration_tuşuna_basılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(US_04_StepDefination.java:41)\r\n\tat ✽.\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir(file:///C:/Users/Hans/IdeaProjects/globaltrader/src/test/resources/features/us_04.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.https_www_glbtrader_com_adresine_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.seller_Join_Now_linki_tıklanır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.company_Seller_kutucuğu_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Mail kutucuğuna \"ali55gmail.com\" datası gönderilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.e_Mail_kutucuğuna_datası_gönderilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.registration_tuşuna_basılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.https_www_glbtrader_com_adresine_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.seller_Join_Now_linki_tıklanır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.company_Seller_kutucuğu_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Mail kutucuğuna \"ali55 @gmail.com\" datası gönderilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.e_Mail_kutucuğuna_datası_gönderilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.registration_tuşuna_basılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.https_www_glbtrader_com_adresine_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.seller_Join_Now_linki_tıklanır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.company_Seller_kutucuğu_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Mail kutucuğuna \"ali55@gmailcom\" datası gönderilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.e_Mail_kutucuğuna_datası_gönderilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.registration_tuşuna_basılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "mailkutusu testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@mailKontrol"
    }
  ]
});
formatter.step({
  "name": "https://www.glbtrader.com adresine gidilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.https_www_glbtrader_com_adresine_gidilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join Now linki tıklanır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.seller_Join_Now_linki_tıklanır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company Seller kutucuğu seçilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.company_Seller_kutucuğu_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "E-Mail kutucuğuna \"ali55@gmail.com\" datası gönderilir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.e_Mail_kutucuğuna_datası_gönderilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration tuşuna basılır",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.registration_tuşuna_basılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.US_04_StepDefination.mesajının_görüntülenip_görüntülenmediğini_Assert_edilir(US_04_StepDefination.java:41)\r\n\tat ✽.\"Please Enter Valid Email Address\" mesajının görüntülenip görüntülenmediğini Assert edilir(file:///C:/Users/Hans/IdeaProjects/globaltrader/src/test/resources/features/us_04.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});