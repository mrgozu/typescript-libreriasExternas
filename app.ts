
import 'jquery';
import 'sweetalert'
console.log('hola mundo');
//metodo obsoleto
$(document).ready(function(){
    console.log('Pagina lista.');
    $('h1').text('hola desde typescript obsoleto');
})
//metodo nuevo
jQuery(function(){
    console.log('Pagina lista otro metodo.');
    $('h1').text('hola desde typescript nuevo');
    $('p').text('hola desde parrafo');
    $('h1').css('background-color','gray')
    
})

$('#botAlerta').on('click', function(){
    //alert('hola desde typescript')
    sweetAlert('Ups..','algo salio mal', 'error')
})


// Sweet alert (libreria estetica de alertas)
