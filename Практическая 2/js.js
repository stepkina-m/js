function Page_Initialize()
{document.form1.hitext.value="Привет от JavaScript!";}
function ShowMessage()
{document.form2.Textbox.value = "Привет"}

function for3(a) {
    document.getElementById("maria3").value="Выбран переключатель " + a;
}
function Check1Clicked(){
document.getElementById("TextBox").value="Выбран флажок1!";}

function Check2Clicked(){
document.getElementById("TextBox").value="Выбран флажок2!";
}
function Check3Clicked(){
document.getElementById("TextBox").value="Выбран флажок3!";
}
function Check4Clicked(){
document.getElementById("TextBox").value="Выбран флажок4!";
}
function Check5Clicked(){
document.getElementById("TextBox").value="Выбран флажок5!";
}
function SelectClicked(){
document.getElementById("TextBox1").value="Вы выбрали опцию " + (document.getElementById("Select1").selectedIndex+1);
}
function for6(){
    if(confirm("Загрузить изображение?")==true) document.write("<img src='img/iam.jpg'>");
}
function for7(){
    alert("Продолжить");
}
function for88(){
	var inp = prompt("Введите текст");
	if (inp != null){
		document.getElementById("lala").value = inp;
	}
}
