import React, {Component} from 'react';
import  MenuList from './MenuList';
import HeaderPrivate from './HeaderPrivate';
class AboutUs extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Loading: false
		}
	}

	element = () => (
		<div className="container-fluid">
			<div className="sidebar">
				<MenuList  disabled={this.state.loading}/>
			</div>

			<div className="row">
        <div className="col private-wrapper">
          <HeaderPrivate menu_list={this.state.loading}/>
					<div className="wrapper">
					<div className="borderLine"></div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <h1><span className="icon dripicons-article" />Acerca de nosotros: </h1>
							</div>
							<div className="col-lg-10 col-xl-8">
							<p align="justify">EL TIEMPO Casa Editorial es el grupo de medios más influyente de Colombia y el principal proveedor de contenido de calidad en el país que evoluciona al ritmo de las tecnologías y de las audiencias. Nuestra principal fortaleza, EL TIEMPO, es desde hace más de un siglo el periódico nacional más respetado y reconocido en Colombia.

									Hoy le apostamos a la innovación y por eso, permanentemente ofrecemos nuevos servicios y fusionamos nuestros negocios de manera rentable y bajo múltiples plataformas para responder a las necesidades de las audiencias.

									Contamos con más de 30 marcas, ampliamente reconocidas en el mercado, a través de las cuales construimos experiencias con diversas audiencias atractivas para nuestros anunciantes.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
	render(){
			return this.element();
	}
}
export default AboutUs;