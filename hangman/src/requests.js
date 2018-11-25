const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}` , {});
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle.');
  }
};

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all' , {});
  if (response.status === 200){
    data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch country,');
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=23f7781d3cc46a' , {});
  if (response.status === 200) {
    const data = response.json();
    return data;
  } else {
    throw new Error('Could not fetch IP location.');
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
}

export {getPuzzle as default};