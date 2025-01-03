const destinations = [
    { name: "Paris", id: "paris-image" },
    { name: "Tokyo", id: "tokyo-image" },
    { name: "New York", id: "newyork-image" },
    { name: "Sydney", id: "sydney-image" },
    { name: "Rome", id: "rome-image" },
    { name: "London", id: "london-image" },
    { name: "Dubai", id: "dubai-image" },
    { name: "Bali", id: "bali-image" },
    { name: "Barcelona", id: "barcelona-image" },
    { name: "Cairo", id: "cairo-image" },
    { name: "Singapore", id: "singapore-image" },
    { name: "Istanbul", id: "istanbul-image" },
    { name: "Eiffel Tower", id: "eiffel-tower" },
    { name: "Louvre Museum", id: "louvre-museum" },
    { name: "Notre-Dame Cathedral", id: "notre-dame" },
    { name: "Montmartre", id: "montmartre" },
    { name: "Seine River Cruise", id: "seine-cruise" },
    { name: "Palace of Versailles", id: "versailles" },
    { name: "Tokyo Tower", id: "tokyo-tower" },
    { name: "Senso-ji Temple", id: "tokyo-tower" },
    { name: "Shibuya Crossing", id: "shibuya-crossing" },
    { name: "Statue of Liberty", id: "statue-of-liberty" },
    { name: "Times Square", id: "times-square" },
    { name: "Central Park", id: "central-park" },
    { name: "Empire State Building", id: "empire-state-building" },
    { name: "Brooklyn Bridge", id: "brooklyn-bridge" },
    { name: "Broadway", id: "broadway" },
    { name: "Sydney Opera House", id: "sydney-opera-house" },
    { name: "Bondi Beach", id: "bondi-beach" },
    { name: "Manly Beach", id: "manly-beach" },
    { name: "Sydney Harbour Bridge", id: "sydney-harbour-bridge" },
    { name: "Taronga Zoo", id: "taronga-zoo" },
    { name: "Blue Mountains", id: "blue-mountains" },
    { name: "Colosseum", id: "colosseum" },
    { name: "Roman Forum", id: "roman-forum" },
    { name: "Vatican City", id: "vatican-city" },
    { name: "Trevi Fountain", id: "trevi-fountain" },
    { name: "Pantheon", id: "pantheon" },
    { name: "Piazza Navona", id: "piazza-navona" },
    { name: "Castel Sant'Angelo", id: "castel-sant-angelo" },
    { name: "Spanish Steps", id: "spanish-steps" },
    { name: "Tower of London", id: "tower-of-london" },
    { name: "Buckingham Palace", id: "buckingham-palace" },
    { name: "London Eye", id: "london-eye" },
    { name: "Hyde Park", id: "hyde-park" },
    { name: "Brighton Beach", id: "brighton-beach" },
    { name: "Camden Market", id: "camden-market" },
    { name: "Burj Khalifa", id: "burj-khalifa" },
    { name: "Palm Jumeirah", id: "palm-jumeirah" },
    { name: "Dubai Mall", id: "dubai-mall" },
    { name: "Jumeirah Beach", id: "jumeirah-beach" },
    { name: "Dubai Marina", id: "dubai-marina" },
    { name: "Desert Safari", id: "desert-safari" },
    { name: "Uluwatu Temple", id: "uluwatu-temple" },
    { name: "Tanah Lot", id: "tanah-lot" },
    { name: "Seminyak Beach", id: "seminyak-beach" },
    { name: "Ubud Monkey Forest", id: "ubud-monkey-forest" },
    { name: "Tegallalang Rice Terraces", id: "tegallalang-rice-terraces" },
    { name: "Nusa Penida", id: "nusa-penida" },
    { name: "Pyramids of Giza", id: "pyramids-of-giza" },
    { name: "Egyptian Museum", id: "egyptian-museum" },
    { name: "Khan El Khalili", id: "khan-el-khalili" },
    { name: "Al-Azhar Mosque", id: "al-azhar-mosque" },
    { name: "Coptic Cairo", id: "coptic-cairo" },
    { name: "Marina Bay Sands", id: "marina-bay-sands" },
    { name: "Gardens by the Bay", id: "gardens-by-the-bay" },
    { name: "Sentosa Island", id: "sentosa-island" },
    { name: "Universal Studios Singapore", id: "universal-studios-singapore" },
    { name: "Singapore Zoo", id: "singapore-zoo" },
    { name: "Botanic Gardens", id: "botanic-gardens" },
    { name: "Chinatown", id: "chinatown" },
    { name: "Little India", id: "little-india" },
    { name: "Clarke Quay", id: "clarke-quay" },
    { name: "Orchard Road", id: "orchard-road" },
    { name: "Merlion Park", id: "merlion-park" },


];

const unsplashApiKey = '84lSqdLL_CuhQrHISPz2TPocx8HDOmOFkQRfrc3IRuA'; // Replace with your Unsplash API key
const unsplashBaseUrl = 'https://api.unsplash.com/search/photos';

destinations.forEach(destination => {
    const query = destination.name;

    fetch(`${unsplashBaseUrl}?query=${query}&client_id=${unsplashApiKey}&per_page=1`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const imageUrl = data.results[0].urls.regular;
                document.getElementById(destination.id).src = imageUrl;
            } else {
                console.error(`No image found for ${query}`);
            }
        })
        .catch(error => console.error('Error fetching Unsplash API:', error));
});
