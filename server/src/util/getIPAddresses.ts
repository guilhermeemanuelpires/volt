export default function () {
    var ipAddresses = [];

    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                ipAddresses.push(alias.address);
            }
        }
    }   

    if (ipAddresses.length >= 1) {
        return ipAddresses[ipAddresses.length-1]
    } else {
        return ipAddresses;
    }

}