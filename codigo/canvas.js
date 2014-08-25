var dibujo, lienzo, dibujo2, lienzo2, dibujo3, lienzo3, dibujo4, lienzo4, dibujo5, lienzo5;

function inicio()
{
	dibujo= document.getElementById("canvas1");
	dibujo2= document.getElementById("canvas2");
	dibujo3= document.getElementById("canvas3");
	dibujo4= document.getElementById("canvas4");
	dibujo5= document.getElementById("canvas5");
	lienzo= dibujo.getContext("2d"); //esto para obtener el contexto en 2 dimensiones
	lienzo2= dibujo2.getContext("2d");
	lienzo3= dibujo3.getContext("2d");
	lienzo4= dibujo4.getContext("2d");
	lienzo5= dibujo5.getContext("2d");

	dibujarGrilla(lienzo);//dibujo la grilla y luego el circulo
	lienzo.beginPath(); //inicio un nuevo camino para poder indicar un color diferente 
	lienzo.strokeStyle="#00F"; 
	lienzo.arc(150,150,100,(Math.PI * 2), false);//PI para dibujar medio circulo 2PI para circulo entero 
	lienzo.closePath();
	lienzo.stroke();


	dibujarmalla(lienzo2); //dibuja malla luego relleno el circulo
	lienzo2.beginPath(); //inicio un nuevo camino para poder indicar un color diferente
	lienzo2.fillStyle="#7CFC00"; //se usa fillStyle para que rellene la figura 
	lienzo2.arc(150,150,100,(Math.PI * 2), false);
	lienzo2.closePath();
	lienzo2.fill();

	dibujarcara(lienzo3);
	dibujarforma(lienzo4);
	dibujarrect(lienzo5);

	
}

function dibujarGrilla(l)
{
	var ancholinea= 30;
	l.strokeStyle= "#AAA";
	
	for(var linea=0;linea <= 300; linea++)
	{
		l.beginPath();
		l.moveTo(0, linea * ancholinea);
		l.lineTo(300, linea * ancholinea);
		l.closePath();
		l.stroke();
	}
	
	for(var linea=0;linea <= 300; linea++)
	{
		l.beginPath();
		l.moveTo(linea * ancholinea,0);
		l.lineTo(linea * ancholinea, 300);
		l.closePath();
		l.stroke();
	}
}

function dibujarmalla(l) 
{
	var ancholinea= 30;
	l.strokeStyle= "#FFD700";

	for(var linea=0;linea <= 300; linea++)
	{
		l.beginPath;
		l.moveTo(linea * ancholinea, 0);
		l.lineTo(0, linea * ancholinea);
		l.closePath();
		l.stroke();
	}
	
	var coordX=330;
	for(var linea=0;linea <= 300; linea++)
	{
		l.beginPath;
		l.moveTo(coordX-=ancholinea,0);
		l.lineTo(300, linea * ancholinea);
		l.closePath();
		l.stroke();
	}
}

function dibujarcara(l)
{
	//cara
	l.beginPath();
	l.fillStyle="yellow"; 
	l.arc(150,150,130,(Math.PI * 2), false);
	l.closePath();
	l.fill();

	//borde
	l.beginPath();
	l.stroketyle="black"; 
	l.arc(150,150,130,(Math.PI * 2), false);
	l.lineWidth= 8;
	l.closePath();
	l.stroke();

	//ojo
	l.beginPath();
	l.fillStyle="black"; 
	l.arc(105,110,15,(Math.PI * 2), false);
	l.closePath();
	l.fill();

	//ojo
	l.beginPath();
	l.fillStyle="black"; 
	l.arc(195,110,15,(Math.PI * 2), false);
	l.closePath();
	l.fill();

	//boca
	l.beginPath();
	l.fillStyle="black"; 
	l.arc(150,190,60,0,Math.PI, false);
	l.closePath();
	l.fill();
}

function dibujarforma(l)
{
	var ancholinea = 10;
	l.strokeStyle="#8A2BE2";

	var coordY= 150;
	for(var linea=0;linea <= 15; linea++)
	{
		l.beginPath;
		l.moveTo(linea * ancholinea,150);
		l.lineTo(150, coordY-=ancholinea);
		l.closePath();
		l.stroke();
	}

	coordY=150;
	for(var linea=0;linea <= 15; linea++)
	{
		l.beginPath;
		l.moveTo(linea * ancholinea,150);
		l.lineTo(150, coordY+=ancholinea);
		l.closePath();
		l.stroke();
	}	

	var coordX= 300;
	coordY=150;
	for(var linea=0;linea <= 15; linea++)
	{
		l.beginPath;
		l.moveTo(coordX-=ancholinea,150);
		l.lineTo(150, coordY-=ancholinea);
		l.closePath();
		l.stroke();
	}

	coordX= 300;
	coordY=150;
	for(var linea=0;linea <= 15; linea++)
	{
		l.beginPath;
		l.moveTo(coordX-=ancholinea,150);
		l.lineTo(150, coordY+=ancholinea);
		l.closePath();
		l.stroke();
	}
}

//Funcion que dibuja rectangulos
function dibujarrect(l)
{
	var color, coordX, coordY;

	color= 1;
	coordX= 30;
	coordY= 60;

	for(var i=0;i < 7;i++)
	{
		l.beginPath();
		l.fillStyle= "rgba(255,0,0,"+color+")";
		l.fillRect(coordX,coordY,150,90);
		l.closePath();

		color-=0.2;
		coordX+=25;
		coordY+=25;
	}
}
