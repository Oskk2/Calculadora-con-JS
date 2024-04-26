$(document).ready(function(){

    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    const soloNumeros = /^\d+$/;

    //FUNCION SUMAR

    $("#btnSumar").click(function(){

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar un numero");
            $("#error1").css("color", "red");
            return;
        }


        if(!soloNumeros.test(numero1)){
            $("#error1").text("Solo acepta numeros");
            $("#error1").css("color", "red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color", "red");
            return;
        }


        if(!soloNumeros.test(numero2)){
            $("#error2").text("Solo acepta numeros");
            $("#error2").css("color", "red");
            return;

        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color", "red");
        $("#resultado").css("fontSize", "2rem");

        limpiar();

    });

    $("#btnLimpiar").click(function(){
        limpiar();
    })

    //FUNCION RESTAR

    $("#btnRestar").click(function(){

    numero1 = $("#numero1").val();

    if(numero1 === ""){
        $("#error1").text("Debe ingresar un numero");
        $("#error1").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero1)){
        $("#error1").text("Solo acepta numeros");
        $("#error1").css("color", "red");
        return;
    }

    numero2 = $("#numero2").val();

    if(numero2 === ""){
        $("#error2").text("Debe ingresar el segundo numero");
        $("#error2").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero2)){
        $("#error2").text("Solo acepta numeros");
        $("#error2").css("color", "red");
        return;

    }

    resultado = parseInt(numero1) - parseInt(numero2);
    $("#resultado").text(resultado);
    $("#resultado").css("color", "red");
    $("#resultado").css("fontSize", "2rem");

    limpiar();

    });

    //FUNCION MULTIPLICAR

    $("#btnMultiplicar").click(function(){

    numero1 = $("#numero1").val();

    if(numero1 === ""){
        $("#error1").text("Debe ingresar un numero");
        $("#error1").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero1)){
        $("#error1").text("Solo acepta numeros");
        $("#error1").css("color", "red");
        return;
    }

    numero2 = $("#numero2").val();

    if(numero2 === ""){
        $("#error2").text("Debe ingresar el segundo numero");
        $("#error2").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero2)){
        $("#error2").text("Solo acepta numeros");
        $("#error2").css("color", "red");
        return;

    }

    resultado = parseInt(numero1) * parseInt(numero2);
    $("#resultado").text(resultado);
    $("#resultado").css("color", "red");
    $("#resultado").css("fontSize", "2rem");

    limpiar();

    });

        //FUNCION DIVIDIR

    $("#btnDividir").click(function(){

    numero1 = $("#numero1").val();

    if(numero1 === ""){
        $("#error1").text("Debe ingresar un numero");
        $("#error1").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero1)){
        $("#error1").text("Solo acepta numeros");
        $("#error1").css("color", "red");
        return;
    }

    numero2 = $("#numero2").val();

    if(numero2 === ""){
        $("#error2").text("Debe ingresar el segundo numero");
        $("#error2").css("color", "red");
        return;
    }


    if(!soloNumeros.test(numero2)){
        $("#error2").text("Solo acepta numeros");
        $("#error2").css("color", "red");
        return;

    }

    resultado = parseInt(numero1) / parseInt(numero2);
    $("#resultado").text(resultado);
    $("#resultado").css("color", "red");
    $("#resultado").css("fontSize", "2rem");

    limpiar();

    });

    function limpiar(){

        $("#numero1").val("");
        $("#numero2").val("");
    }

    $("#btnEsconder").click(function(){
        $("#numero1").hide();
    });

    $("#btnMostrar").click(function(){
        $("#numero1").show();
    });

    
});

// Swal.fire({
            //     title: "Solo se permiten numeros",
            //     text: "Revise su información",
            //     icon: "warning"
            //   });