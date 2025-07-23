package WeatherApp.WeatherApp.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import WeatherApp.WeatherApp.Entity.Weather;
import WeatherApp.WeatherApp.Service.Methods;
@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class Controller {
	private Methods m ;
	public Controller (Methods m) {
		this.m = m ;
	}
	
	@PostMapping("/genai")
	public String ai(@RequestBody Weather w) {
		return m.genAI(w) ;
		
	}
	@GetMapping("/home")
	public String home () {
		return "Hello" ;
	}

}
