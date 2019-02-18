'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();

exports.displayNetworkInfo = function() {
  console.log("Node.js is awesome!");
}

Object.keys(ifaces).forEach(function(ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function(iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    }

    if (alias >= 1) {
      console.log();
      console.log('Network information...');
      console.log();
      console.log('Network type:' + ifname);
      console.log('Local IP:' + iface.address);
      console.log('IP Version: ' + iface.family);
      console.log('Mac address v6:' + os.networkInterfaces()[ifname][0].address);
      console.log('Subnet Mask:' + os.networkInterfaces()[ifname][1].netmask);
    } else {
      console.log();
      console.log('Network information...');
      console.log();
      console.log('Network type: ' + ifname);
      console.log('Local IP: ' + iface.address);
      console.log('IP Version: ' + iface.family);
      console.log('Mac address v6: ' + os.networkInterfaces()[ifname][0].address);
      console.log('Subnet Mask: ' + os.networkInterfaces()[ifname][1].netmask);
    }
    ++alias;
  });
});
