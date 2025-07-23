package WeatherApp.WeatherApp.Service;
import com.google.api.client.util.Value;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

import WeatherApp.WeatherApp.Entity.Weather;

@org.springframework.stereotype.Service

public class Service implements Methods{
	
	
	Client client = Client.builder().apiKey("Your_API_Key").build();

	@Override
	public String genAI(Weather w) {
		String prompt = "Summarize the current weather conditions in a simple and engaging way for a general audience using the following data:\r\n"+
				 "\r\n"
				+  "Location:" + w.getName()+ "State" +  w.getState() + "Country "+ w.getCountry()+
				"\r\n"
				+ "\r\n"
				+ "Local Time: " +w.getTime() +"\r\n"
				+ "\r\n"
				+ "Temperature:"+ w.getTemp()+"\r\n"
				+ "\r\n"
				+ "Feels Like"+w.getFeeltemp()+"\r\n"
				+ "\r\n"
				+ "Condition: "+w.getText()+"\r\n"
				+ "\r\n"
				+ "Humidity : "+w.getHumidity()+"\r\n"
				+ "\r\n"
				+ "Wind Speed: "+w.getWindSpeed()+"\r\n"
				+ "\r\n"
				+ "Wind Direction:"+w.getWindDir()+"\r\n"
				+ "\r\n"
				+ "The summary should be conversational and brief, as if it's a radio or app weather update. Avoid repeating data — combine them meaningfully. Keep it under 50 words." ;
		
	    GenerateContentResponse response =
	        client.models.generateContent(
	            "gemini-2.5-flash",
	            prompt,
	            null);
	    return response.text() ;
	}
	}


