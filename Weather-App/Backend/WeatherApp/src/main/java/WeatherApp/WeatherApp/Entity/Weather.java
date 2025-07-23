package WeatherApp.WeatherApp.Entity;

import org.springframework.stereotype.Repository;

@Repository
public class Weather {
	
	/*
	 * 'name' : apiData?.location?.name , 
    'state' : apiData?.location?.region ,
    'country' : apiData?.location?.country ,
    'time' : apiData?.location?.localtime ,
    'temp' : apiData?.current?.temp_c ,
    'feeltemp' : apiData?.current?.feelslike_c ,
    'text' : apiData?.current?.condition?.text ,
    'humidity' : apiData?.current?.humidity ,
    'windSpeed' : apiData?.current?.wind_kph ,
    'windDir' : apiData?.current?.wind_dir    

	 * */
	
	private String name ; 
	private String state ;
	private String country ;
	private String time ; 
	private String temp ;
	private String feeltemp ;
	private String text;
	private String humidity ;
	private String windSpeed ;
	private String windDir ;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	@Override
	public String toString() {
		return "Weather [name=" + name + ", state=" + state + ", country=" + country + ", time=" + time + ", temp="
				+ temp + ", feeltemp=" + feeltemp + ", text=" + text + ", humidity=" + humidity + ", windSpeed="
				+ windSpeed + ", windDir=" + windDir + "]";
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getTemp() {
		return temp;
	}
	public void setTemp(String temp) {
		this.temp = temp;
	}
	public String getFeeltemp() {
		return feeltemp;
	}
	public void setFeeltemp(String feeltemp) {
		this.feeltemp = feeltemp;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getHumidity() {
		return humidity;
	}
	public void setHumidity(String humidity) {
		this.humidity = humidity;
	}
	public String getWindSpeed() {
		return windSpeed;
	}
	public void setWindSpeed(String windSpeed) {
		this.windSpeed = windSpeed;
	}
	public String getWindDir() {
		return windDir;
	}
	public void setWindDir(String windDir) {
		this.windDir = windDir;
	}


}
