package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.Driver;

public class FrameworkTest {
    String title;

    @Given("Kullanici google sitesine gider.")
    public void kullanici_google_sitesine_gider() {
        Driver.getDriver().get("https://www.google.com");
    }

    @Given("Kullanici sitenin titlesini alir.")
    public void kullanici_sitenin_titlesini_alir() {
        title = Driver.getDriver().getTitle();
    }

    @Then("site titlesinin Google yazisinin var oldugunu assert eder.")
    public void site_titlesinin_Google_yazisinin_var_oldugunu_assert_eder() {
        Assert.assertTrue(title.contains("Google"));
    }



}
