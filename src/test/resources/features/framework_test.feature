@smoketest
Feature: Framework Test
  @FrameworkTest
  Scenario: Google Test
    Given Kullanici google sitesine gider.
    And Kullanici sitenin titlesini alir.
    Then site titlesinin Google yazisinin var oldugunu assert eder.