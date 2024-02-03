import "./About.css"
import Screenshot from "../../assets/Screenshot Main Test.png"
import ScreenshotR from "../../assets/Screenshot Main Results.png"

export default function About() {
  return <>
    <div className="about-container">
      <section className="text-container">
        <div className="about-text">
          <h1>Welcome to Typrr!</h1>
          <p>We're thrilled that you've found your way to our page. Typpr started as a passion project and has evolved
            into a tool for anyone looking to enhance their typing skills and track their progress.</p>
          <br/>
          <h1>About Us</h1>
          <p>At Typpr, we believe in the power of typing as an essential skill in the modern world. Our goal is to
            assist users in improving their typing skills in an engaging and enjoyable way while tracking their
            progress.</p>
        </div>
        <div className="about-text">
          <h1>What We Offer</h1>
          <h2>Typing Test and Performance Measurement:</h2>
          <p>Discover your typing proficiency with our accurate typing test. Upon completion, you'll instantly receive
            an overview of your performance in the form of an informative bar chart. It's the perfect way to see where you
            stand and how you can grow.</p>
          <br/>
          <h2>Data Storage and Access:</h2>
          <p>Understanding the importance of progress tracking, Typrr offers the option to save your
            scores. This way, you can always revisit your achievements and monitor improvements.</p>
          <br/>
          <h2>Our Mission</h2>
          <p>Our mission is simple: to make typing fun, educational, and measurable. Typrr is not just a
            platform for learning but also for growing and achieving success in your typing skills.</p>
        </div>
        <div className="about-text">
          <h1>Proud School Project</h1>
          <p>We're excited to share that Charlie Eysbroek, the creator of Typrr, developed this website as part of his school's
            final project and successfully graduated! This is the result of dedication, creativity, and hard work.</p>
          <br/>
          <p>Thank you for being part of our community. We hope Typrr enriches your typing experience and contributes to
            your personal and professional development.</p><br/>
          <p>Enjoy and happy typing!</p><br/><br/>
          <p>The Typrr Team</p>
        </div>
      </section>
      <section className="img-container">
        <h2>Figma screenshots</h2><br/>
        <img src={Screenshot} alt="Screenshot"/>
        <img src={ScreenshotR} alt="Screenshot"/>
      </section>
    </div>
  </>
};