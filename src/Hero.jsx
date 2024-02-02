import heroSVG from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby organic keytar gastropub tumblr glossier ascot celiac
            asymmetrical waistcoat try-hard pinterest dreamcatcher master
            cleanse neutral milk hotel big mood. Cardigan gluten-free blackbird
            spyplane, blog sartorial man bun glossier lomo stumptown migas
            chicharrones green juice bitters subway tile. Food truck 90's
            tousled austin. Knausgaard mustache shoreditch twee affogato schlitz
            chillwave. Tumblr farm-to-table coloring book viral, shoreditch
            8-bit letterpress hashtag cronut butcher keffiyeh taxidermy hot
            chicken. Cloud bread same cliche yes plz waistcoat church-key
            jianbing mlkshk stumptown asymmetrical synth kinfolk schlitz.
          </p>
        </div>
        <div className="img-container">
          <img src={heroSVG} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
