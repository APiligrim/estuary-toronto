import React from 'react';
import AboutEvent from './AboutEvent';
import Banner from './Banner';
import EventInformation from './EventInformation';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import StayTunedBanner from './StayTunedBanner';

export default function EventPage() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Header />
      <EventInformation />
    </div>
  );
}
