$(document).ready(function(){

	$("#get-data-form").submit(function(e){

		var startingWrap ='<!DOCTYPE html>'+
    		'<html lang="en">'+
   			'<head>'+
			'<meta charset="UTF-8">'+
			'<meta charset="ISO-8859-1">'+
			'<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">'+
			'<title>';
		var middleWrap=	'</title>'+
'    	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">'+
'    	<link rel="apple-touch-icon" href="/favicon.ico">'+
'        <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">'+
'    	<link rel="icon" href="http://www.jio.com/favicon.ico" type="image/x-icon">'+
'    	<link rel="canonical" >'+
'    	<meta name="description" content="Jio Tambola">'+
'    	<meta name="keywords" content="Jio Tambola">'+
'    	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'+
'    	<link rel="stylesheet" href="assets/css/style.min.css">'+
'        <link rel="stylesheet" href="assets/css/style1.min.css">'+
'    	<link rel="stylesheet" href="assets/css/style2.min.css">'+
'    	<link rel="stylesheet" href="assets/css/style3.min.css">'+
'    	<link rel="stylesheet" href="assets/css/owl.carousel.min.css">'+
'    	<link rel="stylesheet" href="assets/css/owl.theme.default.min.css">'+
'    	<link rel="stylesheet" href="assets/css/slick-theme.css">'+
'    	<link rel="stylesheet" href="assets/css/common.css">'+
'          <script src="assets/js/html5shiv.min.js"></script>'+
'          <script src="assets/js/respond.min.js"></script>'+
'        <style>'+
'			table, td, th {border:1px solid black}'+
'    	body{color:#525252;}'+
'    	.desk_view{display:block;}'+
'    	.mobile_view{display:none;}'+
'    	.mobile_view p{'+
'    		color:#939597 !important;'+
'    		line-height: 20px !important;'+
'    	}'+
'    	.mobile_view b{'+
'    		font-size:15px;'+
'    	}'+
'    	.mobile_view li{'+
'    		list-style-type: decimal;'+
'    	}'+
'    	.banner_top{'+
'    		text-text-align:center;'+
'    	}'+
'    	.banner_top img{max-width:100%;}'+
'    	.about-me-container h3{'+
'    		font-size:18px !important;'+
'    		padding-bottom:15px !important;'+
'    	}'+
'    	.about-me-container ol{'+
'    		padding-left:0px;'+
'    	}'+
'    	.about-me-container ul{'+
'    		padding-left:0px;'+
'    		margin-left:40px;'+
'    	}'+
'    	.about-me-container li{padding-bottom:10px;}'+
'        	.decimal'+
'        	{'+
'        		margin: 0 0 20px 20px;'+
'        	}'+
'    		.cust_table .table-bordered>tbody>tr>th {'+
'        font-size: 18px;'+
'        color: #fff !important;'+
'    	text-text-align:center;'+
'    }'+
'    .cust_table .table-bordered>tbody>tr>td {'+
'        font-size: 18px;'+
'        color: #58585B !important;'+
'    }'+
'          @media(max-width:800px)'+
'          {'+
'            ul'+
'            {'+
'              padding-left:0px;'+
'            }'+
'    		.about-me-container {'+
'    			padding: 20px 15px;'+
'    			}'+
'          }'+
'    @media(max-width:767px){'+
'    	.desk_view{display:none;}'+
'    	.mobile_view{display:block;}'+
'    	.about-me-container ul {'+
'    		margin-left: 20px;'+
'    	}'+
'    	#Mobile_table.table-responsive {'+
'    		overflow-x: inherit;'+
'    		border: 0;'+
'    		overflow-y:inherit;'+
'    	}'+
'    	#Mobile_table td:before {'+
'    		position: absolute;'+
'    		top: 6px;'+
'    		left: 6px;'+
'    		width: 45%;'+
'    		padding-right: 10px;'+
'    		white-space: nowrap;'+
'    		text-text-align: left;'+
'    		font-weight: 700;'+
'    		content: attr(data-title);'+
'    		font-size: 14px;'+
'    	}'+
'    	#Mobile_table td {'+
'    		border: none;'+
'    		border-bottom: 1px solid #eee;'+
'    		position: relative;'+
'    		padding: 5px 5px 5px 50%;'+
'    		white-space: normal;'+
'    		text-text-align: left;'+
'    		word-wrap: break-word;'+
'    		display:block;'+
'    	}'+
'    	#Mobile_table thead tr {'+
'    		position: absolute;'+
'    		top: -9999px;'+
'    		left: -9999px;'+
'    	}'+
'    	#Mobile_table tr {'+
'    		border: 1px solid #ccc;'+
'    	}'+
'    	#Mobile_table tbody>tr:nth-child(even)>td {'+
'    		background-color: #f9f9f9;'+
'    	}'+
'    	#eligibility_table {'+
''+
'    	}'+
'    	.cust_table.table-responsive>.table>tbody>tr>td, .cust_table.table-responsive>.table>tbody>tr>th, .cust_table.table-responsive>.table>tfoot>tr>td, .cust_table.table-responsive>.table>tfoot>tr>th, .cust_table.table-responsive>.table>thead>tr>td, .cust_table.table-responsive>.table>thead>tr>th {'+
'        white-space: inherit !important;'+
'    }'+
'    }'+
'    @media (max-width:360px){'+
'    	.cust_table .table {'+
'    		width: 630px;'+
'    	}'+
'    }'+
'        </style>'+
'    </head>'+
'    <body>'+
'    <noscript>'+
'        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-TTJVDJ" height="0" width="0" style="display:none;visibility:hidden" >'+
'        </iframe>'+
'    </noscript>'+
'    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":'+
'    new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],'+
'    j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src='+
'    "//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);'+
'    })(window,document,"script","dataLayer","GTM-TTJVDJ");'+
'    </script>'+
'    	<!-- tab container end -->'+
'       <div class="component-bg">'+
'     <!--     <div class="row no-space banner_top" style="background:#2D2E82" >'+
'    <img src="assets/images/banner.png" alt="Jio Play Along">'+
'    </div>  -->'+
'       <div class="container">'+
'         <div class="no-submenu"></div>'+
'          <!-- Container Starts -->'+
'             <!-- Main Body Includes Starts -->'+
'           <div class="body-container">'+
'           	 <!-- accordian Start -->'+
'    <div class="row">'+
'      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" style="margin-top:20px;">'+
'        <h1>';
var middleWrap2 =	
'Terms And conditions</h1><br/>'+
'     </div>'+
'    </div>'+
'    <div class="about-me-container margin-top-10">'+
'    <div class="row">'+
'    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>';

		var endingWrap =
'		</div>'+
'		</div>'+
'		</div>'+
'		</div>'+
'		</div>'+
'		<!-- container end -->'+
'		</div>'+
'		<!-- Wrap end -->'+
'					<script>'+
'				JIO = function(){'+
'					this.config = {'+
'					// Add any config stuff from template vars here'+
'					}'+
'				};'+
'				var jio = new JIO();'+
'			</script>'+
'			<script src="assets/js/app.min.js"></script>'+
'			 <script src="assets/js/jquery.plugin.min.js"></script>'+
'		</body>'+
'		</html>'+
'		<script>'+
'		if($(window).width() < 640){'+
'			var owl = $("#terms-menu");'+
'			if( owl.length ){'+
'			  owl.owlCarousel({'+
'			  navigation : true,'+
'			  rewindNav : false,'+
'			  autoWidth: true,'+
'			  items : 2, //10 items above 1000px browser width'+
'			  itemsDesktop : [1024,3], //5 items between 1000px and 901px'+
'			  itemsDesktopSmall : [630,2], // betweem 900px and 601px'+
'			  itemsTablet: [600,2], //2 items between 600 and 0'+
'			  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option'+
'			  autoPlay : false,'+
'			  afterAction: function(){'+
'				  if ( this.itemsAmount > this.visibleItems.length ) {'+
'					$(".next").show();'+
'					$(".prev").show();'+
'					$(".next").removeClass("disabled");'+
'					$(".prev").removeClass("disabled");'+
'					if ( this.currentItem == 0 ) {'+
'					  $(".prev").addClass("disabled");'+
'					}'+
'					if ( this.currentItem == this.maximumItem ) {'+
'					  $(".next").addClass("disabled");'+
'					}'+
'				  } else {'+
'					$(".next").hide();'+
'					$(".prev").hide();'+
'				  }'+
'				}'+
'			  });'+
'			}'+
'		}'+
'	'+
'		</script>		';

		var content = tinymce.get("texteditor").getContent();
		var titleName= document.getElementById("title").value;
		var fileName= document.getElementById("filename").value;
		var headingName= document.getElementById("heading").value;
		content =startingWrap+titleName+middleWrap+headingName+middleWrap2+content+endingWrap;
		console.log(content);
		
		var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
		saveAs(blob,fileName) ;

		$("#data-container").html(content);

		return false;

	});	

});