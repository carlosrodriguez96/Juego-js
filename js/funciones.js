/**
 * Desarrollado por:
 * Carlos Arturo rodriguez
 * Jhon Jairo Salazar
 */


 var g_puntaje= 0;
 var g_correctas=0;
 var g_incorrectas=0;
 var g_conjunto= [];
 var g_respuestas=0;

 g_conjunto.push( [ ['fresa'],		[1],	[-1],	["b."] , ["¿Las personas naturales y jurídicas poseerían sobre una obra los derechos morales y patrimoniales?"], ["a.Si es posible que las personas naturales y jurídicas posean los derechos morales y patrimoniales debido a que son una misma persona el cual están referenciadas por un seudónimo."], ["b.No es posible que las personas jurídicas posean derechos morales debido a que es una empresa, es decir no pueden crear una obra por otro lado las personas naturales si poseen los derechos morales y patrimoniales."],["c.No es posible porque las personas jurídicas solo pueden poseer derechos patrimoniales"]] );
 g_conjunto.push( [ ['zanahoria'],  [1],	[-1],	["a."] , ["¿Cuál es la forma de protección de software en Colombia?"], ["a.Copyright."], ["b.Model Provisions on the Protection of Computer Software."],['c.Copyleft. ']] );
 g_conjunto.push( [ ['banana'],     [1],	[-1],	["a."] , ["¿El software libre o código abierto y software propietario son la misma cosa?"], ["a.No son la misma cosa porque el software libre brinda la opción de Libertad de uso, de análisis, de copia y de modificación, a comparación del software propietario o privativo el cual carece de las cuatro libertades."], ["b.Si lo son porque el software son representados por el mismo nombre."],['c.Si lo son, ya que es un software que respeta las cuatro libertades que la FSF (Free Software Foundation) que establece.']]);
 g_conjunto.push( [ ['cerveza'],    [1],	[-1],	["c."] , ["¿El copy left es restrictivo?"], ["a.: No es restrictivo porque nace en el ámbito de la programación informática como una estrategia legal diseñada por el movimiento del software libre para hacer del código una herramienta “libre”."], ["b.Si es restrictivo porque se debe añadir una cláusula legal que hace que toda copia o versión modificada del programa se gobierne por las mismas condiciones que el original."],['c.: No es restrictivo porque permite la libre distribución de copias y versiones modificadas de una obra u otro trabajo, exigiendo que los mismos derechos sean preservados en las versiones modificadas.']]);
 g_conjunto.push( [ ['cupcake'],    [1],	[-1],	["a."] , ["¿Los derechos morales podrían no aplicar al software?"], ["a.Si podrían aplicar porque desde el momento mismo de la creación de la obra, se le reconocen a los autores dos clases de prerrogativas: los derechos morales y los derechos patrimoniales."], ["b.No podrían aplicar porque  es un derecho que es inherente a las personas y no puede ser transmitido."],['c.Si podrían aplicar porque son en esencia transferibles y sometidos a un término de duración de la protección que en Colombia.']]);
 g_conjunto.push( [ ['mani'],       [1],	[-1],	["c."] , ["¿Es correcto y legal descargar cualquier imagen o música desde internet y colocarla en un software solo por necesidad?"], ["a.No, porque es un propósito fortalecer a creadores para que sean ellos quienes definan los términos en que sus obras pueden ser usadas, qué derechos desean entregar y en qué condiciones lo harán."], ["b.Porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons que, basadas en el derecho de autor, cambian el paradigma del sistema tradicional “Todos los derechos reservados” por una premisa más flexible “Algunos derechos reservados”."],['c.No, porque si toman la imagen o música y no dan la autoría a su respectivo dueño, el autor puede demandar.']]);
 g_conjunto.push( [ ['starchy'],    [1],	[-1],	["a."] , ["¿Cualquier contrato laboral es un contrato de prestación de servicios?"], ["a.No, porque el contrato laboral difiere de los aportes al Sistema de Seguridad Social en cambio un contrato de prestación de servicios se caracteriza por ser un acuerdo de voluntades, en donde de forma independiente y autónoma una persona puede trabajar."], ["b.Si, porque recibe un salario por el trabajo realizado e indemnización a comparación de honorarios."],['c.Si, porque en ambos contratos recibe salarios mínimos.']]);
 g_conjunto.push( [ ['mora'],       [1],	[-1],	["c."] , ["¿El contrato de prestación de servicios es ideal cuando se quiere trabajar desde casa?"], ["a.No, porque existe una retribución económica."], ["b.Si, porque si desea crear su micro empresa usted seria su propio jefe."],['c.Si, porque trabajaría de forma independiente y autónoma por su voluntad o para otra persona.']]);
 g_conjunto.push( [ ['ponque'],     [1],	[-1],	["b."] , ["¿En el desarrollo de software y un contrato de prestación de servicios los honorarios podrían ser por cualquier valor?"], ["a.No, porque es un acuerdo entre un trabajador bajo una subordinación y dependencia."], ["b.Si, debido a que el desarrollador tiene su previo conocimiento y está ejerciendo su trabajo de manera voluntaria y autónoma por un honorario que él estipula."],['c.Si, porque el contratista le exige por medio de un documento valor del honorario.']]);
 g_conjunto.push( [ ['cereza'],     [1],	[-1],	["a."] , ["¿Un prestador de servicios puede negociar bajo los términos que quiera con su contratante?"], ["a.Si, porque están llegando a un acuerdo que el contratista está ofreciendo."], ["b.No, porque está recibiendo una paga estipulada por el contratante."],['c.Si, porque lo está estipulando por medio de un documento legible.']]);
 g_conjunto.push( [ ['carta'],      [1],	[-1],	["b."] , ["¿Un contrato verbal no tiene validez ante el estado?"], ["a.No, tiene validez porque no hay una subordinación."], ["b.Si, tiene validez porque si en el determinado tiempo en el que trabajo no le pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la república."],['c.Si, tiene validez porque es aquel en el que no existe ningún documento escrito que contenga las condiciones pactadas verbalmente (de palabra) entre el empleador y el trabajador.']]);



 window.onload=function(){ //se carga la funcion el recargar la pagina 

 document.getElementById('cntfr').innerHTML= painting_elements();//pinta las frutas.
 setInterval(moving,3000);
 

	
 }

 console.log("Funciona");

 /**
 *funcion que sirve para pintar los elementos en pantalla 
 *@param 	elemento 		imagenes  
 */
  function painting_elements()
 {
 	var salida="";
 	for (var i = 0; i<g_conjunto.length; i ++) 
 	
 	salida +=  "<div   data-toggle='modal' data-target='#myModal' ><img style='position:absolute;  height:80px;' id= '"+ g_conjunto[i][0] + "'src='img/"+ g_conjunto[i][0] + ".jpg' onclick='make_points("+i+");' class='img-thumbnail'></div>";
 console.log(i);

 	return salida;
 }
 /**
 *funcion que muestra las preguntas dentro del modal.
 * @param 		identificador		Identificador de la array 
 */
 function make_points(idx){
 	/*g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
 	document.getElementById('score').innerHTML=g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
 	console.log(g_puntaje);*/
 	var contador=0;
 	contador ++;
 	var index=idx;
 	console.log(contador);
 	console.log(g_conjunto[idx][0]);
 	
 	

 	 document.getElementById('pregunta').innerHTML=g_conjunto[idx][4];
 	 document.getElementById('a').innerHTML=g_conjunto[idx][5];
 	 document.getElementById('b').innerHTML=g_conjunto[idx][6];
 	 document.getElementById('c').innerHTML=g_conjunto[idx][7];
 	 document.getElementById('con_respuesta').innerHTML="<select id='respuesta'><option >seleccione</option><option>a.</option><option>b.</option> <option>c.</option> </select>";
 	 document.getElementById('button').innerHTML="<button type='button' class='btn btn-info'  data-dismiss='modal' onclick='Capture_responses("+index+");' >Aceptar</button>";
 	 
 
 }

 /*
 *funcion que captura la respuesta y suma puntaje 
 * @param 		identificador		Identificador de la array
 */

 function Capture_responses(idx){
 	console.log(idx);
 	var res=document.getElementById('respuesta').value;
 	//var p=document.getElementById('p').value;
 	console.log(res);
 	
 	if (res!="") {

	 	if (res==g_conjunto[idx][3]) {
	 		var g_seleccion=1;
	 		g_correctas= parseInt(g_correctas)+1;
	 		console.log(g_correctas+"g_correctas");
	 		console.log(g_conjunto[idx][3]);
	 		document.getElementById('res_correct').innerHTML=g_correctas;
	 		document.getElementById(g_conjunto[idx][0]).style.display='none';	

	 		

	 		g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
	 		document.getElementById('score').innerHTML=g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
	 	
	 		
		 	//document.getElementById('p').innerHTML=g_puntaje +=parseInt( g_conjunto[idx][3]);
		 	document.getElementById('respuesta').innerHTML="";
	
	 	}else{
	 		var g_seleccion=2;
	 		console.log(g_conjunto[idx][3]);
	 		g_incorrectas= parseInt(g_incorrectas)+1;
	 		console.log(g_incorrectas+"g_incorrectas");
	 		document.getElementById('res_incorrect').innerHTML=g_incorrectas;
	 		g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
	 		document.getElementById('score').innerHTML=g_puntaje +=parseInt( g_conjunto[idx][g_seleccion]);
	 		res.innerHTML="";
	 		console.log("perdio");
	 		document.getElementById(g_conjunto[idx][0]).style.display='none';
	 	};
	 };
		 var t_respuestas= g_incorrectas+g_correctas;
		 document.getElementById('t_respuestas').innerHTML=t_respuestas;
		 console.log(t_respuestas+"total");
		 if (t_respuestas==11) {
		 	document.getElementById('res_correct').innerHTML=g_correctas;
		 	//alert('Juego terminado');
		 	document.getElementById('con-result').style.display='block';
		 	 //location.reload(true);
	 		}
	 

 }
/*
* funcion que hace mover a las imagenes
*/
 function moving()
 {
 	for (var i = 0; i<g_conjunto.length; i ++)  {
 	
	 	var left= Math.floor( Math.random() * (1000 - 100 ) ) +100;
	 	var top= Math.floor( Math.random() * (500 - 50 ) ) +50;
	 	document.getElementById(g_conjunto[i][0] ).style.left=left+"px";
	 	/*g_conjunto[0][3] = parseInt (g_conjunto[0][3] )+2;
	 	//console.log(g_conjunto[0][3] ++);
	 	document.getElementById(g_conjunto[i][0] ).style.left=g_conjunto[0][3]+"px";
	 	if (parseInt(g_conjunto[0][3])>1000) {
	 		g_conjunto[0][3]=0;
	 	}*/
	 	document.getElementById(g_conjunto[i][0] ).style.top=top+"px";
 	}
 	
 	
 }
 /*
 *
 */
 function modal()
 {
 	$('#myModal').modal('show');

 }
  

