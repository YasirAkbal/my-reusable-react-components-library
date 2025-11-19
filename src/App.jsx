import './App.css'
import Badge from './components/badge/Badge.jsx'
import Banner from './components/banner/banner.jsx'
import Card from './components/card/Card.jsx' 
import TestBannerView from './components/banner/TestBannerView.jsx'
import TestCardView from './components/card/TestCardView.jsx'
import TestimonialIcon from './assets/testimonial-icon.png'
import Christina from './assets/christina.jpg'
import TestimonialLogo from './assets/testimonial-logo.png';
import Testimonial from './components/testimonial/Testimonial.jsx'

function App() {
  return (
    <>
      <Badge color="blue" type="square">Badge</Badge>
      <Badge color="red" type="square">Badge</Badge>
      <Badge color="yellow" type="pill">Badge</Badge>
      <Badge color="indigo" type="pill">Badge</Badge>

      <br/>
      <br/>

      <Banner 
        type="success"
        title="Congratulations!" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <br/>
      <Banner 
        type="error"
        title="An error occured!" 
      />
      <br/>

      <Banner>
        <TestBannerView align="center" />
      </Banner>
      
      <br/>
      <br/>

      <Card
        title="Easy Deployment"
        description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus."
      />
      <br/>
      <Card>
        <TestCardView />
      </Card>

      <br/>
      <br/>
      <Testimonial platform="desktop" type="with-image"
        img={{ src: Christina, alt: "Christina" }}
        icon={TestimonialIcon}
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        name="Christina Doe"
        position="Software Engineer"
      />  
      <br/>
      <Testimonial platform="mobile" type="with-image"
        img={{ src: Christina, alt: "Christina" }}
        icon={TestimonialIcon}
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        name="Christina Doe"
        position="Software Engineer"
      /> 
      <br/>
      <br/>

      <Testimonial platform="desktop" type="without-image"
        img={{ src: TestimonialLogo, alt: "Testimonial Logo" }}
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        name="May Andersons"
        position="Workcation, CTO"
      />

      <br/>

      <Testimonial platform="mobile" type="without-image"
        img={{ src: TestimonialLogo, alt: "Testimonial Logo" }}
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        name="May Andersons"
        position="Workcation, CTO"
      />
    </>
  )



}

export default App
