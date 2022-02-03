function initMap() {
  var href = window.location.href;
  if (0 < href.indexOf('office/fukuoka') || 0 < href.indexOf('office/sdlife_co_ltd')) {
    loadMap(33.5642877,130.3244132,15,'三共電気㈱本社\n㈱エスディライフ\n〒819-0022\n福岡市西区福重1丁目14-25', '<b>三共電気㈱ 本社</b><br><b>㈱エスディライフ</b><br><small>〒819-0022 </small><br>福岡市西区福重1丁目14-25');
  } else if (0 < href.indexOf('office/minami')) {
    loadMap(33.5173683,130.4260985,14,'三共電気㈱南営業所\n〒811-1201\n福岡県那珂川市片縄1丁目70', '<b>三共電気㈱ 南営業所</b><br><small>〒811-1201 </small><br>福岡県那珂川市片縄1丁目70');
  } else if (0 < href.indexOf('office/higashi')) {
    loadMap(33.6155757,130.4463105,14,'三共電気㈱東営業所\n〒811-2305\n粕屋郡粕屋町柚須十日田93-3', '<b>三共電気㈱ 東営業所</b><br><small>〒811-2305 </small><br>粕屋郡粕屋町柚須十日田93-3');
  } else if (0 < href.indexOf('office/chikuhou')) {
    loadMap(33.623918,130.6848878,14,'三共電気㈱筑豊営業所\n〒820-0071\n福岡県飯塚市忠隈359-1', '<b>三共電気㈱ 筑豊営業所</b><br><small>〒820-0071 </small><br>福岡県飯塚市忠隈359-1');
  } else if (0 < href.indexOf('office/asakura')) {
    loadMap(33.4040974,130.6599574,14,'三共電気㈱朝倉営業所\n〒838-0065\n福岡県朝倉市一木725番地1', '<b>三共電気㈱ 朝倉営業所</b><br><small>〒838-0065 </small><br>福岡県朝倉市一木725番地1');
  } else if (0 < href.indexOf('office/okinawa')) {
    loadMap(26.3698987,127.8135259,14,'三共電気㈱沖縄営業所\n〒904-2143\n沖縄県沖縄市知花５丁目35-27', '<b>三共電気㈱ 沖縄営業所</b><br><small>〒904-2143 </small><br>沖縄県沖縄市知花５丁目35-27');
  }
}

function loadMap(_x,_y,_zm,_str1,_str2) {
  var latlng = new google.maps.LatLng(_x, _y);
  var myOptions = {
    zoom: _zm,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  var markerOptions = {
    position: latlng,
    map: map,  
    title: _str1
  };
  var marker = new google.maps.Marker(markerOptions);
  var infowindow = new google.maps.InfoWindow({
    content: _str2
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
