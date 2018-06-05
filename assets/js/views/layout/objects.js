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
		            	inObject
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