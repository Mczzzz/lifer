import jstree from 'jstree';
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

		return `<div class="fixed-action-btn " style="bottom: 19px; left: 19px; width: 60px">
		              <a class="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow">
		                <i class="material-icons">add</i>
		              </a>
		              <ul>
		                <li>
		                  <a href=""  class="btn-floating blue">
		                    <i class="material-icons">face</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="#!" id="menu-obj"class="btn-floating green">
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


	activeJs(){

	    //$('#nestable3').nestable();

	    $('#menu-obj').on('click', function() {

	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
	       window.dispatchEvent(LinkEvent);
	    });


	}

}