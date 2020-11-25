$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=1221a6ec4c2b483aa2059ec148c1fa1a", function(data) {
  //console.log(data);
  
  document.getElementById("user-ip").value = data.ip_address;
  document.getElementById("user-city").value = data.city;
  document.getElementById("user-region").value = data.region;
  document.getElementById("user-country").value = data.country;
  document.getElementById("user-continent").value = data.continent;
  document.getElementById("user-timezone").value = data.timezone.name;
  document.getElementById("user-isp-name").value = data.connection.isp_name;
  document.getElementById("user-isp-sys-org").value = data.connection.autonomous_system_organization;
  document.getElementById("user-conn-type").value = data.connection.connection_type;
  document.getElementById("user-isvpn").value = data.security.is_vpn ? "YES" : "NO";

})