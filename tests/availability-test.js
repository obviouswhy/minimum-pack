//必要なコンポーネント読み込み
const fetch = require("node-fetch");

//APIのURL
const base_url =
  "https://script.google.com/macros/s/AKfycbwASpFG_k3gWx4HBANTNOUTHdJxOCfhqAxxYSVr0F-ikJdns7AbFxJgEeK_p4TOWJeV/exec";

//計測処理
(async () => {
  //リクエスト
  const response = await fetch(
    base_url + "?action=check_website_availability",
    {
      method: "get",
    }
  );
  const text = await response.text();
  console.log(text);
})();
