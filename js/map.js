var line;
var offsetId;
var infowindow;

//This creates the map. It will run after window load
function initializeMap(){

	//The markers which can show info on click
	var markers = [
		[ new google.maps.LatLng(47.577394233560945,-123.64700317382812), "<h3> Beginning </h3>"], //TEST 
		// [ new google.maps.LatLng(47.756319580980886,-123.5676097869873), "<h3> TEXT - HEADWATERS SLIDESHOW </h3>"], // TEXT - HEADWATERS SLIDESHOW
		// 			[ new google.maps.LatLng(47.73652379122012,-123.52061748504639), "<h3> ALPACKA RAFT GRAPHIC </h3>"], // ALPACKA RAFT GRAPHIC
		// 			[ new google.maps.LatLng(47.738717281629185,-123.51100444793701), "<h3> SEE THE UPPER RIVER	 </h3>"],	// SEE THE UPPER RIVER			
		// 			[ new google.maps.LatLng(47.82482523307499,-123.46203804016113), "<h3> END OF NIGHT SEQUENCE? </h3>"], //  END OF NIGHT SEQUENCE?
		// 			[ new google.maps.LatLng(48.07812912031923,-123.57356429100037), "<h3> Lake Aldwell Slideshow </h3>"], // Text - Lake Aldwell Slideshow			
		// 			[ new google.maps.LatLng(48.09506458483906,-123.55600118637085), "<h3> Elwha Dam Slideshow </h3>"], // Text - Elwha Dam Slideshow
		// 		[ new google.maps.LatLng(48.14650327493638,-123.56679439544678), "<h3> River Mouth Slideshow </h3>"], // Text - River Mouth Slideshow
		[ new google.maps.LatLng(48.002844759872666,-123.60044002532959), "<h1> THIS IS THE NEW MARKER</h1>"]
	];
	
	//Setup a marker with dummy content
	var infowindow = new google.maps.InfoWindow({content: 'Holding...'});
	
	
	
	//Initial map options, including initial zoom, Google API reference
	// var myOptions = {
	// 	zoom: 11,
	// 	center: new google.maps.LatLng(47.773, -124),
	// 	mapTypeId: google.maps.MapTypeId.TERRAIN	
	// };
	
	
	//STAMEN MAPS
	var layer = "watercolor";
	var map = new google.maps.Map(document.getElementById("map_canvas"), {
	    center: new google.maps.LatLng(47.920, -123.825),
	    zoom: 11,
		panControl: true,
		zoomControl: true,
	    mapTypeId: layer,
		draggable: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		zoomControl: false,
		scrollwheel: false,
		mapTypeControl: false,
		panControl: false,
	    mapTypeControlOptions: {
	        mapTypeIds: [layer]
	    }
	});
	map.mapTypes.set(layer, new google.maps.StamenMapType(layer));

	//Target #map_canvas and store into map variable	
	// var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	//Google API Polyline <-- This is where we store all coordinates, we create the markers at specified locations
	var lineCoordinates = [
		new google.maps.LatLng(47.577394233560945,-123.64700317382812),
		new google.maps.LatLng(47.58191030436744,-123.64593029022217),
		new google.maps.LatLng(47.58442871311628,-123.64438533782959),
		new google.maps.LatLng(47.588278460128734,-123.64318370819092),
		new google.maps.LatLng(47.59044924524688,-123.64013671875),
		new google.maps.LatLng(47.593893372872294,-123.63837718963623),
		new google.maps.LatLng(47.596324385314794,-123.6337423324585),
		new google.maps.LatLng(47.59794499753238,-123.62812042236328),
		new google.maps.LatLng(47.59991281631503,-123.62125396728516),
		new google.maps.LatLng(47.602864405717554,-123.61764907836914),
		new google.maps.LatLng(47.60726254369473,-123.61661911010742),
		new google.maps.LatLng(47.61177603762692,-123.61799240112305),
		new google.maps.LatLng(47.61623128420452,-123.61842155456543),
		new google.maps.LatLng(47.62039688565029,-123.62339973449707),
		new google.maps.LatLng(47.626644665549385,-123.63103866577148),
		new google.maps.LatLng(47.63173489707583,-123.6430549621582),
		new google.maps.LatLng(47.63925365016243,-123.65180969238281),
		new google.maps.LatLng(47.64295479273205,-123.65335464477539),
		new google.maps.LatLng(47.647118264705576,-123.65249633789062),
		new google.maps.LatLng(47.6518595924904,-123.6496639251709),
		new google.maps.LatLng(47.65428791076271,-123.64683151245117),
		new google.maps.LatLng(47.65619579590381,-123.64339828491211),
		new google.maps.LatLng(47.657062993378084,-123.64022254943848),
		new google.maps.LatLng(47.658277045645455,-123.63558769226074),
		new google.maps.LatLng(47.65960668954833,-123.63215446472168),
		new google.maps.LatLng(47.661514380349324,-123.62966537475586),
		new google.maps.LatLng(47.66423127417956,-123.6288070678711),
		new google.maps.LatLng(47.6670058283174,-123.62537384033203),
		new google.maps.LatLng(47.667872846240684,-123.62279891967773),
		new google.maps.LatLng(47.66897104826834,-123.62030982971191),
		new google.maps.LatLng(47.67139857075435,-123.6115550994873),
		new google.maps.LatLng(47.67509743551929,-123.6042594909668),
		new google.maps.LatLng(47.67937392107751,-123.59807968139648),
		new google.maps.LatLng(47.68376562248426,-123.5936164855957),
		new google.maps.LatLng(47.68942806015855,-123.59395980834961),
		new google.maps.LatLng(47.692721236061665,-123.59335899353027),
		new google.maps.LatLng(47.69612974297274,-123.59258651733398),
		new google.maps.LatLng(47.69936472988047,-123.58992576599121),
		new google.maps.LatLng(47.70323489692003,-123.58675003051758),
		new google.maps.LatLng(47.70323489692003,-123.58675003051758),
		new google.maps.LatLng(47.70727804812964,-123.5811710357666),
		new google.maps.LatLng(47.711205380437995,-123.57636451721191),
		new google.maps.LatLng(47.711205380437995,-123.57636451721191),
		new google.maps.LatLng(47.71905915724077,-123.56529235839844),
		new google.maps.LatLng(47.72183079584396,-123.55979919433594),
		new google.maps.LatLng(47.723447516934684,-123.5551643371582),
		new google.maps.LatLng(47.72310108092484,-123.54812622070312),
		new google.maps.LatLng(47.72466002482572,-123.54743957519531),
		new google.maps.LatLng(47.72405377440807,-123.54499340057373),
		new google.maps.LatLng(47.72696948558847,-123.53962898254395),
		new google.maps.LatLng(47.733377702877725,-123.53572368621826),
		new google.maps.LatLng(47.73545587428601,-123.53297710418701),
		new google.maps.LatLng(47.736783551486944,-123.53044509887695),
		new google.maps.LatLng(47.74088181972963,-123.53842735290527),
		new google.maps.LatLng(47.744922050072134,-123.54555130004883),
		new google.maps.LatLng(47.74777888083096,-123.55349063873291),
		new google.maps.LatLng(47.74945250681938,-123.55846881866455),
		new google.maps.LatLng(47.751905137332415,-123.5626745223999),
		new google.maps.LatLng(47.75473273258753,-123.56482028961182),
		new google.maps.LatLng(47.756319580980886,-123.5676097869873), // TEXT - HEADWATERS SLIDESHOW | To Fancybox Slideshow? | Popcorn.js
		new google.maps.LatLng(47.75917578613811,-123.57181549072266),
		new google.maps.LatLng(47.748846545004376,-123.5566234588623),
		new google.maps.LatLng(47.73655265353599,-123.52958679199219),
		new google.maps.LatLng(47.73606199199048,-123.52709770202637),
		new google.maps.LatLng(47.735917678891276,-123.52340698242188),
		new google.maps.LatLng(47.73652379122012,-123.52061748504639), // ALPACKA RAFT GRAPHIC
		new google.maps.LatLng(47.73684127581471,-123.51924419403076),
		new google.maps.LatLng(47.73756282451197,-123.51744174957275),
		new google.maps.LatLng(47.73799574893067,-123.51563930511475),
		new google.maps.LatLng(47.73773599471141,-123.51357936859131),
		new google.maps.LatLng(47.738717281629185,-123.51100444793701), // SEE THE UPPER RIVER
		new google.maps.LatLng(47.73897703095283,-123.50757122039795),
		new google.maps.LatLng(47.7391501964487,-123.50542545318604),
		new google.maps.LatLng(47.74065093995323,-123.50207805633545),
		new google.maps.LatLng(47.74076637996942,-123.5004472732544),
		new google.maps.LatLng(47.74024689788072,-123.49885940551758),
		new google.maps.LatLng(47.74047777944898,-123.49705696105957),
		new google.maps.LatLng(47.74047777944898,-123.49598407745361),
		new google.maps.LatLng(47.73992943405252,-123.4956407546997),
		new google.maps.LatLng(47.73961196828847,-123.4941816329956),
		new google.maps.LatLng(47.740218037612685,-123.49246501922607),
		new google.maps.LatLng(47.74007373603258,-123.49044799804688),
		new google.maps.LatLng(47.741141558254206,-123.48903179168701),
		new google.maps.LatLng(47.74359458040545,-123.49169254302979),
		new google.maps.LatLng(47.744431467399785,-123.49019050598145),
		new google.maps.LatLng(47.744258319470354,-123.4874439239502),
		new google.maps.LatLng(47.74593205866256,-123.4877872467041),
		new google.maps.LatLng(47.746595767922514,-123.48649978637695),
		new google.maps.LatLng(47.74676890807673,-123.48474025726318),
		new google.maps.LatLng(47.746653481371254,-123.4831953048706),
		new google.maps.LatLng(47.74656691117415,-123.48126411437988),
		new google.maps.LatLng(47.74630719971895,-123.47941875457764),
		new google.maps.LatLng(47.74610520102451,-123.4784746170044),
		new google.maps.LatLng(47.74714404310179,-123.47688674926758),
		new google.maps.LatLng(47.748586844923906,-123.47675800323486),
		new google.maps.LatLng(47.75008731639175,-123.47723007202148),
		new google.maps.LatLng(47.75092409899751,-123.47654342651367),
		new google.maps.LatLng(47.75095295333015,-123.476243019104),
		new google.maps.LatLng(47.75144347453737,-123.47504138946533),
		new google.maps.LatLng(47.75199169865053,-123.47529888153076),
		new google.maps.LatLng(47.75265533063947,-123.47435474395752),
		new google.maps.LatLng(47.753405513131895,-123.47255229949951),
		new google.maps.LatLng(47.75392486390687,-123.47010612487793),
		new google.maps.LatLng(47.75761787548956,-123.46886157989502),
		new google.maps.LatLng(47.75813718422233,-123.46740245819092),
		new google.maps.LatLng(47.75900268725861,-123.46585750579834),
		new google.maps.LatLng(47.75966622983587,-123.46474170684814),
		new google.maps.LatLng(47.76249340335918,-123.46499919891357),
		new google.maps.LatLng(47.7635607656541,-123.46152305603027),
		new google.maps.LatLng(47.76633003596795,-123.46135139465332),
		new google.maps.LatLng(47.7674838550862,-123.46251010894775),
		new google.maps.LatLng(47.76918569156591,-123.45890522003174),
		new google.maps.LatLng(47.77114706114513,-123.4574031829834),
		new google.maps.LatLng(47.774088976820515,-123.45877647399902),
		new google.maps.LatLng(47.7760501614758,-123.45615863800049),
		new google.maps.LatLng(47.77792475413294,-123.45431327819824),
		new google.maps.LatLng(47.78129885060024,-123.45422744750977),
		new google.maps.LatLng(47.78239466388179,-123.45289707183838),
		new google.maps.LatLng(47.78467272809266,-123.45521450042725),
		new google.maps.LatLng(47.7855666247499,-123.45530033111572),
		new google.maps.LatLng(47.78539361369337,-123.4539270401001),
		new google.maps.LatLng(47.78795988528343,-123.45405578613281),
		new google.maps.LatLng(47.78905555815031,-123.45457077026367),
		new google.maps.LatLng(47.789949379434,-123.4559440612793),
		new google.maps.LatLng(47.794245273679884,-123.45409870147705),
		new google.maps.LatLng(47.793668664214344,-123.45238208770752),
		new google.maps.LatLng(47.79683993709624,-123.4487771987915),
		new google.maps.LatLng(47.80099112906964,-123.44718933105469),
		new google.maps.LatLng(47.80574729544494,-123.44894886016846),
		new google.maps.LatLng(47.80672729985917,-123.452467918396),
		new google.maps.LatLng(47.809206052019825,-123.45521450042725),
		new google.maps.LatLng(47.81367327170509,-123.45560073852539),
		new google.maps.LatLng(47.81502777206991,-123.45491409301758),
		new google.maps.LatLng(47.81597878312813,-123.45770359039307),
		new google.maps.LatLng(47.81597878312813,-123.46079349517822),
		new google.maps.LatLng(47.81733322335348,-123.4617805480957),
		new google.maps.LatLng(47.819235143601155,-123.46070766448975),
		new google.maps.LatLng(47.8218285589315,-123.45954895019531),
		new google.maps.LatLng(47.82269300191868,-123.46186637878418),
		new google.maps.LatLng(47.82482523307499,-123.46203804016113), //  END OF NIGHT SEQUENCE?
		new google.maps.LatLng(47.82563200040271,-123.46190929412842),
		new google.maps.LatLng(47.82655400485166,-123.46354007720947),
		new google.maps.LatLng(47.82808103869386,-123.46572875976562),
		new google.maps.LatLng(47.828801322082015,-123.46675872802734),
		new google.maps.LatLng(47.82955040620182,-123.4660291671753),
		new google.maps.LatLng(47.82995375471114,-123.46499919891357),
		new google.maps.LatLng(47.83130783035116,-123.46568584442139),
		new google.maps.LatLng(47.83228735240789,-123.46448421478271),
		new google.maps.LatLng(47.83493773115668,-123.46628665924072),
		new google.maps.LatLng(47.83879782324844,-123.46688747406006),
		new google.maps.LatLng(47.84213916360469,-123.46529960632324),
		new google.maps.LatLng(47.847064367719135,-123.46521377563477),
		new google.maps.LatLng(47.854206522883764,-123.46705913543701),
		new google.maps.LatLng(47.857345304117196,-123.46976280212402),
		new google.maps.LatLng(47.85944731742236,-123.46937656402588),
		new google.maps.LatLng(47.861405280547345,-123.46808910369873),
		new google.maps.LatLng(47.862816119899264,-123.46924781799316),
		new google.maps.LatLng(47.86681808788663,-123.46765995025635),
		new google.maps.LatLng(47.87015762321489,-123.46778869628906),
		new google.maps.LatLng(47.87113641175679,-123.47036361694336),
		new google.maps.LatLng(47.8719136718417,-123.47173690795898),
		new google.maps.LatLng(47.87358330223495,-123.47057819366455),
		new google.maps.LatLng(47.875137737346805,-123.4695053100586),
		new google.maps.LatLng(47.87959928281751,-123.47208023071289),
		new google.maps.LatLng(47.88207455523483,-123.4758996963501),
		new google.maps.LatLng(47.88397410269386,-123.47598552703857),
		new google.maps.LatLng(47.885672124032325,-123.48031997680664),
		new google.maps.LatLng(47.888751444447145,-123.48062038421631),
		new google.maps.LatLng(47.8959454047429,-123.4811782836914),
		new google.maps.LatLng(47.89643455775328,-123.48564147949219),
		new google.maps.LatLng(47.89913920274405,-123.48791599273682),
		new google.maps.LatLng(47.900606557393,-123.49049091339111),
		new google.maps.LatLng(47.903483602648656,-123.49096298217773),
		new google.maps.LatLng(47.90569881853413,-123.49109172821045),
		new google.maps.LatLng(47.909985135903206,-123.49044799804688),
		new google.maps.LatLng(47.91473131476156,-123.48928928375244),
		new google.maps.LatLng(47.919793425746576,-123.4923791885376),
		new google.maps.LatLng(47.923762234539254,-123.49963188171387),
		new google.maps.LatLng(47.926206639148674,-123.50804328918457),
		new google.maps.LatLng(47.933481653965416,-123.52319240570068),
		new google.maps.LatLng(47.93799567427907,-123.51701259613037),
		new google.maps.LatLng(47.942825527069175,-123.52482318878174),
		new google.maps.LatLng(47.94874723069695,-123.53053092956543),
		new google.maps.LatLng(47.95231142423167,-123.54040145874023),
		new google.maps.LatLng(47.949092163395164,-123.54048728942871),
		new google.maps.LatLng(47.94549900154672,-123.54065895080566),
		new google.maps.LatLng(47.942681787965306,-123.54164600372314),
		new google.maps.LatLng(47.948718486201535,-123.54713916778564),
		new google.maps.LatLng(47.95032815332578,-123.54975700378418),
		new google.maps.LatLng(47.95035689692594,-123.55220317840576),
		new google.maps.LatLng(47.94840229569664,-123.55529308319092),
		new google.maps.LatLng(47.94845978502322,-123.55670928955078),
		new google.maps.LatLng(47.950241922429385,-123.55868339538574),
		new google.maps.LatLng(47.951075481734236,-123.56173038482666),
		new google.maps.LatLng(47.95300123974889,-123.56331825256348),
		new google.maps.LatLng(47.95282878673288,-123.56503486633301),
		new google.maps.LatLng(47.95170782810028,-123.56718063354492),
		new google.maps.LatLng(47.952110226304576,-123.57121467590332),
		new google.maps.LatLng(47.95521433570218,-123.57374668121338),
		new google.maps.LatLng(47.95639269877176,-123.57529163360596),
		new google.maps.LatLng(47.958433215158884,-123.57215881347656),
		new google.maps.LatLng(47.96389335558656,-123.57799530029297),
		new google.maps.LatLng(47.96800244907484,-123.58310222625732),
		new google.maps.LatLng(47.97127799571972,-123.58726501464844),
		new google.maps.LatLng(47.97869030784922,-123.59117031097412),
		new google.maps.LatLng(47.979437226022384,-123.59481811523438),
		new google.maps.LatLng(47.979437226022384,-123.59481811523438),
		new google.maps.LatLng(47.98391850813563,-123.59752178192139),
		new google.maps.LatLng(47.986417515729,-123.60129833221436),
		new google.maps.LatLng(47.990754586504785,-123.60344409942627),
		new google.maps.LatLng(47.99523488612864,-123.60108375549316),
		new google.maps.LatLng(47.99962864829864,-123.59975337982178),
		new google.maps.LatLng(48.002844759872666,-123.60044002532959), //THIS ONE
		/*
		new google.maps.LatLng(48.006922041650895,-123.59464645385742),
		new google.maps.LatLng(48.00996543626931,-123.59005451202393),
		new google.maps.LatLng(48.01438665185845,-123.59387397766113),
		new google.maps.LatLng(48.01613780776861,-123.59477519989014),
		new google.maps.LatLng(48.0180037281237,-123.5941743850708),
		new google.maps.LatLng(48.02073072101824,-123.59670639038086),
		new google.maps.LatLng(48.022625178533325,-123.59460353851318),
		new google.maps.LatLng(48.02509360962033,-123.59464645385742),
		new google.maps.LatLng(48.02693050487559,-123.5945177078247),
		new google.maps.LatLng(48.02879603461277,-123.59284400939941),
		new google.maps.LatLng(48.029829222026606,-123.58988285064697),
		new google.maps.LatLng(48.03172334515566,-123.59086990356445),
		new google.maps.LatLng(48.03189553471526,-123.59580516815186),
		new google.maps.LatLng(48.03479397260867,-123.59464645385742),
		new google.maps.LatLng(48.038639173227025,-123.59245777130127),
		new google.maps.LatLng(48.041422460294235,-123.59129905700684),
		new google.maps.LatLng(48.044549892109316,-123.59174966812134),
		new google.maps.LatLng(48.047935338200254,-123.58889579772949),
		new google.maps.LatLng(48.05056034025763,-123.58754396438599),
		new google.maps.LatLng(48.05406013487166,-123.58627796173096),
		new google.maps.LatLng(48.0545621350842,-123.58400344848633),
		new google.maps.LatLng(48.055953367238764,-123.58252286911011),
		new google.maps.LatLng(48.05903689213983,-123.5830807685852),
		new google.maps.LatLng(48.060528391401874,-123.58119249343872),
		new google.maps.LatLng(48.061374511195744,-123.578360080719),
		new google.maps.LatLng(48.063554281175634,-123.5772442817688),
		new google.maps.LatLng(48.06549018369743,-123.57773780822754),
		new google.maps.LatLng(48.06705319260743,-123.57840299606323),
		new google.maps.LatLng(48.06835805359966,-123.57720136642456),
		new google.maps.LatLng(48.06913235107547,-123.57790946960449),
		new google.maps.LatLng(48.070451497722445,-123.57820987701416),
		new google.maps.LatLng(48.070451497722445,-123.57820987701416),
		new google.maps.LatLng(48.073175715294504,-123.57544183731079),
		new google.maps.LatLng(48.07706106028667,-123.57383251190186),
		new google.maps.LatLng(48.07812912031923,-123.57356429100037), // Text - Lake Aldwell Slideshow
		new google.maps.LatLng(48.07915415037179,-123.5734087228775),
		new google.maps.LatLng(48.08286702531905,-123.57014179229736),
		new google.maps.LatLng(48.08501721645489,-123.5707426071167),
		new google.maps.LatLng(48.08733932192633,-123.5696268081665),
		new google.maps.LatLng(48.0899336490993,-123.56951951980591),
		new google.maps.LatLng(48.09406136951334,-123.56718063354492),
		new google.maps.LatLng(48.09714261146233,-123.564133644104),
		new google.maps.LatLng(48.096770005971564,-123.55889797210693),
		new google.maps.LatLng(48.095881474288674,-123.55722427368164),
		new google.maps.LatLng(48.09506458483906,-123.55600118637085), // Text - Elwha Dam Slideshow
		new google.maps.LatLng(48.09506458483906,-123.55600118637085),
		new google.maps.LatLng(48.09659803329582,-123.5563337802887),
		new google.maps.LatLng(48.098195923916144,-123.55781435966492),
		new google.maps.LatLng(48.09963613254913,-123.55816841125488),
		new google.maps.LatLng(48.10098315684407,-123.55778217315674),
		new google.maps.LatLng(48.10180711707271,-123.55666637420654),
		new google.maps.LatLng(48.10300362710755,-123.55459570884705),
		new google.maps.LatLng(48.10346216249358,-123.55323314666748),
		new google.maps.LatLng(48.103533808278165,-123.55195641517639),
		new google.maps.LatLng(48.10388487117912,-123.55155944824219),
		new google.maps.LatLng(48.105289098806125,-123.55165600776672),
		new google.maps.LatLng(48.10633508016842,-123.5512375831604),
		new google.maps.LatLng(48.108290864917,-123.55116248130798),
		new google.maps.LatLng(48.110891298596194,-123.55021834373474),
		new google.maps.LatLng(48.11194432934813,-123.55257868766785),
		new google.maps.LatLng(48.11346294794263,-123.5541558265686),
		new google.maps.LatLng(48.11574795455549,-123.55283617973328),
		new google.maps.LatLng(48.11745268953915,-123.55443477630615),
		new google.maps.LatLng(48.118383823417645,-123.55478882789612),
		new google.maps.LatLng(48.120511042883436,-123.55387687683105),
		new google.maps.LatLng(48.123261256680586,-123.55501413345337),
		new google.maps.LatLng(48.12563892700992,-123.55660200119019),
		new google.maps.LatLng(48.12651262158594,-123.5582971572876),
		new google.maps.LatLng(48.127758684857284,-123.5594129562378),
		new google.maps.LatLng(48.12923387010773,-123.55924129486084),
		new google.maps.LatLng(48.13135347958265,-123.55720281600952),
		new google.maps.LatLng(48.13504826529441,-123.55949878692627),
		new google.maps.LatLng(48.1368525989029,-123.56082916259766),
		new google.maps.LatLng(48.13845639776783,-123.5608720779419),
		new google.maps.LatLng(48.140375162724574,-123.56486320495605),
		new google.maps.LatLng(48.141692482218964,-123.56507778167725),
		new google.maps.LatLng(48.14329612989035,-123.56293201446533),
		new google.maps.LatLng(48.14544379382803,-123.56344699859619),
		new google.maps.LatLng(48.14650327493638,-123.56679439544678) // Text - River Mouth Slideshow */
	];

	//Create Google Marker, we can choose from circle, closed arrow and open arrow
	var arrow = {
		path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		scale: 4,
		strokeColor: '#960E06'
	};

	//This sets up the circle marker on the line. Offset is equal to '0' because that's the starting point, '100' is the ending point	
	line = new google.maps.Polyline({
		path: lineCoordinates,
	    icons: [{
	      	icon: arrow,
	      	offset: '0%' //CHANGE THIS TO 95 or 96% to start a few points before??
	    }],
	    map: map,
		strokeColor: '#129CB0',
		strokeOpacity: 0.8,
		strokeWeight: 2
	});
 
	//For loop for setting up the markers and adding events to them
	for(var i=0; i < markers.length; i++){
		var marker = new google.maps.Marker({
			position: markers[i][0], 
			map: map
		});
			marker.html = markers[i][1];
			google.maps.event.addListener(marker, 'click', function(){
		        infowindow.setContent(this.html);
		        infowindow.open(map, this);
		    });
	} //End for loop
	
} //End function "initializeMap()"

/*
function animateMarker() {
			var count = 0;
				offsetId = window.setInterval(function() {
					count = (count + 1) % 200;
	
					var icons = line.get('icons');
					icons[0].offset = (count / 2) + '%';
					line.set('icons', icons);
		
					if(Math.ceil(count/2) == 100){
						window.clearInterval(offsetId);
					}
				}, 20);
		} //End function "animateMarker()"
*/		

$(document).ready(function($){

	//Create a popcorn instance by calling the HTML5 video player on the #elwha div
	var video = Popcorn('#elwha');
	
	//Play the video right away -- (seconds, function)
	//video.cue(1, animateMarker);
	
	//Pause event
	//video.on("pause", function(){ });
				
	initializeMap();

});
