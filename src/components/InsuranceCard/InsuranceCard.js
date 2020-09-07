import React, {useState} from 'react';
import './InsuranceCard.css';
import Rating from '../Rating/Rating'
import Price from '../Price/Price'
import SVG from 'react-inlinesvg';


const InsuranceCard = ({ name, tagline, tag, cornertag, rate, details, disclaimer, type, icons, rating, link, features }) => {

const [isOpen, setIsOpen] = useState(false);

const handleAccordion = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
      <div className="insurance-card">
        { cornertag && <div id="box"><SVG  width="10" height="10" src={require('../../assets/images/IconStarWhite.svg')} /> </div>}
        <div className="card-wrapper">
          <div className="row">
            <SVG src={require('../../assets/images/IconCarrierDefault.svg')} />
            <div className="col">
              <h1 className="carrier-name">{name}</h1>
              {tagline ? <h3 className="carrier-tagline" data-testid="carrier-tagline">{tagline}</h3> : ''}
              <div
                className="row icons-wrapper">
                { rating &&
                  <div className="rating">
                    {Array.from({ length: rating}).map((data, key) => <Rating key={key}/>)}
                  </div>
                }
                { icons &&
                  <div className="icons">
                    {icons && icons.map((icon, key) => (<SVG key={key} width="20" height="20" src={require(`../../assets/images/${icon.icon}.svg`)} />))}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="col price-wrapper">
            <Price tag={tag} rate={rate}/>
            {type === 0 || type === 1
              ? (<a className="blue-button" target="_blank" rel='noopener noreferrer' href={link} data-testid="blue-button">
                  <SVG width="15" height="15" src={require('../../assets/images/IconArrowDown.svg')} />
                  <span>Get Quote</span>
                </a>)
              : type === 3
                ? (<a className="orange-button" target="_blank" rel='noopener noreferrer'href={link} data-testid="orange-button">
                    <SVG width="15" height="15" src={require('../../assets/images/IconBoltWhite.svg')} />
                    <span>Buy Now</span>
                  </a>)
                : null
            }
          </div>
        </div>

        <div
          className={!isOpen ? "insurance-body" : "insurance-body open"}
          data-testid="insurance-body"
        >
            <section className="col">
              <div className="row">
                <SVG width="20" height="20" src={require('../../assets/images/IconFeatures.svg')} />
                <h1>Features</h1>
              </div>
              <hr></hr>
              { features ? <section className="features" dangerouslySetInnerHTML={{__html: features}}></section> : <p>No features found at this time</p>}
            </section>

            <section className="col">
              <div className="row">
                <SVG width="20" height="20" src={require('../../assets/images/IconDetails.svg')} />
                <h1>{`Why ${name}?`}</h1>
              </div>
              <hr></hr>
              { details ? <p>{details}</p> : <p>No details from carrier found at this time</p> }
              <p><i>{disclaimer}</i></p>
            </section>

        </div>

        { !isOpen ?
          <SVG
            src={require('../../assets/images/IconChevronDown.svg')}
            fill="#959595" stroke="#959595"
            data-testid="down-chevron"
            className="down-chevron"
            onClick={handleAccordion}
          />
          :
          <SVG
            src={require('../../assets/images/IconChevronDown.svg')}
            fill="#959595" stroke="#959595"
            data-testid="up-chevron"
            className="up-chevron"
            onClick={handleAccordion}
          />
        }
      </div>
    </>
  );
};

export default InsuranceCard;

