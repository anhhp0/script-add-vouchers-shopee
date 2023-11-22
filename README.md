# script-add-vouchers-shopee
### script_v2:
```javascript
async function addVoucher(voucherCode) {
    const apiUrl = "https://shopee.vn/api/v2/voucher_wallet/save_voucher";
    const payload = {
        "voucher_code": voucherCode,
        "need_user_voucher_status": true
    };
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Thêm các headers cần thiết khác ở đây
            },
            body: JSON.stringify(payload),
            // Các thuộc tính fetch khác (nếu cần)
        });
        const responseData = await response.json();
        if (responseData.error) {
            console.error(`Thêm Voucher lỗi: ${voucherCode}: ${responseData.error_msg}`);
        } else {
            console.log(`Đã thêm Voucher: ${voucherCode}`);
        }
    } catch (error) {
        console.error(`Lỗi khi gọi API: ${error}`);
    }
}

async function runAddVouchers() {
    let voucherInput = prompt("Vui lòng nhập các mã voucher, cách nhau bằng dấu phẩy (,):");
    if (voucherInput) {
        const vouchers = voucherInput.split(',').map(v => v.trim());
        for (const voucher of vouchers) {
            await addVoucher(voucher);

            // Tạo một khoảng thời gian chờ ngẫu nhiên từ 1 đến 2 giây
            const delay = Math.floor(Math.random() * 888) + 888; // 1000 đến 1999 ms
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        console.log("Thêm vouchers hoàn tất.");
    } else {
        console.log("Không có voucher nào được nhập.");
    }
}

runAddVouchers();
```
### script_v1:
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
