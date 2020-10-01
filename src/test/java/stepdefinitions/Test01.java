package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.Test_Page;
import utilities.Driver;

public class Test01 {

    Test_Page test_page = new Test_Page();
    @Given("Kullanici Global Trader sayfasina gider")
    public void kullanici_Global_Trader_sayfasina_gider() {

        Driver.getDriver().get("https://www.glbtrader.com");

    }

    @Given("Kullanici Seller Join Now butonuna tiklar")
    public void kullanici_Seller_Join_Now_butonuna_tiklar() {
        test_page.sellerJoinButton.click();

    }
    @Then("Kullanici Agent Seller radio butonunun tiklanabildigini dogrular")
    public void kullanici_Agent_Seller_radio_butonunun_tiklanabildigini_dogrular() {
        Assert.assertTrue(test_page.agentSellerRadioButton.isEnabled());
    }

}
