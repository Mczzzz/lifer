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
		        <!-- START LEFT SIDEBAR NAV-->
		        <aside id="left-sidebar-nav" class="nav-expanded nav-lock nav-collapsible">
		          <div class="brand-sidebar">
		            <h1 class="logo-wrapper">
		              <a href="index.html" class="brand-logo darken-1">
		                <img src="../../images/logo/materialize-logo.png" alt="materialize logo">
		                <span class="logo-text hide-on-med-and-down">Materialize</span>
		              </a>
		              <a href="#" class="navbar-toggler">
		                <i class="material-icons">radio_button_checked</i>
		              </a>
		            </h1>
		          </div>
		          <ul id="slide-out" class="side-nav fixed leftside-navigation ps-container ps-active-y" style="transform: translateX(-100%);">
		            <li class="no-padding">
		              <ul class="collapsible" data-collapsible="accordion">                
		                <li class="bold active">
		                  <a class="collapsible-header  waves-effect waves-cyan active">
		                    <i class="material-icons">pages</i>
		                    <span class="nav-text">Pages</span>
		                  </a>
		                  <div class="collapsible-body" style="display: block;">
		                    <ul>                      
		                      <li class="active">
		                        <a href="page-blank.html">
		                          <i class="material-icons">keyboard_arrow_right</i>
		                          <span>Blank</span>
		                        </a>
		                      </li>
		                    </ul>
		                  </div>
		                </li>
		              </ul>
		            </li>
		            <li class="li-hover">
		              <p class="ultra-small margin more-text">MORE</p>
		            </li> 
		            <li class="no-padding">
		              <ul class="collapsible" data-collapsible="accordion">
		                <li class="bold">
		                  <a class="collapsible-header waves-effect waves-cyan">
		                    <i class="material-icons">photo_filter</i>
		                    <span class="nav-text">Menu Levels</span>
		                  </a>
		                  <div class="collapsible-body">
		                    <ul class="collapsible" data-collapsible="accordion">
		                      <li>
		                        <a href="ui-basic-buttons.html">
		                          <i class="material-icons">keyboard_arrow_right</i>
		                          <span>Second level</span>
		                        </a>
		                      </li>
		                      <li class="bold">
		                        <a class="collapsible-header waves-effect waves-cyan">
		                          <i class="material-icons">keyboard_arrow_right</i>
		                          <span class="nav-text">Second level child</span>
		                        </a>
		                        <div class="collapsible-body">
		                          <ul class="collapsible" data-collapsible="accordion">
		                            <li>
		                              <a href="ui-basic-buttons.html">
		                                <i class="material-icons">keyboard_arrow_right</i>
		                                <span>Third level</span>
		                              </a>
		                            </li>
		                            <li class="bold">
		                              <a class="collapsible-header waves-effect waves-cyan">
		                                <i class="material-icons">keyboard_arrow_right</i>
		                                <span class="nav-text">Third level child</span>
		                              </a>
		                              <div class="collapsible-body">
		                                <ul class="collapsible" data-collapsible="accordion">
		                                  <li>
		                                    <a href="ui-basic-buttons.html">
		                                      <i class="material-icons">keyboard_arrow_right</i>
		                                      <span>Forth level</span>
		                                    </a>
		                                  </li>
		                                  <li>
		                                    <a href="ui-extended-buttons.html">
		                                      <i class="material-icons">keyboard_arrow_right</i>
		                                      <span>Forth level</span>
		                                    </a>
		                                  </li>
		                                </ul>
		                              </div>
		                            </li>
		                          </ul>
		                        </div>
		                      </li>
		                    </ul>
		                  </div>
		                </li>
		              </ul>
		            </li>            
		            <li>
		              <a href="../../../documentation" target="_blank">
		                <i class="material-icons">import_contacts</i>
		                <span class="nav-text">Documentation</span>
		              </a>
		            </li>
		            <li>
		              <a href="https://pixinvent.ticksy.com" target="_blank">
		                <i class="material-icons">help_outline</i>
		                <span class="nav-text">Support</span>
		              </a>
		            </li>
		          <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; height: 912px; right: 3px;"><div class="ps-scrollbar-y" style="top: 0px; height: 855px;"></div></div></ul>
		          <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only gradient-45deg-light-blue-cyan gradient-shadow">
		            <i class="material-icons">menu</i>
		          </a>
		        </aside>
		        <!-- END LEFT SIDEBAR NAV-->
		        <!-- //////////////////////////////////////////////////////////////////////////// -->
		        <!-- START CONTENT -->
		        <section id="content">
		          <!--breadcrumbs start-->
		          <div id="breadcrumbs-wrapper">
		            <!-- Search for small screen -->
		            <div class="header-search-wrapper grey lighten-2 hide-on-large-only">
		              <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Explore Materialize">
		            </div>
		            <div class="container">
		              <div class="row">
		                <div class="col s10 m6 l6">
		                  <h5 class="breadcrumbs-title">Blank Page</h5>
		                  <ol class="breadcrumbs">
		                    <li><a href="index.html">Dashboard</a></li>
		                    <li><a href="#">Pages</a></li>
		                    <li class="active">Blank Page</li>
		                  </ol>
		                </div>
		                <div class="col s2 m6 l6">
		                  <a class="btn dropdown-settings waves-effect waves-light breadcrumbs-btn right gradient-45deg-light-blue-cyan gradient-shadow" href="#!" data-activates="dropdown1">
		                    <i class="material-icons hide-on-med-and-up">settings</i>
		                    <span class="hide-on-small-onl">Settings</span>
		                    <i class="material-icons right">arrow_drop_down</i>
		                  </a><ul id="dropdown1" class="dropdown-content">
		                    <li><a href="#!" class="grey-text text-darken-2">Access<span class="badge">1</span></a>
		                    </li>
		                    <li><a href="#!" class="grey-text text-darken-2">Profile<span class="new badge">2</span></a>
		                    </li>
		                    <li><a href="#!" class="grey-text text-darken-2">Notifications</a>
		                    </li>
		                  </ul>
		                  
		                </div>
		              </div>
		            </div>
		          </div>
		          <!--breadcrumbs end-->
		          <!--start container-->
		          <div class="container">
		            <div class="section">
		              <p class="caption">A Simple Blank Page to use it for your custome design and elements.</p>
		              <div class="divider"></div>
		            </div>
		            <!-- Floating Action Button -->
		            <div class="fixed-action-btn " style="bottom: 50px; right: 19px;">
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
		            <!-- Floating Action Button -->
		          </div>
		          <!--end container-->
		        </section>
		        <!-- END CONTENT -->
		        <!-- //////////////////////////////////////////////////////////////////////////// -->
		        <!-- START RIGHT SIDEBAR NAV-->
		        <aside id="right-sidebar-nav">
		          <ul id="chat-out" class="side-nav rightside-navigation right-aligned ps-container ps-active-y" style="transform: translateX(100%);">
		            <li class="li-hover">
		              <div class="row">
		                <div class="col s12 border-bottom-1 mt-5">
		                  <ul class="tabs">
		                    <li class="tab col s4">
		                      <a href="#activity" class="active">
		                        <span class="material-icons">graphic_eq</span>
		                      </a>
		                    </li>
		                    <li class="tab col s4">
		                      <a href="#chatapp">
		                        <span class="material-icons">face</span>
		                      </a>
		                    </li>
		                    <li class="tab col s4">
		                      <a href="#settings">
		                        <span class="material-icons">settings</span>
		                      </a>
		                    </li>
		                  <li class="indicator" style="right: 186px; left: 0px;"></li></ul>
		                </div>
		                <div id="settings" class="col s12" style="display: none;">
		                  <h6 class="mt-5 mb-3 ml-3">GENERAL SETTINGS</h6>
		                  <ul class="collection border-none">
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Notifications</span>
		                        <div class="switch right">
		                          <label>
		                            <input checked="" type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>Use checkboxes when looking for yes or no answers.</p>
		                    </li>
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Show recent activity</span>
		                        <div class="switch right">
		                          <label>
		                            <input checked="" type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
		                    </li>
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Notifications</span>
		                        <div class="switch right">
		                          <label>
		                            <input type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>Use checkboxes when looking for yes or no answers.</p>
		                    </li>
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Show recent activity</span>
		                        <div class="switch right">
		                          <label>
		                            <input type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
		                    </li>
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Show your emails</span>
		                        <div class="switch right">
		                          <label>
		                            <input type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>Use checkboxes when looking for yes or no answers.</p>
		                    </li>
		                    <li class="collection-item border-none">
		                      <div class="m-0">
		                        <span class="font-weight-600">Show Task statistics</span>
		                        <div class="switch right">
		                          <label>
		                            <input type="checkbox">
		                            <span class="lever"></span>
		                          </label>
		                        </div>
		                      </div>
		                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
		                    </li>
		                  </ul>
		                </div>
		                <div id="chatapp" class="col s12" style="display: none;">
		                  <div class="collection border-none">
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-1.png" alt="" class="circle cyan">
		                      <span class="line-height-0">Elizabeth Elliott </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">5.00 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Thank you </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-2.png" alt="" class="circle deep-orange accent-2">
		                      <span class="line-height-0">Mary Adams </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">4.14 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Hello Boo </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-3.png" alt="" class="circle teal accent-4">
		                      <span class="line-height-0">Caleb Richards </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">9.00 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Keny ! </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-4.png" alt="" class="circle cyan">
		                      <span class="line-height-0">June Lane </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">4.14 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Ohh God </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-5.png" alt="" class="circle red accent-2">
		                      <span class="line-height-0">Edward Fletcher </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">5.15 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Love you </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-6.png" alt="" class="circle deep-orange accent-2">
		                      <span class="line-height-0">Crystal Bates </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">8.00 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Can we </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-7.png" alt="" class="circle cyan">
		                      <span class="line-height-0">Nathan Watts </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">9.53 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Great! </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-8.png" alt="" class="circle red accent-2">
		                      <span class="line-height-0">Willard Wood </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">4.20 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Do it </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-9.png" alt="" class="circle teal accent-4">
		                      <span class="line-height-0">Ronnie Ellis </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">5.30 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Got that </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-1.png" alt="" class="circle cyan">
		                      <span class="line-height-0">Gwendolyn Wood </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">4.34 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Like you </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-2.png" alt="" class="circle red accent-2">
		                      <span class="line-height-0">Daniel Russell </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">12.00 AM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Thank you </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-3.png" alt="" class="circle teal accent-4">
		                      <span class="line-height-0">Sarah Graves </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">11.14 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Okay you </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-4.png" alt="" class="circle red accent-2">
		                      <span class="line-height-0">Andrew Hoffman </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">7.30 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Can do </p>
		                    </a>
		                    <a href="#!" class="collection-item avatar border-none">
		                      <img src="../../images/avatar/avatar-5.png" alt="" class="circle cyan">
		                      <span class="line-height-0">Camila Lynch </span>
		                      <span class="medium-small right blue-grey-text text-lighten-3">2.00 PM</span>
		                      <p class="medium-small blue-grey-text text-lighten-3">Leave it </p>
		                    </a>
		                  </div>
		                </div>
		                <div id="activity" class="col s12 active">
		                  <h6 class="mt-5 mb-3 ml-3">RECENT ACTIVITY</h6>
		                  <div class="activity">
		                    <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                      <i class="material-icons white-text icon-bg-color deep-purple lighten-2">add_shopping_cart</i>
		                    </div>
		                    <div class="col s9 recent-activity-list-text">
		                      <a href="#" class="deep-purple-text medium-small">just now</a>
		                      <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jim Doe Purchased new equipments for zonal office.</p>
		                    </div>
		                    <div class="recent-activity-list chat-out-list row mb-0">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                        <i class="material-icons white-text icon-bg-color cyan lighten-2">airplanemode_active</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="cyan-text medium-small">Yesterday</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Your Next flight for USA will be on 15th August 2015.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list chat-out-list row mb-0">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon medium-small">
		                        <i class="material-icons white-text icon-bg-color green lighten-2">settings_voice</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="green-text medium-small">5 Days Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list chat-out-list row mb-0">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                        <i class="material-icons white-text icon-bg-color amber lighten-2">store</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="amber-text medium-small">1 Week Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list row">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                        <i class="material-icons white-text icon-bg-color deep-orange lighten-2">settings_voice</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="deep-orange-text medium-small">2 Week Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list chat-out-list row mb-0">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon medium-small">
		                        <i class="material-icons white-text icon-bg-color brown lighten-2">settings_voice</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="brown-text medium-small">1 Month Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list chat-out-list row mb-0">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                        <i class="material-icons white-text icon-bg-color deep-purple lighten-2">store</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="deep-purple-text medium-small">3 Month Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
		                      </div>
		                    </div>
		                    <div class="recent-activity-list row">
		                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
		                        <i class="material-icons white-text icon-bg-color grey lighten-2">settings_voice</i>
		                      </div>
		                      <div class="col s9 recent-activity-list-text">
		                        <a href="#" class="grey-text medium-small">1 Year Ago</a>
		                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </li>
		          <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; height: 908px; right: 3px;"><div class="ps-scrollbar-y" style="top: 0px; height: 748px;"></div></div></ul>
		        </aside>
		        <!-- END RIGHT SIDEBAR NAV-->
		      </div>
		      <!-- END WRAPPER -->
		    </div>`;


	}



	floatingHTML(){

		return`
<!-- Floating Action Button -->
		            <div class="fixed-action-btn " style="bottom: 50px; right: 19px;">
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