export default class Layout {

	constructor(){

		this.initBody();

	}


	initBody(){

		let container = document.createElement("div");
		constainer.class = "container";

			let header = document.createElement("div");
			header.class = "header";
			container.append(header);

			let main = document.createElement("div");
			main.class = "main";
			container.append(main);

				let breadcrumb = document.createElement("div");
				breadcrumb.class = "breadcrumb";
				main.append(breadcrumb);

				let top = document.createElement("div");
				top.class = "top";
				main.append(top);

				let bottom = document.createElement("div");
				bottom.class = "bottom";
				main.append(bottom);

					let manage = document.createElement("div");
					manage.class = "manage";
					bottom.append(manage);

					let tools = document.createElement("div");
					tools.class = "tools";
					bottom.append(tools);

			let footer = document.createElement("div");
			footer.class = "footer";
			container.append(footer);


		$('body').append(container);

/*	    let body = `<div class="container">
              <div class="header"></div>
              <div class="main">
                <div class="breadcrumb"></div>
                <div class="top"></div>
                <div class="bottom">
                  <div class="manage"></div>
                  <div class="tools"></div>
                </div>
              </div>
              <div class="footer"></div>
             </div>`;
*/

	}


	initCSS(){


	}

}