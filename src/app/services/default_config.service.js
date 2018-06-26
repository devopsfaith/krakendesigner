angular
.module('KrakenDesigner')
.service("DefaultConfig", function () {
    return {
        service: {
            version: 2,
            extra_config: {
                'github_com/devopsfaith/krakend-gologging': {
                    level:  "ERROR",
                    prefix: "[KRAKEND]",
                    syslog: false,
                    stdout: true
                }
            }
        },
        // Default middleware config
        extra_config: {
            'github_com/devopsfaith/krakend-ratelimit/juju/router': {
                "maxRate": 0,
                "clientMaxRate": 0,
                "strategy": "ip"
            },
            'github_com/devopsfaith/krakend-metrics' : {
                "collection_time": "60s",
                "proxy_disabled": false,
                "router_disabled": false,
                "backend_disabled": false,
                "endpoint_disabled": false,
                "listen_address": ":8090"
            },
            'github_com/devopsfaith/krakend-oauth2-clientcredentials' : {
                "endpoint_params": {}
            }
        }
    };
});