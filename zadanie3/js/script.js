$(function () {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var informations = ['Name: ','Capital: ', 'Land area: ', 'Population: ', 'Language: ', 'Currency: '];
    var atributes = ['name','capital','area','population','languages','currencies'];
    var countriesList = $('#countries');
    
    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) countryName = 'Polska';
        $.ajax({
            url: url + countryName, 
            method: 'GET', 
            success: showCountriesList
        });
    }

    function showCountriesList(resp) {
        
        
        $('#result').text('Znaleziono: '+resp.length);
        
        countriesList.empty();
        resp.map(function (item) {
            
            var flag = item.alpha2Code.toLowerCase();
            
            
            var span = $('<div>').addClass("flag-icon-background flag-icon-"+flag);
            var $tableResponsive = $('<div>').addClass('table-responsive');
            var $table = $('<table>').addClass('table table-bordered');
            var $tableBody = $('<tbody>');

            var output='';
            for (var i=0;i<6;i++){
                if(item.hasOwnProperty([atributes[i]]) 
//                   &&  item[atributes[i]].length !=0 
                  )
                    output +="<tr><td>"+informations[i]+"</td><td>"+ item[atributes[i]] +"</td></tr>";
                else output +="<tr><td>"+informations[i]+"</td><td>"+ "No information" +"</td></tr>";
            }
            
            $tableBody.append(output);
            $table.append($tableBody);
            $tableResponsive.append($table);
            countriesList.append(span);
            countriesList.append($tableResponsive);
            
        });
    }

});



//        function Country() {
//            var self = this;
//            //        var $button= $('#test');
//            this.$element = createTable();
//    
//            function createTable() {
//    
//                
//                var $tableRow = $('<tr>');
//                var $cellHead = $('<th>').text('th');
//                var $tableBody = $('<tbody>');
//                var $cellBody = $('<td>').text('td');
//                
//                $tableResponsive.append($table);
//                $table.append($tableHead).append($tableBody);
//                
//                $tableHead.append($tableRow);
//                $tableRow.append($cellHead);
//                
//                for (i = 0; i < 6; i++) {
//    
//                    for (j = 0; j < 2; j++) {
//                        
//                        $tableRow.append();
//                    }
//                    $tableBody.append($tableRow);
//                    
//                }
//                
//              
//                
//                return $tableResponsive;
//            }
//        }
//        $('#test').click(function () {
//            var c = new Country();
//            $('#countries').append(c.$element);
//        });