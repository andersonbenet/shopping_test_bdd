package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

import org.junit.runner.RunWith;

@RunWith(cucumber.api.junit.Cucumber.class)
@CucumberOptions( 
         features = "C:\\Users\\Benet\\git\\shopping_test_bdd\\demo\\src\\test\\java\\features\\",
         plugin = "pretty",
         monochrome = true,
         snippets = SnippetType.CAMELCASE,
         dryRun = false,
         strict = false
 		)
public class ShoppingRun {
	
}
