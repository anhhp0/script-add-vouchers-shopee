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

            // Tạo một khoảng thời gian chờ ngẫu nhiên từ 888ms
            const delay = Math.floor(Math.random() * 888) + 888; // delay time
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        console.log("Thêm vouchers hoàn tất.");
    } else {
        console.log("Không có voucher nào được nhập.");
    }
}

runAddVouchers();