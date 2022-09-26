import hero_picture from './images/shen_hero.png'

const Hero = () => {
    return ( 
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">Simple React Application <br /> Deployed to <br /> Github Pages</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt nobis sunt magnam consequatur eius veritatis. 
                        Nisi, excepturi? Modi rerum maxime ex similique id, ipsam esse,
                        dignissimos error, beatae aut at!
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Nothing here</button>
                        {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">NADA</button> */}
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded-lg-3" src={hero_picture} alt="" width="100%"/>
                </div>
            </div>
        </div>
     );
}

export default Hero;