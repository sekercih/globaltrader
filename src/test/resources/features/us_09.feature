@US009
Feature: US 09 All Categories kontrolü
  @Test01
  Scenario: TC01 Kullanici Agent Seller radio butonu tiklanabilmeli
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    Then Kullanici Agent Seller radio butonunun tiklanabildigini dogrular

  @Test02
  Scenario: TC02 Categori listeleri birbiri ile ayni olmaldir
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    And Kullanici Agent Seller butonuna tiklar
    Then Kullanici kayit formundaki Categori Listesi ila ana sayfadaki Categori Listesinin ayni oldugunu dogrular

  @Test03
  Scenario: TC03 Kullanici Company Seller radio butonu tiklanabilmeli
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    Then Kullanici Company Seller radio butonunun tiklanabildigini dogrular

  @Test04
  Scenario: TC04 Categori listeleri birbiri ile ayni olmaldir
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    And Kullanici Agent Seller butonuna tiklar
    Then Kullanici kayit formundaki Categori Listesi ila ana sayfadaki Categori Listesinin ayni oldugunu dogrular