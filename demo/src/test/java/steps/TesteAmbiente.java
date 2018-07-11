package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	
	public static void main(String[]args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Benet\\git\\shopping_test_bdd\\demo\\util\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://demo.cs-cart.com/");
		
		
	}

}
