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

		return `
			<div id="main">
		      <!-- START WRAPPER -->
		      <div class="wrapper">
		        <!-- START CONTENT -->
		        <section id="content">

		          <!--start container-->
		          <div class="container">
		            <div class="section">

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



	floatingHTML(){

		return`
<!-- Floating Action Button -->
		            <div class="fixed-action-btn " style="bottom: 50px; left: 19px; width: 60px">
		              <a class="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow">
		                <i class="material-icons">add</i>
		              </a>
		              <ul>
		                <li>
		                  <a href="css-helpers.html" class="btn-floating blue">
		                    <i class="material-icons">help_outline</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="cards-extended.html" class="btn-floating green">
		                    <i class="material-icons">widgets</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="app-calendar.html" class="btn-floating amber">
		                    <i class="material-icons">today</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="app-email.html" class="btn-floating red">
		                    <i class="material-icons">mail_outline</i>
		                  </a>
		                </li>
		              </ul>
		            </div>
		            <!-- Floating Action Button -->`;

	}

	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}

}