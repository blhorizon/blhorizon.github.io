(async function() {
    async function getIpInfo() {
        var fetchUrl = "https://api.qjqq.cn/api/Local";
        try {
            var response = await fetch(fetchUrl);
            var json = await response.json();

            var ip = json.ip;
            var country = json.data.country;
            var prov = json.data.prov;
            var city = json.data.city;
            var isp = json.data.isp;

            document.getElementById("userAgentIp").innerHTML = ip;
            document.getElementById("userAgentCountry").innerHTML = country;
            document.getElementById("userAgentProv").innerHTML = prov;
            document.getElementById("userAgentCity").innerHTML = city;
            document.getElementById("userAgentISP").innerHTML = isp;
            

            var uaInfo = navigator.userAgent;

            document.getElementById("userAgentDevice").innerHTML = uaInfo;
        } catch (error) {
            console.error("An error occurred while fetching IP info:", error);
        }
    }

    await getIpInfo();
})();