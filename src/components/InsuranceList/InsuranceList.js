import React from 'react';
import './InsuranceList.css';
import InsuranceCard from '../InsuranceCard';

const InsuranceList = ({insuranceData}) => {
  const results = insuranceData.carrier_cards
  return (
      <div className="insurance-list">
        {results.map((data, key) => {
          return (
            <InsuranceCard
              name={data.name}
              tagline={data.tagline}
              tag={data.tag}
              cornertag={data.corner_tag}
              link={data.action.link}
              features={data.features_html}
              details={data.detail_body}
              disclaimer={data.action.disclaimer_text}
              rate={data.rate}
              icons={data.features}
              rating={data.stars}
              type={data.type}
              key={key}
            />
          );
        })}
      </div>
  );
};

export default InsuranceList;
