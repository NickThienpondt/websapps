/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    
    
    $('#row_title_text').html(  'Webs & Apps is een creatieve eenmanszaak opgericht in 2013. ' +
                                'Door zijn schaal en "No Nonsense"-mentaliteit kan Webs & Apps er steeds naar streven om zijn producten af te leveren met de best mogelijke kwaliteit voor een betaalbare prijs. <br><br>' + 
                                '<span class="baseSentence">No nonsense, just Quality!</span>');
        
    //Clicked on element
    $('#menu_option1').click(function() {
        removeSelected();
        $('#menu_option1').addClass('menu_selected');
    });
    $('#menu_option2').click(function() {
        removeSelected();
        $('#menu_option2').addClass('menu_selected');
    });
    $('#menu_option3').click(function() {
        removeSelected();
        $('#menu_option3').addClass('menu_selected');
    });
    $('#menu_option4').click(function() {
        removeSelected();
        $('#menu_option4').addClass('menu_selected');
    });
    
});

function removeSelected() {
        //Remove selected menu click
    $('#menu').children('div').each(function () {
        $('#' + this.id).removeClass('menu_selected');
    });
}

