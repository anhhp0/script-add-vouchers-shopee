# script-add-vouchers-shopee
## Shopee 11-11-2023. List vouchers khác ở bên dưới
```javascript
//edit aVoucers

const aVourchers = [
"AFFGMLY1","AFFGMMS2","AFFUNPP9","AFFUNJS9","AFFUNTP5","AFFUNVU7","AFFGMHW7", "AFFGMBW4","AFFGMAI9","AFFGMQR6","AFFUNKZ2","AFFUNHT7","AFFUNDG8","AFFUNCM1","AFFMO","AFFSOM", "1111EBV100K","1111EBV50K","1111EBV50K","1111EBV1000KEL","1111EBV100KFM","1111EBV25KLS", "1111EBV50KFA","1111EBV50KCB"
];
 
async function addVoucher(oPayload){
try {
 
const response = await fetch("https://shopee.vn/api/v2/voucher_wallet/save_voucher", {
  "headers": {
"accept": "application/json",
"accept-language": "en-US,en;q=0.9",
"cache-control": "no-cache",
"content-type": "application/json",
"pragma": "no-cache",
"sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Windows\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-api-source": "pc",
"x-requested-with": "XMLHttpRequest",
"x-shopee-language": "vi",
"x-sz-sdk-version": "3.1.0-2&1.5.1"
  },
  "referrer": "https://shopee.vn/user/voucher-wallet",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(oPayload),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
const responseData = await response.json();
if(responseData && responseData.error == 4){
console.error("Thêm  Voucher: " + oPayload.voucher_code +" - Lỗi: " + responseData.error_msg);
}else{
console.log("Thêm Voucher thành công:", oPayload.voucher_code);
}
} catch (error) {
    console.error("Thêm Voucher lỗi: ",error);
  }
}
 
aVourchers.forEach((voucher)=>{
let oPayload = {"voucher_code":voucher,"need_user_voucher_status":true};
this.addVoucher(oPayload);
 
});
//thanks https://www.linkedin.com/in/tinhtrinh/
```
## vouchers: chờ đợt sale tiếp theo
