# Sage Calculator API

A comprehensive REST API for calculating Human Design charts using authentic methodology with Swiss Ephemeris precision. This API generates detailed JSON output containing all chart nuances including gates, channels, centers, type, profile, authority, and advanced calculations.

## Features

- ✨ **Complete Human Design Charts** - Full bodygraph calculation with all 64 gates and 9 centers
- 🎯 **Accurate Type Determination** - Generator, Manifestor, Projector, Reflector, Manifesting Generator
- 🔮 **Swiss Ephemeris Integration** - High-precision astronomical calculations
- 🌍 **Global Geocoding** - Support for worldwide locations with multiple providers
- 🏗️ **Advanced Calculations** - Incarnation Cross, Variables (PHS), Circuitries
- 📊 **Comprehensive JSON Output** - All chart data in structured format
- 🔒 **Production Ready** - Input validation, error handling, security headers

## Quick Start

### Installation

```bash
git clone https://github.com/sphinxcode/sagecalculator-api.git
cd sagecalculator-api
npm install
```

### Configuration

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
PORT=3000
NODE_ENV=development
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Run the API

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Calculate Human Design Chart

**POST** `/api/calculate`

Calculate a complete Human Design chart from birth data.

#### Request Body

```json
{
  "name": "John Doe",
  "birthDate": "1990-06-15",
  "birthTime": "14:30",
  "birthLocation": "New York, NY, USA",
  "timezone": "America/New_York"
}
```

#### Required Fields
- `birthDate` (string): Birth date in YYYY-MM-DD format
- `birthTime` (string): Birth time in HH:MM format (24-hour)
- `birthLocation` (string): Birth location name

#### Optional Fields
- `name` (string): Person's name
- `timezone` (string): Timezone identifier (e.g., "America/New_York")
- `coordinates` (string): Lat,lng coordinates (e.g., "40.7128,-74.0060")

#### Response Format

```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "birthdate": "1990-06-15",
    "birthtime": "14:30",
    "location": "New York, NY, USA",
    "coordinates": "40.712800,-74.006000",
    "type": "Generator",
    "profile": "3/5",
    "authority": "Sacral",
    "strategy": "Wait to respond",
    "signature": "Satisfaction",
    "not_self_theme": "Frustration",
    "definition": "Single Definition",
    "incarnation_cross": "Right Angle Cross of the Four Ways",
    "centers": {
      "Head": {"defined": false, "gates": [], "channels": []},
      "Ajna": {"defined": true, "gates": [17, 43], "channels": ["17-62"]}
    },
    "channels_short": ["17-62", "34-57"],
    "gates": {
      "design": ["34.1", "17.3", "57.2"],
      "personality": ["12.4", "62.1", "22.6"]
    },
    "design_sun": {"gate": 34, "line": 1, "longitude": 123.456},
    "personality_sun": {"gate": 12, "line": 4, "longitude": 303.456}
  }
}
```

### Health Check

**GET** `/api/health`

Check API health and service status.

## Example Usage

### Using cURL

```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Person",
    "birthDate": "1990-06-15",
    "birthTime": "14:30",
    "birthLocation": "New York, NY, USA"
  }'
```

### Using JavaScript/Node.js

```javascript
const axios = require('axios');

async function calculateChart() {
  try {
    const response = await axios.post('http://localhost:3000/api/calculate', {
      name: 'Test Person',
      birthDate: '1990-06-15',
      birthTime: '14:30',
      birthLocation: 'New York, NY, USA'
    });
    
    console.log('Chart data:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}
```

## Technical Details

### Calculation Methodology
1. **Dual Ephemeris**: Separate calculations for Personality (birth) and Design (88.736 days before birth)
2. **Swiss Ephemeris**: High-precision astronomical data from Astrodienst
3. **HD Wheel Mapping**: 64 gates mapped to 360° zodiacal wheel
4. **Channel Formation**: Gates connect to form channels between centers
5. **Type Determination**: Based on center definitions and connections

## License

MIT License

## Acknowledgments

- Swiss Ephemeris by Astrodienst for astronomical calculations
- Human Design System founded by Ra Uru Hu
- OpenStreetMap for geocoding services