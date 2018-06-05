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
		            	${this.jsTreeQuery()}
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


	jsTreeQuery(){

		return `        <div class="dd" id="nestable3">
				            <ol class="dd-list">
				                <li class="dd-item dd3-item" data-id="13">
				                    <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 13</div>
				                </li>
				                <li class="dd-item dd3-item" data-id="14">
				                    <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 14</div>
				                </li>
				                <li class="dd-item dd3-item" data-id="15">
				                    <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 15</div>
				                    <ol class="dd-list">
				                        <li class="dd-item dd3-item" data-id="16">
				                            <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 16</div>
				                        </li>
				                        <li class="dd-item dd3-item" data-id="17">
				                            <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 17</div>
				                        </li>
				                        <li class="dd-item dd3-item" data-id="18">
				                            <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Item 18</div>
				                        </li>
				                    </ol>
				                </li>
				            </ol>
				        </div>
				`;
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
		                  <div id="menu-obj"class="btn-floating green">
		                    <i class="material-icons">widgets</i>
		                  </div>
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

	    $('#menu-obj').on('touchstart', function() {
	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
	       window.dispatchEvent(LinkEvent);
	    });

	}

}