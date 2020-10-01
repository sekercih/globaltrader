package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.Test_Page;
import utilities.Driver;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.TreeSet;

public class Test02<set1> {

    Test_Page test_page = new Test_Page();

    @Given("Kullanici Agent Seller butonuna tiklar")
    public void kullanici_Agent_Seller_butonuna_tiklar() {

        test_page.agentSellerRadioButton.click();
    }

    @Then("Kullanici kayit formundaki Categori Listesi ila ana sayfadaki Categori Listesinin ayni oldugunu dogrular")
    public void kullanici_kayit_formundaki_Categori_Listesi_ila_ana_sayfadaki_Categori_Listesinin_ayni_oldugunu_dogrular() {

        Select select1 = new Select(test_page.categories);
        List<WebElement> kayitFormList =   select1.getOptions();

        for(WebElement w:kayitFormList){
            System.out.println(w.getText());
        }

        test_page.globalTraderButton.click();


        Select select2 = new Select(test_page.allCategories);
        List<WebElement> anaSayfaList = select2.getOptions();
        for(WebElement w:anaSayfaList){
            System.out.println(w.getText());
        }

        Assert.assertTrue(kayitFormList.equals(anaSayfaList));
        // her iki kategorideki listeler aynı değil. Ana sayfa listenin içinde fazladan All Categories seçeneği de gömülmüş.
        // Bu nedenle listeler aynı çıkmıyor. Bunu bunu bir bug olarak değerlendiriyorum
        // ilgili developer ın All Categories seçeneğini listeden çıkarıp üst başlık olarak yazması gerekiyor
        
    }
}
