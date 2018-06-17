export default class Layout {

	constructor(){

		this.initBody();
		this.initCSS();
	}


	initBody(){

		let container = document.createElement("div");
		container.className = "container";

			let header = document.createElement("div");
			header.className = "header";
			container.append(header);

			let main = document.createElement("div");
			main.className = "main";
			container.append(main);

				let breadcrumb = document.createElement("div");
				breadcrumb.className = "breadcrumb";
				main.append(breadcrumb);

				let top = document.createElement("div");
				top.className = "top";
				main.append(top);

				let bottom = document.createElement("div");
				bottom.className = "bottom";
				main.append(bottom);

					let manage = document.createElement("div");
					manage.className = "manage";
					bottom.append(manage);

					let tools = document.createElement("div");
					tools.className = "tools";
					bottom.append(tools);

			let footer = document.createElement("div");
			footer.className = "footer";
			container.append(footer);


		$('body').append(container);

	}


	initCSS(){

			let css = document.createElement("style");
			css.type = "text/css";
			css.id = "layout_css_style";

			css.innerHTML = `	body{
									margin:0px;
									background-color: blue;
								}

								.container{
									
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									background-color: grey;
									align-items: stretch;
								}	

									.header{
										background-color: green;
										height:56px;
									}

									.main{
										flex:1;
										background-color: orange;
										display: flex;
										flex-direction: column;
										
									}
										.breadcrumb{
											background-color: grey;
											overflow-x: scroll;
										}
										.top{
											flex:1;
											background-color: red;
											overflow-y: scroll;
										}

										.bottom{

											background-color: purple;
										}

									.footer{
										background-color: green;
										height:10px;
									}
							`;

			$('body').append(css);


	}

}