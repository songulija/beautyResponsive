import "./app.scss";
import menuSvg from './images/menu.svg'
import exitSvg from './images/exit.svg'
import watchSvg from './images/watch.svg'
import illustrationSvg from './images/illustration.svg'
import holdingPhoneJpg from './images/holding-phone.jpg'
import personJpg from './images/person.jpg'

function App() {
  return (
    <div className="app">
      {/* we have our navbar container we'll have another smaller container which will hold navigation bar */}
      <div className="navbar">
        <div className="container">
          {/* logo as text, clickable, we'll add style to span text */}
          <a className='logo' href="#">
            Remember<span>That</span>
          </a>

          {/* hamburger menu for mobile */}
          <img id='mobile-cta' className='mobile-menu' src={menuSvg} alt='Open navigation'/>
          {/* we'll have to ul's, one on right second on right side */}
          <nav>
            {/* x sign to close navigation when on mobile */}
            <img id='mobile-exit' className='mobile-menu-exit' src={exitSvg} alt='Close navigation'/>

            <ul className='primary-nav'>
              <li className='current'>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>

            <ul className='secondary-nav'>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className='go-premium'>
                <a href="#">Go Premium</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    {/* end of navbar */}
    
    {/* semantic tag SECTION. typically section bellow navigation called with class 'hero'  */}
    <section className='hero'>
       {/* inside we'll  have smaller container that holds two others which have data in them*/}
       {/* it'll be centered and added padding */}
       <div className='container'>
        <div className='left-col'>
          <p className='subhead'>It's Nitty &amp; Gritty</p>
          <h1>A Task App That Doesn't Stink</h1>
          {/* another container which 'll hold  two buttons*/}
          <div className='hero-cta'>
            <a className='primary-cta' href='#'>Try for free</a>
            <a className='watch-video-cta' href='#'><img src={watchSvg} alt='Watch a Video'/>Watch a Video</a>
          </div>
        </div>

        {/* image on right side. with flex all container elements will be placed each vertically
        next to each other */}
        <img src={illustrationSvg} alt='Illustration'/>
      
       </div>
    </section>

   {/* second  section which holds smaller container which then holds data that we'll display */}
    <section className='features-section'>
        <div className='container'>
          <ul>
            <li>Unlimited Tasks</li>
            <li>SMS Task Reminders</li>
            <li>Confetti Explosions upon Task Completions</li>
            <li>Social Media Announcements</li>
            <li>Real Time Collaboration</li>
            <li>Other awesome features</li>
          </ul>

          <img src={holdingPhoneJpg} alt='Man holding phone'/>

        </div>
    </section>

    {/* third Section which holds smaller cantainer which then holds data that we'll display  */}
    <section className='testimonials-section'>
        <div className='container'>
          {/* we will have three ul with list items inside */}
          <ul>
            <li><img src={personJpg} alt=''/></li>
            <blockquote>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</blockquote>
            <cite>- Jane Doe</cite>
          </ul>

          <ul>
            <li><img src={personJpg} alt=''/></li>
            <blockquote>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</blockquote>
            <cite>- Jane Doe</cite>
          </ul>
          
          <ul>
            <li><img src={personJpg} alt=''/></li>
            <blockquote>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</blockquote>
            <cite>- Jane Doe</cite>
          </ul>
        </div>

    </section>

    {/* last section which holds smaller cantainer which then holds data that we'll display*/}
    <section className='contact-section'></section>
        <div className='container'>
          {/* cantainer holds  two other containers contact-left and contact-right*/}
          <div className='contact-left'>
            <h2>Contact</h2>
            <form>
              <label>Email</label>
              <input type='email' id='email' name='email'/>
              <label>Message</label>
              <textarea type='text' id='message' name='message' cols='30' rows='10'></textarea>
              <button className='submit'>Send message</button>
            </form>
          </div>

          {/*  */}
          <div className='contact-right'>
            <h2>Hello</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.352033545884!2d25.25517172789439!3d54.66823184383972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd95c85d06c1a1%3A0x304060b9a097e0b1!2sLuminor%20ATM!5e0!3m2!1slt!2slt!4v1618569775380!5m2!1slt!2slt" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
    </div>
  );
  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.352033545884!2d25.25517172789439!3d54.66823184383972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd95c85d06c1a1%3A0x304060b9a097e0b1!2sLuminor%20ATM!5e0!3m2!1slt!2slt!4v1618569775380!5m2!1slt!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
}

export default App;
