import React, { useState, useEffect } from 'react';

function SearchBox(props) {
  console.log('Rendering SearchBox');

  const [inputValue, setInputValue] = useState('');

  const get_filtered_offers = () => {
    let temp_array = [];
    props.offers_array.map(offer => {
      if (offer.title.toLowerCase().includes(inputValue.toLowerCase())) {
        temp_array.push(offer);
      }
    });
    return temp_array;
  };

  useEffect(() => {
    props.set_filtered_offers(get_filtered_offers(), inputValue ? true : false);
  }, [inputValue]);

  useEffect(() => {
    // show all offers on component refresh
    props.set_filtered_offers([], false);
  }, []);

  return (
    <div>
      <input
        type="text"
        id="searchBox"
        name="searchBox"
        placeholder="Search Your Course"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
