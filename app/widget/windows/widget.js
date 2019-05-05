// var nw = require("nw.gui");
// var win = nw.Window.get();
var ws = new WebSocket("wss://api.hitbtc.com/api/2/ws");
var app = new Vue({
  el: "#app",
  data: {
    name: "ehigiepaul",
    holds: [],
    ticker: []
  },
  methods: {
    quit() {
      nw.App.quit();
    },
    hide() {
      var cardView = document.querySelector(".cardView");

      cardView.classList.toggle("hide");
      if (cardView.classList.value.match("hide")) {
        document.getElementById("widgetDisplay").innerText = "Show";
        setTimeout(() => {
          //   win.width = 115;
        }, 1000);
      } else {
        // win.width = window.screen.width;
        document.getElementById("widgetDisplay").innerText = "Hide";
      }
    },
    getTrades() {
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            method: "login",
            params: {
              algo: "BASIC",
              pKey: "5561dbeb0a9ebe3566f121a98c2b8a46",
              sKey: "41e45f1ddbcb6830634b0f72f64a9673"
            }
          })
        );

        ws.send(
          JSON.stringify({
            method: "getTradingBalance",
            params: {},
            id: "trades"
          })
        );
      };

      ws.onmessage = mes => {
        var d = JSON.parse(mes.data);

        if (d.id == "trades") {
          var data = d.result;
          for (i in data) {
            if (data[i].available > 0) {
              if (!/(usd)|(bcc)|(cnd)|(sbtc)/gim.test(data[i].currency)) {
                this.holds.push(data[i]);
              }
            }
          }
        }

        if (this.holds.length > 0) {
          ws.close();
          console.log(this.holds);
        }
      };
    },

    getTicker() {
      if (this.holds.length <= 0) {
        setTimeout(() => {
          this.getTicker();
        }, 2000);
      } else {
        var ws = new WebSocket("wss://api.hitbtc.com/api/2/ws");

        ws.onopen = () => {
          for (var i in this.holds) {
            ws.send(
              JSON.stringify({
                method: "subscribeTicker",
                params: {
                  symbol: this.holds[i].currency + "usd"
                },
                id: 123
              })
            );
          }
        };

        ws.onmessage = mes => {
          var d = JSON.parse(mes.data);
          if (!d.id) {
            var p = d.params;
            // console.log(p);
            for (var i in this.holds) {
              if ((this.holds[i].currency + "usd").toUpperCase() == p.symbol) {
                p["hold"] = this.holds[i].available;
                this.ticker.splice(i, 1, p);
              }
            }
          }
        };
      }
    }
  },

  created() {
    this.getTrades();
    this.getTicker();
  }
});
