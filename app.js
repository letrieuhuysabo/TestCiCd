
function tinhTong(a, b) {
    return a + b;
}

console.log("Đang chạy kiểm tra tự động...");

let ketQua = tinhTong(1, 2);

if (ketQua === 3) {
    console.log("TEST PASSED: Hàm tính toán chính xác!");
} else {
    throw new Error("TEST FAILED: Tính toán bị sai rồi!");
}