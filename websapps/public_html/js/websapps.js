/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $('#menu_option1').addClass('menu_selected');
    $('#row_title_text').html(  '<p align="justify">Webs & Apps is een ' +
                                '<span class="baseSentence">dynamische onderneming </span>' +
                                'opgericht in 2013. ' +
                                'Door zijn schaal en "No Nonsense"-mentaliteit kunnen wij er steeds naar streven om producten af te leveren met de best mogelijke <span class="baseSentence">kwaliteit </span>voor een <span class="baseSentence">betaalbare prijs. </span> <br><br></p>' + 
                                '<span class="baseSentence">No nonsense, just Quality!</span>');
        
    //Clicked on element
    $('#menu_option1').click(function() {
        removeSelected();
        $('#menu_option1').addClass('menu_selected');
        $('#row_title_text').html(  '<p align="justify">Webs & Apps is een ' +
                                '<span class="baseSentence">dynamische onderneming </span>' +
                                'opgericht in 2013. ' +
                                'Door zijn schaal en "No Nonsense"-mentaliteit kunnen wij er steeds naar streven om producten af te leveren met de best mogelijke <span class="baseSentence">kwaliteit </span>voor een <span class="baseSentence">betaalbare prijs. </span> <br><br></p>' + 
                                '<span class="baseSentence">No nonsense, just Quality!</span>');
    });
    $('#menu_option2').click(function() {
        removeSelected();
        $('#menu_option2').addClass('menu_selected');
        $('#row_title_text').html(  '<p align="justify">U kunt bij ons terecht voor de <span class="baseSentence">creatie en hosting </span> van uw website. ' +
                                'Wij streven er steeds naar om uw idee <span class="baseSentence">samen met u </span>te realiseren. Wij gaan hierbij volop voor een <span class="baseSentence">persoonlijke aanpak </span> waarbij U als klant op de eerste plaats komt.  <br><br></p>' + 
                                '<span class="baseSentence">Your partner in webdesign!</span>');
    });
    $('#menu_option3').click(function() {
        removeSelected();
        $('#menu_option3').addClass('menu_selected');
        $('#row_title_text').html(  '<p align="justify">Uw persoonlijke app voor <span class="baseSentence">iOS, Android of Windows?  </span>Ook hiervoor bent u bij ons aan het juiste adres. ' +
                                ' In samenspraak met u zorgen wij voor het <span class="baseSentence">design, de ontwikkeling en de distributie  </span>van uw mobiele applicatie. <br><br></p>' + 
                                '<span class="baseSentence">Mobile is the future!</span>');
    });
    $('#menu_option4').click(function() {
        removeSelected();
        $('#menu_option4').addClass('menu_selected');
        $('#row_title_text').html(  'U kan contact opnemen met ons via: <br><br>' +
                                '<div id="socialimg"><img class="bigsocial" src="img/email_big.jpg"> <img class="bigsocial" src="img/facebook_big.jpg"> <img class="bigsocial" src="img/twitter_big.jpg"></div><br><br>' + 
                                '<span class="baseSentence">See you soon!</span>');
    });
    
});

function removeSelected() {
        //Remove selected menu click
    $('#menu').children('div').each(function () {
        $('#' + this.id).removeClass('menu_selected');
    });
}

