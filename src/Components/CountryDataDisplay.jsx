import { useState, useEffect } from 'react';
import countryData from '../assets/CountryData';
import './CountryDataDisplay.css';

const CountryDataDisplay = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPostalCode, setSelectedPostalCode] = useState('');
    const [fetchedData, setFetchedData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFetchData = async () => {
        if (!selectedCountry || !selectedPostalCode) return;

        const selectedCountryData = countryData.find(
            (data) => data.country === selectedCountry
        );

        if (!selectedCountryData) return;

        const exampleURL = selectedCountryData.exampleURL;
        const baseUrl = exampleURL.substring(0, exampleURL.lastIndexOf('/'));
        const apiUrl = `https://${baseUrl}/${selectedPostalCode}`;

        setLoading(true);
        setError('');

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Failed to fetch data');

            const data = await response.json();
            setFetchedData(data);
        } catch (error) {
            setError('Error fetching data');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setFetchedData('');
        setError('');
    }, [selectedCountry]);

    return (
        <div className="container">
            <div className="select-container">
                <label className="select-label">Select Country:</label>
                <select className="select-country" value={selectedCountry} onChange={(event) => {
                    setSelectedCountry(event.target.value);
                    setSelectedPostalCode('')
                }}>
                    <option value="">-- Select Country --</option>
                    {countryData.map((data) => (
                        <option key={data.code} value={data.country} className="select-option">
                            {data.country}
                        </option>
                    ))}
                </select>
            </div>

            {selectedCountry && (
                <div className="postal-code-container">
                    <label className="select-label">Select Postal Code:</label>
                    <select className="select-postal-code" value={selectedPostalCode} onChange={(event) => setSelectedPostalCode(event.target.value)}>
                        <option value="">-- Select Postal Code --</option>
                        {countryData
                            .find((data) => data.country === selectedCountry)
                            .range.split(' : ')
                            .map((code) => (
                                <option key={code} value={code} className="select-option">
                                    {code}
                                </option>
                            ))}
                    </select>
                </div>
            )}

            <button className="button-fetch" onClick={handleFetchData}>Fetch Data</button>

            {loading && <div className="loading">Loading...</div>}

            {error && <div className="error">{error}</div>}

            {fetchedData && (
                <div className="fetched-data">
                    <h3>Fetched Data for {fetchedData['country']}</h3>
                    <div>
                        <strong>Country Name:</strong> {fetchedData['country']}
                    </div>
                    <div>
                        <strong>Postal Code:</strong> {fetchedData['post code']}
                    </div>
                    <div>
                        <strong>Place Information</strong>
                        <ul className="place-list">
                            {fetchedData.places.map((place, index) => (
                                <li key={index} className="place-item">
                                    <div>
                                        <strong>Place Name:</strong> {place['place name']}
                                    </div>
                                    <div>
                                        <strong>Latitude:</strong> {place['latitude']}
                                    </div>
                                    <div>
                                        <strong>Longitude:</strong> {place['longitude']}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>

    );
};

export default CountryDataDisplay;
