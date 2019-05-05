var _ws = require("ws");

// var ws = new _ws("wss://api.hitbtc.com/api/2/ws");

// var arr = [
//   { currency: "BCC", available: "0.00200000", reserved: "0" },
//   { currency: "BTC", available: "0.000001848", reserved: "0" },
//   { currency: "BTG", available: "0.00691535", reserved: "0" },
//   { currency: "CND", available: "0.00600000", reserved: "0" },
//   { currency: "DOGE", available: "6.874405970", reserved: "0" },
//   { currency: "ETH", available: "0.00060000", reserved: "0" },
//   { currency: "HAND", available: "1790000", reserved: "0" },
//   { currency: "SBTC", available: "0.00183420", reserved: "0" },
//   { currency: "USD", available: "1.2506256", reserved: "0" },
//   { currency: "XEM", available: "0.86634800", reserved: "0" },
//   { currency: "ZEC", available: "0.04990045", reserved: "0" }
// ];

// for (i in arr) {
//   console.log(arr[i].currency + "usd");
// }

// async function getTrades() {
//   var holds = [];

//   ws.onopen = () => {
//     ws.send(
//       JSON.stringify({
//         method: "login",
//         params: {
//           algo: "BASIC",
//           pKey: "5561dbeb0a9ebe3566f121a98c2b8a46",
//           sKey: "41e45f1ddbcb6830634b0f72f64a9673"
//         }
//       })
//     );

//     ws.send(
//       JSON.stringify({
//         method: "getTradingBalance",
//         params: {},
//         id: "trades"
//       })
//     );
//   };

//   ws.onmessage = mes => {
//     var d = JSON.parse(mes.data);

//     if (d.id == "trades") {
//       var data = d.result;
//       for (i in data) {
//         if (data[i].available > 0) {
//           holds.push(data[i].currency);
//         }
//       }
//     }

//     if (holds.length > 0) {
//       ws.close();
//       // console.log(holds);
//     }
//   };
//   return holds;
// }

// (() => {
//   var holds = getTrades();
//   console.log(holds);
// })();

var test = {
  currency: "BCC",
  available: "0.00200000",
  reserved: "0",
  option: { settings: [2, 3, 4, 5, 6] }
};
// test["c"] = "llk";
console.log(test + { n: 8 });
