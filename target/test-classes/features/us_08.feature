@US_08
Feature: glb trader anasayfasi ulasilir olmalidir.

  @TC_08
  Scenario: glbtrader anasayfa ulasilabilir olmali
    Given Kullanici glbtrader anasayfasina gider
    Then Kullanici glbtrader anasayfasina ulasildigini dogrular

  @TC_09
  Scenario: emailbox ulasilabilir olmalidir
    Given Kullanici glbtrader anasayfasina gider
    And Kullanici Signin butonuna tiklar
    Then Kullanici emailbox'a ulasilabilir oldugunu dogrular

  @TC_10
  Scenario: password box ulasilabilir olmalidir
    Given Kullanici glbtrader anasayfasina gider
    And Kullanici sign in butonuna tiklar
    Then Kullanici password box'a ulasilabilir oldugunu dogrular

  @TC_11
  Scenario: login butonu calisiyor olmalidir
    Given Kullanici glbtrader anasayfasina gider
    And Kullanici sign in butonuna tiklar
    And Kullanici login sayfasina ulasir
    And Kullanici mail girer
    And Kullanici password girer
    And Kullanici login butonuna tiklar
    Then Kullanici login butonun calistigini dogrular

  @TC_12
  Scenario: Forgot Form sayfasina ulsilabilir olmalidir
    Given Kullanici glbtrader anasayfasina gider
    And Kullanici sign in butonuna tiklar
    And Kullanici Forgot Password buttonuna tiklar
    Then Kullanici Forgot Form sayfasina ulastigini dogrular