import React, {useState} from 'react';
import  MenuList from './MenuList';
import HeaderPrivate from './HeaderPrivate';
import { useFirestore, useFirestoreDocData} from 'reactfire';
import InfoModuleList from "./InfoModuleList";

export default function ShopFunction() {
	const [loading] = useState(0);
	const shopRef  = useFirestore()
		.collection('shop')
		.doc('BOrb8r5fKvpt5qmZpOOQ')

	const shop = useFirestoreDocData(shopRef);

	const shopArray = []
	let i = 0;
	Object.keys(shop).forEach(element => {
		shopArray[element] = Object.values(shop)[i];
		i++;
	});

	
	return (
		<div className="container-fluid">
			<div className="sidebar">
				<MenuList  disabled={loading}/>
			</div>

			<div className="row">
				<div className="col private-wrapper">
					<HeaderPrivate menu_list={loading}/>
					<div className="wrapper">
					<div className="borderLine"></div>
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<h1><span className="icon dripicons-article" />Lista de Categorias de prendas:</h1>
								<InfoModuleList modules={Object.values(shopArray)}/>
							</div>
						</div>
					</div>
				</div>
			</div>
	
		</div>
	)
}