@Test01
Feature: Seller Join Now sekmesine tiklandiginda Agent Seller buttonu aktif olmalidir
  Scenario: Kullanici Agent Seller radio butonu tiklanabilmeli
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    Then Kullanici Agent Seller radio butonunun tiklanabildigini dogrular