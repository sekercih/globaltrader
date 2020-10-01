@Test04

Feature: Categories menusune tiklandiginda goruntulenen liste ile anasayfada bulunan AllCategories menusundeki liste ayni olmaidir
  Scenario: Categori listeleri birbiri ile ayni olmaldir
    Given Kullanici Global Trader sayfasina gider
    And Kullanici Seller Join Now butonuna tiklar
    And Kullanici Agent Seller butonuna tiklar
    Then Kullanici kayit formundaki Categori Listesi ila ana sayfadaki Categori Listesinin ayni oldugunu dogrular