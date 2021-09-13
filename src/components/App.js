import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import OfferCard from './OfferCard';
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import About from '../pages/About';
import { FaSpinner } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import '../style.css';

export default function App() {
  console.log('Rendering App');
  const [offers, setOffers] = useState([]);
  const [showfilteredOffers, setshowfilteredOffers] = useState(false);
  const [filteredOffers, setfilteredOffers] = useState([]);
  const [showSpinner, setshowSpinner] = useState(true);
  const [error, setError] = useState('');

  const fetchOffers = async () => {
    try {
      let response = await fetch(
        // 'https://cors-bypass.jmethew76.workers.dev/https://sumanjay.vercel.app/udemy'
        'https://cors-bypass.jmethew76.workers.dev/https://jsonkeeper.com/b/XDNS'
      );
      let data = await response.json();
      setOffers(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setshowSpinner(false);
    }
  };

  const show_filtered_offers = (offers_array, status) => {
    setshowfilteredOffers(status);
    setfilteredOffers(offers_array);
  };

  useEffect(() => {
    fetchOffers();
    console.log('Fetching Offers');
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>
            <h1 style={{ textAlign: 'center' }}>Udemy Offers</h1>
            <SearchBox
              offers_array={offers}
              set_filtered_offers={show_filtered_offers}
            />
            <div className="offerCards-container">
              <FaSpinner className={`rotate ${showSpinner ? '' : 'd-none'}`} />
              {error ? <p>Error : &nbsp;{error.message}</p> : ''}
              {showfilteredOffers
                ? filteredOffers.map(offer => (
                    <OfferCard key={uuidv4()} offer={offer} />
                  ))
                : offers.map(offer => (
                    <OfferCard key={uuidv4()} offer={offer} />
                  ))}
            </div>
          </div>
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}
