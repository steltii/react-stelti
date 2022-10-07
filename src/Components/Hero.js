import hero_picture from '../images/shen_hero.png'

const Hero = () => {
    return ( 
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Simple React Application <br /> Deployed to <br /> Github Pages</h1>
                        <div className="hero_list">
                            <h3>Application segments</h3>
                            <ul>
                                <li>create-react-app</li>
                                <li><a href="https://pages.github.com">Github pages</a> used for deployment</li>
                                <li>Custom domain from <a href="https://www.gandi.net">Gandi.net</a></li>
                                <li>Forwarding traffic to github using the custom subdomain using <a href="https://dns.he.net">dns.he.net</a></li>
                            </ul>
                        </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Nothing here</button>
                        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">NADA</button> */}
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={hero_picture} alt="" width="100%"/>
                </div>
            </div>
        </div>
     );
}

export default Hero;