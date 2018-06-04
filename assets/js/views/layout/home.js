import Header from './sections/header.js';
import Footer from './sections/footer.js';

export default class Home{


	getHTMLPage(){

		let page = this.headerHTML();
		
		page += this.bodyHTML();

		//floating elements
		page += this.floatingHTML();

		page += this.footerHTML();

		return page;
	}


	headerHTML(){

				let header = new Header();

				return header.addTags();
	}
		


	bodyHTML(){

		let addJstreeHTMLElement = this.jsTreeTest();
		return `
			<div id="main">
		      <!-- START WRAPPER -->
		      <div class="wrapper">
		        <!-- START CONTENT -->
		        <section id="content">

		          <!--start container-->
		          <div class="container">
		            <div class="section">
		            	${addJstreeHTMLElement}
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

		return `<div id="jstree_demo_div"></div>`;
	}




	floatingHTML(){

		return`<div class="fixed-action-btn " style="bottom: 19px; left: 19px; width: 60px">
		              <a class="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow">
		                <i class="material-icons">add</i>
		              </a>
		              <ul>
		                <li>
		                  <a href="" class="btn-floating blue">
		                    <i class="material-icons">face</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="" class="btn-floating green">
		                    <i class="material-icons">widgets</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="app-calendar.html" class="btn-floating amber">
		                    <i class="material-icons">today</i>
		                  </a>
		                </li>
		              </ul>
		            </div>`;

	}

	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}

}