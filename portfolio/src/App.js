import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import MomentVideoSrc from '../src/images/moment-yc-demo.MP4';
import MentoAppPreviewSrc from '../src/images/mento-preview.mp4';

import MentoEventsPageSrc from '../src/images/mento-events-page.png';
import MentoNewEventsPageSrc from '../src/images/mento-new-event.png';
import MentoJoinEventSrc from '../src/images/mento-join-event.png';
import MentoCreate1Src from '../src/images/mento-create1.png';
import MentoCreate2Src from '../src/images/mento-create2.png';
import MentoCreate3Src from '../src/images/mento-create3.png';
import MentoCreate4Src from '../src/images/mento-create4.png';
import MentoTokenSrc from '../src/images/mento-token.png';
import MentoIdSrc from '../src/images/mento-id.png';
import MentoProfileSrc from '../src/images/mento-profile.png';
import MentoJoinEventDemoSrc from '../src/images/join-event-demo.mp4';


function App() {
  const [hoverVal, setHoverVal] = useState(); // Can be { undefined, 0, 1, 2, 3 }
  const [pageVal, setPageVal] = useState(); // Can be { undefined, 0, 1, 2, 3 }

  const [mentoScreenCardNum, setMentoScreenCardNum] = useState(0);

  const [scoringSketchNum, setScoringSketchNum] = useState(0);

  const nextMentoScreenCard = () => {
    if (mentoScreenCardNum === 4) {
      setMentoScreenCardNum(0);
    } else {
      setMentoScreenCardNum(mentoScreenCardNum + 1);
    }
  }

  const prevMentoScreenCard = () => {
    if (mentoScreenCardNum === 0) {
      setMentoScreenCardNum(0);
    } else {
      setMentoScreenCardNum(mentoScreenCardNum - 1);
    }
  }

  const nextScoringSketch = () => {
    if (scoringSketchNum === 3) {
      setScoringSketchNum(0);
    } else {
      setScoringSketchNum(scoringSketchNum + 1);
    }
  }

  const prevScoringSketch = () => {
    if (scoringSketchNum === 0) {
      setScoringSketchNum(0);
    } else {
      setScoringSketchNum(scoringSketchNum - 1);
    }
  }

  const handleMouseEnter = (index) => {
    setHoverVal(index);
  }

  const handleMouseLeave = () => {
    setHoverVal();
  }

  const renderMentoScreenCard = () => {
    if (mentoScreenCardNum === 0) {
      return (
        <div className="Mento-screen-card">
          <img className="Mento-screen" src={MentoEventsPageSrc} />
          <video className="Mento-screen" style={{marginRight: '1vw'}} autoPlay={true} preload={'auto'} controls={true} loop={true} key={'0'}>
            <source src={MentoAppPreviewSrc} type="video/mp4" />
            Your browser does not support HTML5 video
          </video>
          <div className="Mento-screen-card-description" style={{width: '29vw', flexDirection: 'column'}}>
            <div style={{fontSize: '1.2rem'}}>Purposes:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">The image on the left is a screenshot of the main "My Events page" for a user who created one event. The user will first see this scrollable feed when they open up the app to view events they are a part of.</li>
              <li>The video on the right shows the scrollable page that comes up when a user clicks on one of the event cards. It contains all the event details they have access to and buttons that lead to actions they have permission for.</li>
            </ul>
            <div style={{fontSize: '1.2rem'}}>Design Choices:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">Designed the event cards to be center the NFT image and not have any color border it to prevent undesirable color clashes. Also want the user to be able to have easy access to multiple events they might attend through the app.</li>
              <li className="padded-li">The scrollable UI for event details was inspired by Spotify's song popup UI to give users a friendly way of viewing a lot of details from their event.</li>
            </ul>
            {/* <div style={{marginTop: '1vh', marginLeft: 0}}>
              The image on the left is a screenshot of the main "My Events page" for a user who created one event. This is the screen that a user sees when opening up the app and is meant as a scrollable feed to view events they created, are working at or are guests of.
            </div> */}
          </div>
        </div>
      );
    } else if (mentoScreenCardNum === 1) {
      return (
        <div className="Mento-screen-card">
          <img className="Mento-screen" src={MentoCreate1Src} />
          <img className="Mento-screen" src={MentoCreate2Src} />
          <div className="Mento-screen-card-description" style={{width: '29vw', flexDirection: 'column'}} >
            <div style={{fontSize: '1.2rem'}}>Purposes:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">These images are the first two of four pages necessary to create an event on the app. One of the main intentions of the app is to create a simpler platform (than EventBrite, TicketMaster, etc.) for people to organize their own ticketed events.</li>
            </ul>
            <div style={{fontSize: '1.2rem'}}>Design Choices:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">First page has a very simplistic UI without much description because these are details that people already have in mind to create the event.</li>
              <li className="padded-li">I decided to have choosing NFT images get its own page in the process to give users a lot of space to think about how they want to represent their event.</li>
              <li>The app colors are used in gradient for every text input to add uniqueness and fun to the user's experience.</li>
            </ul>
            {/* <div style={{marginTop: '1vh', marginLeft: 0}}>
              The image on the left is a screenshot of the main "My Events page" for a user who created one event. This is the screen that a user sees when opening up the app and is meant as a scrollable feed to view events they created, are working at or are guests of.
            </div> */}
          </div>
        </div>
      );
    } else if (mentoScreenCardNum === 2) {
      return (
        <div className="Mento-screen-card">
          <img className="Mento-screen" src={MentoCreate3Src} />
          <img className="Mento-screen" src={MentoCreate4Src} />
          <div className="Mento-screen-card-description" style={{width: '29vw', flexDirection: 'column'}}>
            <div style={{fontSize: '1.2rem'}}>Purposes:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">These images are the last two pages of the four that a user needs to go through to create an event.</li>
              <li>The second image specifically is a page for users to confirm the details of the event that they just created. Users will feel safer if they are given the opportunity to verify that they did not make a mistake.</li>
            </ul>
            <div style={{fontSize: '1.2rem'}}>Design Choices:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">First image leverages "whitespace" to give users a lot of mental space to make these crucial decisions about the event they are planning. Event planning can already be stressful so I wanted to design these pages to help alleviate that.</li>
              <li>I designed the confirmation page to allow users to see all the details in one very simple page. It is designed to make double checking for mistakes much easier with each property and the user input organized by row and differing the font color.</li>
            </ul>
          </div>
        </div>
      );
    } else if (mentoScreenCardNum === 3) {
      return (
        <div className="Mento-screen-card">
          <img className="Mento-screen" src={MentoIdSrc} />
          <img className="Mento-screen" src={MentoProfileSrc} />
          <div className="Mento-screen-card-description" style={{width: '29vw', flexDirection: 'column'}}>
            <div style={{fontSize: '1.2rem'}}>Purposes:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">The first image is the Mento ID of the user. When they show up to an event, they get it scanned by a host or designated scanner within the app and its used to check if they have a valid NFT for the event. This ID gets constantly updated for security.</li>
            </ul>
            <div style={{fontSize: '1.2rem'}}>Design Choices:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">The Mento ID is meant to simplify the guest experience for events by having one central location to find the QR code that will get them admitted to all events. It takes exactly one click for the user to get to from anywhere in the app.</li>
              <li>On one page without scrolling, the user has access to every Settings action. Text inputs are used to display current username, password and instagram. When clicked, the user is taken to a corresponding page to change it. User mental model when seeing a text input is to press it to start changing info so this was leveraged to declutter the screen.</li>
            </ul>
          </div>
        </div>
      );
    } else if (mentoScreenCardNum === 4) {
      return (
        <div className="Mento-screen-card">
          <img className="Mento-screen" src={MentoTokenSrc} />
          <video className="Mento-screen" style={{marginRight: '1vw'}} autoPlay={true} preload={'auto'} controls={true} loop={true} key={'1'}>
            <source src={mentoScreenCardNum === 0 ? MentoAppPreviewSrc : MentoJoinEventDemoSrc} type="video/mp4" />
            Your browser does not support HTML5 video
          </video>
          <div className="Mento-screen-card-description" style={{width: '29vw', flexDirection: 'column'}}>
            <div style={{fontSize: '1.2rem'}}>Purposes:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">The image on the left is a popup of an NFT a user has acquired for an event. It has details about the contract and options to view it on Opensea or send it to an external wallet/friend.</li>
              <li>The video on the right shows the action of searching for a public event by a 6-digit code. If the event is private, the user would have to be sent an invite.</li>
            </ul>
            <div style={{fontSize: '1.2rem'}}>Design Choices:</div>
            <ul style={{fontSize: '1rem'}}>
              <li className="padded-li">This app is designed with empathy for people unfamiliar with NFTs or blockchain. You do not need cryptocurrency or an external wallet to use it. So the token popup is designed to be simple but also provide relevant info to people who do have experience with NFTs.</li>
              <li className="padded-li">The public event search is designed to be very minimalistic. If you have the correct code, accessing the event takes very few clicks and avoids cluttered screens.</li>
            </ul>
            {/* <div style={{marginTop: '1vh', marginLeft: 0}}>
              The image on the left is a screenshot of the main "My Events page" for a user who created one event. This is the screen that a user sees when opening up the app and is meant as a scrollable feed to view events they created, are working at or are guests of.
            </div> */}
          </div>
        </div>
      );
    }
  }

  if (pageVal === 0) {
    return (
      <div className="Cf-container">
        <h1 onClick={() => setPageVal()} style={{fontSize: '1.3rem'}}>🏠 Go Back Home</h1>
        <div className="Cf-header"></div>
        <div className="Cf-descriptionbox">
          I decided to redesign the homepage of a community center in my neighborhood. I chose this because I helped found a food pantry at this community center and helped design its webpage. I realized back then that there could be major design improvements on the whole website, but I did not have the time to work on that back then. Since there has not been any updates to it, I figured this would be a great opportunity to make the website more usable and designed more intentionally. The impact of a redesign could garner more donations and volunteers for the efforts of the community center.
        </div>
        <h3>Step 1: Identifying Problems</h3>
        <div className="Cf-subtext">
          The first thing that I did was to go over the current Camp Friendship homepage and identify any usability or accessibility issues that I would need to address.
        </div>
        <div className="Cf-oldpage-container">
          <div className="Cf-oldpage-img"></div>
          <div className="Cf-oldpage-subtext">
            This is a screenshot from the old homepage for Camp Friendship made in 2020 with Squarespace.<br /><br />
            <a href="http://www.campfriendshipbrooklyn.org/" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'white'}}>
              <div className="Cf-oldpage-link">
                Go to current page
              </div>
            </a>
          </div>
        </div>
        <div style={{ marginTop:'4vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '87vw', alignSelf: 'center' }}>
          <div className="Cf-problems-card">
            <p className="subsection_title">Usability Issues</p>
            <ul className="subsection_list">
              <li>The most important user actions (Volunteer and Donate) are not immediately visible to a user visiting the site.</li>
              <li>There is a lack of hierarchy on the webpage. Specifically, the headers that link to other subpages do not contrast from the rest of the content.</li>
              <li>The space of the homepage is not used effectively. There is too much whitespace which requires users to scroll even though there is not that much content.</li>
              <li>There is a powerful image and message on the homepage that represents the community center well but it is not visible to the user unless they scroll down.</li>
              <li>The lack of sectioning makes it difficult for users to understand what part of the page is header, what part is the news and what part is information about the community center.</li>
              <li>Hovering over the Facebook/Instagram logos changes the shading of the opposite logo. This is non-intuitive and users would expect the logo they are hovered over to change.</li>
            </ul>
          </div>
          <div className="Cf-problems-card">
            <p className="subsection_title">Accessibility Issues</p>
            <a href="https://wave.webaim.org/report#/http://www.campfriendshipbrooklyn.org/" target="_blank" className="og_website_link" style={{marginTop: '0vw', color: 'white'}}>WAVE Report</a>
            <ul className="subsection_list">
              <li>There were a lot of low contrast errors that I agreed with because there is a lot of standalone text on the white page that has a lighter red font color. The text is not even bolded to help mitigate this.</li>
              <li>The biggest image of the girl smiling does have a bad alt text which will make it difficult for a person using assistive technology to understand. The alt text was 18121576_236557246749418_836650832950628754_o.jpg.</li>
              <li>I agreed with the alerts regarding redundant links. There were a lot of components that just linked to page it was on. This could confuse assistive technology.</li>
              <li>The alert regarding the "skipped header level" is also accurate and further proves my point that the webpage lacks structure.</li>
            </ul>
          </div>
        </div>
        <h3>Step 2: Low-fidelity Wireframing</h3>
        <div className="Cf-subtext">
          Next, drew out solutions to the usability and accessibility problems that I observered in the form of lo-fi sketches for desktop, mobile and tablet screens. The sketches below are labeled with notes on how each new feature/design choice will solve or improve on an issue outlined above.
        </div>
        <div className="Cf-desktop-lofi"></div>
        <div className="Cf-tablet-lofi"></div>
        <div className="Cf-mobile-lofi"></div>
        <h3>Step 3: Visual Design Style Guide</h3>
        <div className="Cf-subtext">
          Next, I made a style guide for my redesign of the homepage that consisted of colors to use, icons and common components. The elements in the style guide are based on the design of the original website and the solutions I presented in my low-fidelity wireframing.
        </div>
        <div className="Cf-style-guide"></div>
        <h3>Step 4: High-fidelity prototyping</h3>
        <div className="Cf-subtext">
          I then made high-fidelity prototypes on Figma based on the work I did in the previous steps. I did interactive protoypes for desktop, tablet and mobile screen sizes. I made them by implementing the lo-fi prototypes that I sketched out using the style guide I created. The labeled comments below describe user interactions and how I planned on making the elements responsive to window size changes.
        </div>
        <div className="Cf-hifi Cf-hifi-desktop"></div>
        <div className="Cf-hifi Cf-hifi-tablet"></div>
        <div className="Cf-hifi Cf-hifi-mobile"></div>
        <h3>Step 6: Implementing the Redesign with HTML/CSS</h3>
        <div className="Cf-subtext">
          Finally, I implemented the high-fidelity prototypes using HTML and CSS. The elements on the page are responsive now so that the information is still presentable and organized even if the user changes the window size. Below is the link to the deployed redesign and the original homepage.
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '4vh'}}>
            <a href="http://www.campfriendshipbrooklyn.org/" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'white'}}>
              <div className="Cf-oldpage-link Cf-bottom-links" style={{width: '9vw', marginRight: '2vw'}}>
                Go to Original
              </div>
            </a>
            <a href="https://dancing-malasada-9cd8ad.netlify.app/" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'white'}}>
              <div className="Cf-oldpage-link Cf-bottom-links" style={{width: '9vw'}}>
                Go to Redesign
              </div>
            </a>
        </div>
      </div>);
  } else if (pageVal === 1) {
    return (
      <div className="Mento-container">
        <h1 onClick={() => {setPageVal(); setMentoScreenCardNum(0)}} style={{color: 'white', fontSize: '1.3rem'}}>🏠 Go Back Home</h1>
        <div className="Mento-header"></div>
        <div className="Mento-descriptionbox">
          Mento is a mobile application that allows hosts to create and manage NFT-ticketed events of any size.<br /><br />
          This is a side project I have worked on with my three friends: a Product Manager, a Blockchain programmer, and a Graphic Designer. I was responsible for designing the UI in collaboration with the Graphic Designer, building the entire frontend using React Native and half of the backend with Typescript.
        </div>
        <h3 style={{color: 'white'}}>Why work on this?</h3>
        <div className="Mento-descriptionbox" style={{backgroundColor: '#071e2c'}}>
          All of us have firsthand frustrations with the inefficiencies of payment collection, ticket distribution and admission at today’s private events. Specifically, to get into most Stanford parties you have to physically go to someone’s house just so you can pay and pick up a wristband hours before the event. At fashion show events and influencer parties in NYC people still wait in long lines just to have their name checked for on a PDF. A family member who promotes clubs and hosts celebrity parties in NYC also explained to us how difficult it is from the host’s side to check for payment from guests who want to attend parties and promote while also distributing means of admission. Most of this currently has to be done via Instagram DMs. We realized that by making event creation inaccessible, platforms like TicketMaster and StubHub do not address the needs of less official events. This is how we decided that in order to solve these current issues, an accessible platform where people can create events, collect payments and prove admission all in one place needed to be built for the sake of hosts and guests.
          <br /><br />
          We also realized that the millions of tickets being distributed all around the world every day are a huge wasted opportunity for marketing, merchandising and building community with like-minded people. What if the Miami Heat wanted to make a cut of every resale of their tickets? What if Justin Bieber wanted to connect with the people who attended certain concerts? What if a collection of smaller country musicians in NYC trying to promote themselves wanted to create a country music-loving community who could attend all of their different concerts? Having the tickets on our platform be NFTs gives event hosts the opportunity to redefine what a digital ticket can be.
        </div>
        <h3 style={{color: 'white'}}>Outlining the Solution</h3>
        <div className="Mento-descriptionbox">
          First we brainstormed ideas for a product that solved the aforementioned problems. This step consisted of holding conversations with people who host events and friends from schools across the country about their event going experiences.
          <br /><br />
          Below is a list of the basic functionalities we want to provide for our user groups and simple outline of user navigation that we made on Figma:
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div className="Mento-descriptionbox" style={{backgroundColor: '#071e2c', marginTop: '2vh', width: '35.5vw', marginRight: '1vw'}}>
            <div style={{margin: 0, padding: 0, fontSize: '1.7rem'}}>Features for Event Hosts:</div>
            <ul className="subsection_list">
              <li>An event creation page with customizable dates, location, privacy setting, ticket pricing and more.</li>
              <li>Ability to select royalty percentage to charge on all secondary sales via smart contract logic.</li>
              <li>Automated smart contract deployment and NFT creation for the images the host uploads to their event.</li>
              <li>Secondary sale marketplaces are automatically deployed with their event on OpenSea and other decentralized marketplaces.</li>
              <li>Event day in-app ticket scanning and live guest list updates.</li>
              <li>Tools provided via a web-app dashboard to analyze event statistics.</li>
              <li>Easy methods to invite guests via code or private invitations.</li>
            </ul>
          </div>
          <div className="Mento-descriptionbox" style={{backgroundColor: '#071e2c', marginTop: '2vh', width: '35.5vw', marginLeft: '1vw'}}>
            <div style={{margin: 0, padding: 0, fontSize: '1.7rem'}}>Features for Event Guests:</div>
            <ul className="subsection_list">
              <li>Opportunity to join free and paid events hosted on Moment.</li>
              <li>Ability to send NFT tickets to external wallets like MetaMask.</li>
              <li>Integration with external wallets to allow all ticket holders to enter events.</li>
              <li>Internal resale marketplace where users can list their tickets.</li>
              <li>Compatibility with other resale marketplaces, i.e. OpenSea.</li>
              <li>Collectibles page where users can see all of the NFTs for events they have attended.</li>
              <li>Ticket holder verification via NFC/RFID or a QR code for all events hosted on Moment.</li>
            </ul>
          </div>
        </div>
        <div className="Mento-mvp-ideas"></div>
        <div className="Mento-figma-sketches"></div>
        <h3 style={{color: 'white'}}>Color & Logo Choices</h3>
        <div className="Mento-descriptionbox">
          We wanted to choose colors for the app and finalize a logo before starting to prototype since those decisions will determine the look and feel of the overall design. This was done through back-and-forths between the graphic designer and the rest of us co-founders.
          <br /><br />
          The first type of users that we would work with are partygoers in NYC. Thus, we wanted the colors to be fun and vibrant. Since our platform also uses a relatively new technology (the blockchain) we also wanted the app to feel futuristic. Therefore, we decided on the colors below and logo variations.
        </div>

        <div style={{display: 'flex', flexDirection: 'row', width: '100vw', justifyContent: 'space-between', width: '81vw', alignSelf: 'center'}}>
          <div className="Mento-colors"></div>
          <div className="Mento-logo-variations"></div>
        </div>

        <div className="Mento-logo-picked-container">
          <div className="Mento-logo-picked"></div>
          <div className="Mento-logo-picked-notes">
            <p className="subsection_title">Reasons for final logo choice</p>
            <ul className="subsection_list" style={{marginTop: 0}}>
              <li>Movement and excitement</li>
              <li>Sleek but friendly with rounded m</li>
              <li>Moving from one moment to another left to right</li>
              <li>Lowercase letter on app is familiar to user</li>
            </ul>
          </div>
        </div>

        <h3 style={{color: 'white', marginTop: '7vh'}}>Minimum Viable Product</h3>
        <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between'}}>
          <video style={{width: '25vw', height: '50vw'}} autoPlay={true} preload={'auto'} controls={true}>
            <source src={MomentVideoSrc} type="video/mp4" />
            Your browser does not support HTML5 video
          </video>
          <div className="Mento-descriptionbox" style={{width: '30vw', marginLeft: '5vw'}}>
            To the left is the demo we got accepted into YCombinator's Summer 2022 class with (we ended up turning down the offer). I developed the basic prototype completely on my own with a React Native frontend and NodeJS backend. We created this Minimum Viable Product to highlight the very barebone features of the app - being able to create and join events. This MVP was created to get feedback from people on the solution we are proposing for ticketing's issues and the overall feel of the product design.
          </div>
        </div>

        <h3 style={{color: 'white', marginTop: '7vh'}}>Beta Version</h3>
        <div className="Mento-descriptionbox" style={{backgroundColor: '#071e2c'}}>
          We decided to build out the beta version without any funding. Below are screenshots of the beta that is currently <a href={'https://apps.apple.com/us/app/mento-events/id1636342286'} style={{color: 'white'}}>on the App Store</a> and notes on the design choices we made. I built out the whole frontend with React Native, made the UI decisions and helped rebuild the backend with TypeScript.
        </div>
        
        <div className="Mento-screen-cards-container">
          <div className="Mento-screen-cards-arrow not-selectable" style={mentoScreenCardNum === 0 ? {backgroundColor: '#666666'} : {}} onClick={prevMentoScreenCard}>
            {"<"}
          </div>
          {renderMentoScreenCard()}
          <div className="Mento-screen-cards-arrow not-selectable" onClick={nextMentoScreenCard}>
            {">"}
          </div>
        </div>
        <div className="Mento-screen-card-num">
            {mentoScreenCardNum + 1} / 5
        </div>
        <a href="https://apps.apple.com/us/app/mento-events/id1636342286" target="_blank" style={{display: 'flex', alignSelf: 'center', textDecoration: 'none', color: 'black'}}>
          <div className="Mento-download-button">
            Download the beta on the App Store!
          </div>
        </a>
      </div>
    );
  } else if (pageVal === 2) {
    return (
      <div className="Scoring-container">
        <h1 onClick={() => {setPageVal(); setMentoScreenCardNum(0)}} style={{fontSize: '1.3rem'}}>🏠 Go Back Home</h1>
        <div className="Scoring-header">
          NFTScoring
          <div style={{color: '#707070', fontSize: '1.5rem', fontWeight: '600'}}>
            Share, Trade, Earn
          </div>
        </div>
        <div className="Scoring-descriptionbox" style={{marginTop: '4vh'}}>
          <a href="https://www.ycombinator.com/companies/nftscoring" target="_blank" style={{color: 'white'}}>NFTScoring</a> is an NFT trading platform with the goal of giving NFT investors all the information needed in order to make smart decisions when buying or selling NFTs. Anyone can use a free account, but there is also a premium version for users to gain more access.<br /><br />
          In this group project, we designed a mobile app for the platform using an iterative user-testing process to incorporate feedback into our final product. We expect our app to serve users within a range between beginners and moderately knowledgable about NFTs. The aim is to create a product that is easy to navigate for users who are new to NFT trading.
        </div>
        <h3>Sketching</h3>
        <div className="Scoring-descriptionbox">
          We came up with four different possible designs for the app. Each design imagines a different user flow through a unique organization of components for the app.
        </div>
        <div className="Scoring-sketch-slideshow-container">
          <div className="Scoring-arrow-div" onClick={prevScoringSketch} style={scoringSketchNum === 0 ? {backgroundColor: '#bbbbbb'} : {}}>
            {"<"}
          </div>
          <div className={"Scoring-sketch" + scoringSketchNum.toString()}></div>
          <div className="Scoring-arrow-div" onClick={nextScoringSketch}>
            {">"}
          </div>
        </div>
        <div className="Scoring-sketch-page-counter">
          {scoringSketchNum + 1} / 4
        </div>

        <h3>Wireframing</h3>
        <div className="Scoring-descriptionbox">
          Combining the best features of each sketch, we developed one coherent layout for the app's pages. The main flow of the app includes a "Home" page with a newsfeed, a "Wallet" page showing the user's current assets, a "Discover" page to serach for specific NFT's, and a "Learn" page with information about NFT trading and the app itself.
        </div>
        <div className="Scoring-lofi-container">
          <div className="Scoring-lofi-img Scoring-lofi1"></div>
          <div className="Scoring-lofi-img Scoring-lofi2"></div>
          <div className="Scoring-lofi-img Scoring-lofi3"></div>
          <div className="Scoring-lofi-img Scoring-lofi4" style={{marginTop: '2vh'}}></div>
          <div className="Scoring-lofi-img Scoring-lofi5" style={{marginTop: '2vh'}}></div>
          <div className="Scoring-lofi-img Scoring-lofi6" style={{marginTop: '2vh'}}></div>
        </div>

        <h3>Hi-fi Prototyping</h3>
        <div className="Scoring-descriptionbox">
          We then fleshed out the wireframes into a hi-fi interactive prototype.<br /><br />

          <a href="https://www.figma.com/proto/xqozh43vH31DjqnaspPwkY/NFTScoring-Draft-1?node-id=30%3A1373&starting-point-node-id=30%3A1373" target="_blank" style={{color: '#cce6ff'}}>Link to Prototype</a>
        </div>
        <iframe className="Scoring-iframe-figma" width="1000px" height="600px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxqozh43vH31DjqnaspPwkY%2FNFTScoring-Draft-1%3Fnode-id%3D30%253A1373%26starting-point-node-id%3D30%253A1373%26scaling%3Dscale-down" allowfullscreen></iframe>

        <h3>Critique</h3>
        <div className="Scoring-descriptionbox">
          We asked a group of peers to review our mockup and provide feedback on the interface. The feedback we received can be summarized by the following categories:
          <ul>
            <li><b>Popups:</b> the look of our popups didn't quite align with users' mental model for popups: ours were unexpecedly scrollable and hard to exit out of.</li>
            <li><b>Font Size:</b> the fonts across some of our pages were inconsistent and occasionally to small to read, even on mobile.</li>
            <li><b>Top Bar:</b> users found it strange that the top bar disappeared when scrolling, while the home bar on the bottom was sticky. The original top bar also had mild inconsistencies accross pages and occasionally got cut off by the notch in the top of the iPhone screen</li>
          </ul>
          To address these issues, we drafted a second version of the hi-fi prototype:
        </div>
        <iframe className="Scoring-iframe-figma" width="1000px" height="600px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxqozh43vH31DjqnaspPwkY%2FNFTScoring-Draft-1%3Fnode-id%3D30%253A1373%26starting-point-node-id%3D30%253A1373%26scaling%3Dscale-down" allowfullscreen></iframe>

        <h3>User Testing</h3>
        <div className="Scoring-descriptionbox" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
          <div>We conducted a remote usibility test using the service <a href="https://www.usertesting.com/" target="_blank" style={{color: 'white'}}>User Testing</a>. Users received the following instructions before interacting with the protoype:</div>
          <div style={{alignSelf: 'center', fontStyle: 'italic', width: '68vw', marginTop: '1rem', marginBottom: '1rem'}}>
            "Imagine you are a user of NFTScoring who wants to explore new NFTs that you may not have seen before. Navigate through the app until you find a popup for a trending NFT. Please think out loud with any thoughts that come to your head as you navigate through our site to help us understand your thinking!"
          </div>
          <div>Click on any of the below images to watch each user interact with the protoype:</div>
        </div>
        <div className="Scoring-usertest-img-container">
          <a href="https://app.usertesting.com/v/828f9186-60a5-4395-a61f-91dc8fd40bfa?encrypted_video_handle=518c6eb0-4255-4b0c-9805-9bc006e63f36#!/notes&shared_via=link" target="_blank">
            <div className="Scoring-usertest-img usertest1"></div>
          </a>
          <a href="https://app.usertesting.com/v/c7904919-3097-42bd-b833-e5782e27bf37?encrypted_video_handle=5c9cf38d-0296-4816-8ce1-ac9cb9a3d2a6#!/notes&shared_via=link" target="_blank">
            <div className="Scoring-usertest-img usertest2"></div>
          </a>
          <a href="https://app.usertesting.com/v/c721a7ac-4aac-4785-8785-6193694d1f08?encrypted_video_handle=8b0be460-a671-4689-b55e-9bd1e833a38e#!/notes&shared_via=link" target="_blank">
            <div className="Scoring-usertest-img usertest3"></div>
          </a>
        </div>

        <h3>User Testing Takeaways</h3>
        <div className="Scoring-descriptionbox">
          <ul>
            <li>We made the decision to include the "discovery" page as part of the "search" page that is indicated by a search bar icon tab. However, users were initially confused and thought the homepage is where they would find "new NFTs".</li>
            <li>Once they did figure out that the homepage was a social page, they navigated to the "search" page to find a new NFT, as the task asks them to do. However, users spent time figuring out what the difference was between the search bar on top and advanced search.</li>
            <li>In general, users were able to talk through and understand the "discovery" page as the place to explore new NFTs. However, a user who had to look up what an NFT is was really confused and did not even try to understand the statistics that show up. This indicates that we could have made our design more explicit for NFT newcomers.</li>
            <li>When the user who did not know what the NFT was read the task, they said that they did not know what an NFT was and looked at the top right corner of the homepage for a "question mark icon". However, they found it later in the bottom right corner. To make people unfamiliar with NFTs more comfortable, we could have included a tutorial or tips as the user enters the app.</li>
            <li>After arriving to the "discovery" page, users understood that the search bar on top was for them to enter any keyword to find relevant NFTs and the sections below were other ways of exploring new NFTs like the "trending" section.</li>
          </ul>
        </div>

        <h3>Outreach to NFTScoring founders</h3>
        <div className="Scoring-descriptionbox">
          As part of our last task, we reached out to the NFTScoring founders to let them know about our assignment, explain our design choices and invite them to look at our Figma.
        </div>
        <div className="Scoring-descriptionbox" style={{backgroundColor: '#dddddd', width: '65vw', color: 'black', marginTop: '4vh'}}>
          Hello NFTScoring founders,<br /><br />
          I am XXXXX, a student at Brown University. My peers (cc’d in this email) – XXXX, XXXX, XXXX – and I were tasked to design mockups for a YCombinator startup as an assignment for our UI/UX course. We chose NFTScoring because we are super interested in your vision of giving people superpowers to understand the NFT markets!<br /><br />
          As part of the assignment, we came up with NFTScoringapp designs without looking at any of the interfaces you have built, coming up with designs solely based on NFTScoring's description on the YC webpage. Our design intention was to build a platform that made information about NFTs accessible to the general public that might be intimidated by the new technology. A problem that we came across when doing this was that there is an overwhelming amount of information on the NFT market for a smaller mobile screen to display. To mitigate this issue, we intentionally included a lot of whitespace on our mockups and organized the app into five distinct pages with their own purposes.<br /><br />
          We also wanted to add a social aspect to the platform since the NFT market is very community-driven. A social feed is included as the first page users will see; we did this because it is a great way to promote trading and provides a feature that cannot be found in most NFT market platforms. A social network for NFTs would be valuable for newcomers to learn more about the market, for experts to build their brand by promoting their knowledge, and for the NFT community as a whole to have a collaboration hub.<br /><br />
          Thank you for taking the time to read this! If you have the time, we would appreciate it if you would look at our Figma for the mockups (linked here). You can also step through an interactive prototype by pressing the play button in the top right corner.<br /><br />
          The four of us are excited to see where NFTScoring goes and wish you the best on your journey.
        </div>
      </div>
    )
  } else if (pageVal === 3) {
    return (
    <div className="Pet-container">
      <h1 onClick={() => {setPageVal(); setMentoScreenCardNum(0)}} style={{fontSize: '1.3rem'}}>🏠 Go Back Home</h1>
      <div className="Pet-header">
        🐶 Cool Pet Store
      </div>
      <div className="Pet-descriptionbox" style={{marginTop: '4vh'}}>
        This was a project for my UI/UX class where we were expected to use React's state keeping abilities to create a list-based web interface: an interface for users to select items out of a list, which then aggregates them.<br /><br />
        I chose to make a fun web-app that lets you sort, filter, view details about and select favorites from a group of famous cartoon animal-like creatures. I took this assignment as an opportunity to test how implementing a minimalistic design (inspired by some of my favorite apps) could improve online shopping experiences. 
      </div>
      <h3>🎨 Design Intention</h3>
      <div className="Pet-descriptionbox">
        I have always felt that shopping on sites like <a href="https://amazon.com" target="_blank" style={{color: 'black'}}>Amazon</a> or <a href="https://walmart.com" target="_blank" style={{color: 'black'}}>Walmart</a> felt suffocating because of the sheer number of components a user sees on every screen. Even online shops with less products like <a href="https://flowergiftkorea.com/" target="_blank" style={{color: 'black'}}>Flower Gift Korea</a> have designs that feel cluttered and unstructured. Although this design could be intentional to drive more advertisements to the user, I wanted to make my list-based interface an alternative model to the modern ecommerce site.<br /><br />
        I decided to leverage <b>white space</b> to create a structured and neat interface. I believe that white space is the most powerful tools designers can use to gain Visual Power. Designers who have a lot of creative strength in the design concepts they create are conscious in using the space that users do not even think about. Even though it is often space that users are not even conscious of, it has a lot of power over the feel of the product.<br /><br />
        Below are two products that use white space really well to better their user experience.
      </div>
      <div style={{marginTop: '4vh', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center'}}>
        <a href="https://notion.so" target="_blank">
          <img className="Pet-notion-img" src={"https://images.ctfassets.net/spoqsaf9291f/5qIuCk841LJVBkcl0FPeoK/03928cc3aa47e25efac19dfcf658bd3e/roadmap-desktop.png"} />
        </a>
        <div className="Pet-descriptionbox" style={{width: '30vw', height: '21vw', marginLeft: '1vw'}}>
          A product that pairs white space and visual power really well is <a href="https://notion.so" target="_blank" style={{color: 'black'}}>Notion</a>. Previous daily planners like Evernote that I had have felt crowded and often made me feel more stressed than organized. Notion dominates their pages with white space which gives their users more breathing space to include whatever they have on their mind without the feeling of cramming. The way they use white space adds a lot of visual power to their overall product goal.
        </div>
      </div>
      <div style={{marginTop: '4vh', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center'}}>
        <a href="https://spotify.com" target="_blank">
          <div className="Pet-spotify-screen"></div>
        </a>
        <div className="Pet-descriptionbox" style={{width: '30vw', height: '27vw', marginLeft: '1vw'}}>
          Another product that I got inspiration from is <a href="https://spotify.com" target="_blank" style={{color: 'black'}}>Spotify</a>. The image on the left is a screenshot of what a user sees when opening a song popup and scrolling down to see the lyrics. Even though there is not much <i>white</i>, the designers leveraged white space to declutter the control buttons and make the lyrics easily readable. The design opts out of fitting as much text as possible on the card as possible to allow users to focus on a couple lines at a time.<br /><br />
          I also really appreciate Spotify using a color palette that matches the song cover playing. This subtle decision creates a much more immersive experience for the user. 
        </div>
      </div>

      <h3>✏️ Sketching</h3>
      <div className="Pet-descriptionbox">
        After thinking about my design intentions, I drew out basic sketches of the layout using Google Drawings. On one sketch I wrote out design notes to justify the way I was imagining the interface to look at and on the other, I wrote implementation notes to start thinking about how to leverage React and CSS to create the web app.
      </div>
      <div className="Pet-sketch-header">👨‍🎨 Design Notes</div>
      <div className="Pet-sketch-design"></div>
      <div className="Pet-sketch-header">👨‍💻 Implementation Notes</div>
      <div className="Pet-sketch-implementation"></div>

      <h3>👾 Implementation</h3>
      <div style={{marginTop: '2vh', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center'}}>
        <div className="Pet-descriptionbox" style={{width: '40vw'}}>
          The sketch was implemented and deployed as a React App (linked below). While implementing, I also added a popup feature where the user can click any item card to get more information about each pet.<br /><br />
          The attributes for each of the 12 pets are:
          <ul>
            <li>id: <i>unique int value</i></li>
            <li>name: <i>pet name</i></li>
            <li>imgUrl: <i>url to square image of the pet</i></li>
            <li>weight: <i>float value for weight in lbs</i></li>
            <li>price: <i>float value for price in USD</i></li>
            <li>flying: <i>boolean value indicating ability to fly</i></li>
            <li>furry: <i>boolean vlaue indicating furriness</i></li>
            <li>description: <i>description text</i></li>
            <li>description2: <i>additional description text</i></li>
            <li>themeColor: <i>hex color of pet's theme</i></li>
            <li>textColor: <i>black/white depending on darkness of themeColor</i></li>
            <li>youtubeEmbed: <i>YouTube embed video ID</i></li>
          </ul>
        </div>
        <div className="Pet-sample-card"></div>
      </div>
      <a href="https://sonnysnoop.github.io/cs1300-development/" target="_blank" style={{color: 'black', textDecorationLine: 'none', alignSelf: 'center'}}>
        <div className="Pet-link">
          Go to Implementation 😃
        </div>
      </a>
    </div>);
  }

  return (
    <div className="App">
      <div>
        <h1>🍎 John Apple</h1>
        <h2 style={{marginLeft: '20vw', fontSize: '2rem', marginTop: '10vh'}}>Thank you for visiting my Portfolio!</h2>
        <TypeAnimation
          sequence={[
            'I love to build products that solve complex problems with minimalistic designs.\nFrom my first coding venture in middle school to create a method for people to purchase MetroCards from home to my two SWE internships at Google during my time at Brown, I have loved creating software products that could improve people\'s lives.\nI am excited to work with you! 😃', // Types 'One'
            // 1000, // Waits 1s
            // 'I love to build products that enhance life experiences...', // Deletes 'One' and types 'Two'
            // 1000, // Waits 1s
            // 'I love to build products that make people...', // Types 'Three' without deleting 'Two'
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={false}
          speed={85}
          repeat={0}
          style={{ whiteSpace: 'pre-line', fontSize: '1.4rem', width: '60vw', marginLeft: '20vw', alignSelf: 'center', fontFamily: 'Alata' }}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10vh'}}>
        <div className="Cardsrow-container">
          {/* <a href="https://funny-kitsune-5eb078.netlify.app/" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'black'}}> */}
            <div className="Card-container" style={{backgroundColor: 'white'}} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} onClick={() => {setPageVal(0); handleMouseLeave()}}>
              {
                hoverVal === 0 ?
                <p className="Card-text">Redesigned the homepage of a community center in my neighborhood</p> :
                <div className="Card-cf-logo"></div>
              }
            </div>
          {/* </a> */}
          {/* <a href="http://example.com" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'black'}}> */}
            <div className="Card-container" style={{backgroundColor: 'black'}} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} onClick={() => {setPageVal(1); handleMouseLeave()}}>
              {
                hoverVal === 1 ?
                <p className="Card-text" style={{color: 'white'}}>Created a mobile app with friends to host NFT-ticketed events</p> :
                <div className="Card-mento-logo"></div>
              }
            </div>
          {/* </a> */}
          {/* <a href="https://jocular-bunny-cf92f1.netlify.app/" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'black'}}> */}
            <div className="Card-container" style={{backgroundColor: 'white'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} onClick={() => {setPageVal(2); handleMouseLeave()}}>
              {
                hoverVal === 2 ?
                <p className="Card-text" style={{width: '80%'}}>Designed a mobile app for a YC startup with classmates</p> :
                <div className="Card-nftscore-logo"></div>
              }
            </div>
          {/* </a> */}
          {/* <a href="https://sonnysnoop.github.io/cs1300-development" target="_blank" style={{display: 'block', textDecoration: 'none', color: 'black'}}> */}
            <div className="Card-container" style={{backgroundColor: '#00004d'}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} onClick={() => {setPageVal(3); handleMouseLeave()}}>
              {
                hoverVal === 3 ?
                <p className="Card-text" style={{width: '80%', color: 'white'}}>Designed and built a React web app for purchasing fictional pets</p> :
                <p className="Card-emojis">🐰🏪</p>
              }
            </div>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default App;
