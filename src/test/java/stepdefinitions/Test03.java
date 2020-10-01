package stepdefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.Test_Page;

public class Test03 {

    @Then("Kullanici Company Seller radio butonunun tiklanabildigini dogrular")
    public void kullanici_Company_Seller_radio_butonunun_tiklanabildigini_dogrular() {

        Test_Page test_page = new Test_Page();
        Assert.assertTrue(test_page.companySellerButton.isEnabled());


    }

}
