var c_lat = '', c_lon = '';
function ShowMap(mapParameters) {
    c_lat = $(mapParameters).parent().attr("data-Latitude");
    c_lon = $(mapParameters).parent().attr("data-Longitude");
    $('#SpanLatitude').text(c_lat);
    $('#SpanLongitude').text(c_lon);
    $('#isdefaultmap').text('1');
    $('#ifrm').prop('src', '/Map2.html');
    $('#MapView').modal('show');
}
function ShowDirections() {
    debugger
    $('#isdefaultmap').text('0');
    $('#ifrm').prop('src', '/Map2.html');
    $('#MapView').modal('show');
}