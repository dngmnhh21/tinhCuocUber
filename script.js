const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_UBER_SUV = [9000, 14000, 12000];
const GIA_CHO_UBER_SUV = 3000;

const ARRAY_GIA_UBER_BLACK = [10000, 16000, 14000];
const GIA_CHO_UBER_BLACK = 4000;

function kiemTraLoaiXe(){
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");

    if(uberX.checked){
        return "uberX";
    }else if(uberSUV.checked){
        return "uberSUV";
    }else if(uberBlack.checked){
        return "uberBlack";
    }
}

//thêm 3p mới tính tiền chờ
function tinhTienCho(thoiGianCho, giaCho){
     var tienCho = 0;
     if(thoiGianCho >=3){
        tienCho = Math.round(thoiGianCho/3.0)*giaCho;
     }
     return tienCho;
}

function tinhTien(soKM, thoiGianCho, arrayPrice, giaCho){
      var tienCho = tinhTienCho(thoiGianCho, giaCho);
      if(soKM<=1){
        return arrayPrice[0] + tienCho;
      }else if(soKM > 1 && soKM <=20){
        return arrayPrice[0] + (soKM - 1)* arrayPrice[1] + tienCho;
      }else if(soKM > 20){
        return arrayPrice[0] + 19 * arrayPrice[1] * (soKM - 20) * arrayPrice[2] + tienCho;
      }
}

function tinhTongtien(){
    var soKM = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("thoiGianCho").value;

    soKM = parseFloat(soKM);
    thoiGianCho = parseFloat(thoiGianCho);

    var tongTien = 0;
    var loaiXe = kiemTraLoaiXe();
    switch(loaiXe){
        case "uberX": 
             tongTien = tinhTien(soKM,thoiGianCho,ARRAY_GIA_UBER_X,GIA_CHO_UBER_X);
        break;
        case "uberSUV":
            tongTien = tinhTien(soKM,thoiGianCho,ARRAY_GIA_UBER_SUV,GIA_CHO_UBER_SUV);    
        break;
        case "uberBlack": 
        tongTien = tinhTien(soKM,thoiGianCho,ARRAY_GIA_UBER_BLACK,GIA_CHO_UBER_BLACK);
        break;
        default:
            alert("Vui lòng chọn loại xe");

    }
}

document.getElementById("btnTinhTien").onclick = function(){
    var tongTien = tinhTongtien();
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien;
}