import { Layout, Card, PageHeader } from 'antd';
import React from 'react';
import { MapMarker, GMap } from 'react-rainbow-components';
import {
  UserCard,
  ProductCard,
  TaggedContentCard,
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack,
  RecipeCard,
  NewsHeaderCard,
  CryptoCard,
  PaymentCard,
  JobListingCard,
} from 'react-ui-cards';
import Name from '../../components/Name';
import WakaTime from '../../components/WakaTime';
const LIBRARY_GOOGLE_MAPS_APIKEY = 'AIzaSyCEDaSNuSPhOibzthtOC9UfNYMONfY46Qo';
export default function HomePage(props) {
  return (
    <div>
      <div>
        {/* <Card title="Summary" bordered={false}> */}
        <p>{props.info.basics.summary}</p>
        {/* <Name
            size={400}
            text1="John"
            text2="Marczak"
            open
            fill1="#001529"
            fill2="rgb(0, 153, 0)"
          /> */}
        {/* </Card> */}
        <WakaTime />
        {/* <CryptoCard
          currencyName="Ethereum"
          currencyPrice="$766.12"
          icon={
            <img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" />
          }
          currencyShortName="ETH"
          trend="(7.32%) $14.94"
          trendDirection={1}
          chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
          chartColor="#9b59b6"
        /> */}

        {/* <GMap
          apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
          zoom={10}
          latitude={41.6673851}
          longitude={-72.8101847}
          header="Title"
        >
          <MapMarker
            latitude={-72.8101847}
            longitude={41.6673851}
            label="Botany Bay"
            description=" Botany, New South Wales, Australia"
          />


        </GMap> */}
      </div>
    </div>
  );
}
