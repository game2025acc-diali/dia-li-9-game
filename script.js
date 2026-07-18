var cau = data[0];

document.getElementById("cauHoi").innerHTML = cau.cauHoi;

document.getElementById("A").innerHTML = cau.A;
document.getElementById("B").innerHTML = cau.B;
document.getElementById("C").innerHTML = cau.C;
document.getElementById("D").innerHTML = cau.D;

function kiemTra(dapAn) {
    if (dapAn == cau.dapAn) {
        document.getElementById("ketQua").innerHTML = "✅ Chính xác!";
    } else {
        document.getElementById("ketQua").innerHTML = "❌ Sai rồi!";
    }
}

document.getElementById("A").onclick = function () {
    kiemTra("A");
};

document.getElementById("B").onclick = function () {
    kiemTra("B");
};

document.getElementById("C").onclick = function () {
    kiemTra("C");
};

document.getElementById("D").onclick = function () {
    kiemTra("D");
};
