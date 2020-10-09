@mailKontrol @smokeTest
Feature: US_04 scenario outline example mail
  Scenario Outline:mailkutusu testi
    Given https://www.glbtrader.com adresine gidilir
    And Seller Join Now linki tıklanır
    And Company Seller kutucuğu seçilir
    And E-Mail kutucuğuna "<mail>" datası gönderilir
    And Registration tuşuna basılır
    Then "<mesaj>" mesajının görüntülenip görüntülenmediğini Assert edilir
    Examples: Test data for data tables
      |mail            |mesaj                           |
      |                |Please Enter Valid Email Address|
      |ali55gmail.com  |Please Enter Valid Email Address|
      |ali55 @gmail.com|Please Enter Valid Email Address|
      |ali55@gmailcom  |Please Enter Valid Email Address|
      |ali55@gmail.com |Please Enter Valid Email Address|

