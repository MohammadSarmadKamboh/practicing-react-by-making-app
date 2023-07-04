import { useState, useEffect } from 'react';

const CountryDataFetcher = () => {
  // Component state variables
  const [countries, setCountries] = useState([]); // Stores the list of countries fetched from the API
  const [selectedCountry, setSelectedCountry] = useState(''); // Stores the code of the selected country
  const [countryData, setCountryData] = useState(null); // Stores the data of the selected country
  const [isLoading, setIsLoading] = useState(false); // Indicates if the data is being loaded
  const [error, setError] = useState(null); // Stores any error that occurs during data fetching

  useEffect(() => {
    // Fetch countries data from the API
    const fetchCountries = async () => {
      setIsLoading(true); // Set isLoading to true to show a loading state

      try {
        const response = await fetch('https://restcountries.com/v3.1/all'); // Fetch data from the API
        const data = await response.json(); // Parse the response as JSON
        setCountries(data); // Store the fetched countries in the state variable
      } catch (error) {
        setError(error.message); // If an error occurs, store the error message in the state variable
      }

      setIsLoading(false); // Set isLoading to false after fetching data
    };

    fetchCountries(); // Invoke the fetchCountries function when the component mounts
  }, []);

  const handleCountryChange = (event) => {
    // Update selected country and fetch corresponding data
    const selectedCountryCode = event.target.value; // Get the selected country code from the event
    setSelectedCountry(selectedCountryCode); // Update the selected country state variable

    const selectedCountryData = countries.find(
      (country) => country.cca3 === selectedCountryCode
    ); // Find the country data based on the selected country code

    setCountryData(selectedCountryData); // Update the country data state variable
  };

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Render an error message if an error occurred during data fetching
  }

  return (
    <div>
      <h2>Country Data</h2>

      <select className="country-select" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.cca3}>
            {country.name.common}
          </option>
        ))}
      </select>

      {countryData && (
        <div>
          <h3>{countryData.name.common}</h3>

          {/* Render each property of the countryData object */}
          {Object.entries(countryData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDataFetcher;
