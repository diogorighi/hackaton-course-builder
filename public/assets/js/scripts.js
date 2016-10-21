$(document).ready(function() {
    //Populate brands if select exists
    if($('#js-select-brands')) {
        $.get('/api/v1/brands', function(brands){
            var data = brands.map(function(brand){
                return {
                    id: brand.name,
                    text: brand.name
                }
            });
            $('#js-select-brands').select2({
                data: data
            });
        });

        $('#js-select-brands').on('change', function(){
            var brand = $(this).val();
            $.get('/api/v1/brands/'+brand, function(obj){
                var data = obj.models.map(function(model){
                    return {
                        id: model,
                        text: model
                    }
                });
                console.log(data);
                $('#js-select-models').select2('destroy');
                $('#js-select-models').removeAttr('disabled');
                $('#js-select-models').select2({
                    data: data
                });
            });
        })
    }

    //Instantiate models select if exists
    if($('#js-select-models')) {
        $('#js-select-models').select2({
            data: [{
                id: '',
                text: 'Selecione uma marca'
            }]
        });
    }
});
