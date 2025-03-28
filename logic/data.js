
const APIentry = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/";

export async function getData(lat, lon){
	const url = APIentry + "lon/" + lon + "/lat/" + lat + "/data.json";
	
	// Hämta text-baserad data från SMHI API. await -> vänta här på att fetch är klar
	// fetch är en async funktion och programkörning går utan await vidare fast fetch inte är klar
	const response = await fetch(url);

	// Konvertera text-baserad data till JSON-format, även detta är en async funktion och kräver await för att inte direkt gå vidare
	const data = await response.json();

	return data;

}