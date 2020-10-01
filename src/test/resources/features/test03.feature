@Test03
Feature: Seller Join Now sekmesine tiklandiginda Company Seller buttonu aktif olmalidir
  Scenario: Kullanici Company Seller radio butonu tiklanabilmeli
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    Then Kullanici Company Seller radio butonunun tiklanabildigini dogrular