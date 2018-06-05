import Header from './sections/header.js';
import Footer from './sections/footer.js';

export default class Objects{


	getHTMLPage(){

		console.log('on passe dans objet');
		let page = this.headerHTML();
		
		page += this.bodyHTML();

		

		page += this.footerHTML();

		return page;
	}


	headerHTML(){

				let header = new Header();

				return header.addTags();
	}
		


	bodyHTML(){

		return `
			<div id="main">
		      <!-- START WRAPPER -->
		      <div class="wrapper">
		        <!-- START CONTENT -->
		        <section id="content">

		          <!--start container-->
		          <div class="container">
		            <div class="section">
		            	<div><input type="text" id="plugins4_q" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;"></div>
				        <div id="jstree_demo_div"></div>
				        <hr>
				        <div id="jstree_object_tree"></div>
				        <hr>
				        <div id="action">
				        <button id="bInfos" name="button">Infos</button>
				        <button name="button">Evènements</button>
				        </div>
				        <hr>
				        <div id="infos">
				          Nom :<input type="text" id="infosName" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;">
				          <br />
				          <input id="InfosPhoto" type="file" accept="image/*"  capture="camera" placeholder="titre info">
				          <br />
				          <button name="button">+ Text /lien</button>
				          <button name="button">+ Photo/video/fichier</button>
				          <button name="button">+ Valeur</button>
				          <br />
				          <textarea id="InfosText" rows="4" cols="50" placeholder="Ton Texte"></textarea>
				          <br />
				          <input id="InfosValeur" type="number" step="any"  placeholder="1000">
				          <select id="unityType"></select>
				          <select id="unities"></select>
				          <br />
				          <button id="infosValid" name="button">Enregistrer</button>
				        </div>
				        <hr>

				        <div id="evenement"></div>
 
		              <div class="divider"></div>
		            </div>
		          
		          </div>
		          <!--end container-->
		        </section>
		        <!-- END CONTENT -->
		      </div>
		      <!-- END WRAPPER -->
		    </div>`;


	}


	jsTreeTest(){

	//	return `<div id="jstree_demo_div"></div>`;
	}


	


	

	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}

}