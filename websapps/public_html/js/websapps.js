/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $('#menu_option1').addClass('menu_selected');
    $('#row_title_text').html(  'Webs & Apps is een creatieve eenmanszaak opgericht in 2013. ' +
                                'Door zijn schaal en "No Nonsense"-mentaliteit kan Webs & Apps er steeds naar streven om zijn producten af te leveren met de best mogelijke kwaliteit voor een betaalbare prijs. <br><br>' + 
                                '<span class="baseSentence">No nonsense, just Quality!</span>');
        
    //Clicked on element
    $('#menu_option1').click(function() {
        removeSelected();
        $('#menu_option1').addClass('menu_selected');
        $('#row_title_text').html(  'Webs & Apps is een creatieve eenmanszaak opgericht in 2013. ' +
                                'Door zijn schaal en "No Nonsense"-mentaliteit kan Webs & Apps er steeds naar streven om zijn producten af te leveren met de best mogelijke kwaliteit voor een betaalbare prijs. <br><br>' + 
                                '<span class="baseSentence">No nonsense, just Quality!</span>');
    });
    $('#menu_option2').click(function() {
        removeSelected();
        $('#menu_option2').addClass('menu_selected');
        $('#row_title_text').html(  'Hier komt info over het maken van websites. ' +
                                'Momenteel is deze info er nog niet, dus staat hier voorlopige tekst. <br><br>' + 
                                '<span class="baseSentence">Van zodra de info er is, komt hij hier te !</span>');
    });
    $('#menu_option3').click(function() {
        removeSelected();
        $('#menu_option3').addClass('menu_selected');
        $('#row_title_text').html(  'Hier komt de info over Apps. ' +
                                'Hier moet nog over nagedacht worden. <br><br>' + 
                                '<span class="baseSentence">Dit is dus tijdelijke tekst</span>');
    });
    $('#menu_option4').click(function() {
        removeSelected();
        $('#menu_option4').addClass('menu_selected');
        $('#row_title_text').html(  'Hier komt een Contact us formulier. ' +
                                'Dit formulier moet nog ontwikkeld worden<br><br>' + 
                                '<span class="baseSentence">Dat komt in orde!</span>');
    });
    
});

function removeSelected() {
        //Remove selected menu click
    $('#menu').children('div').each(function () {
        $('#' + this.id).removeClass('menu_selected');
    });
}

