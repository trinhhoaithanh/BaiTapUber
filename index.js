var KM1_UBERX = 8000;
var KMDUOI20_UBERX = 12000;
var KMTREN20_UBERX = 10000;
var TGCHO_UBERX = 2000;
var KM1_UBER_SUV = 9000;
var KMDUOI20_UBER_SUV = 14000;
var KMTREN20_UBER_SUV = 12000;
var TGCHO_UBER_SUV = 3000;
var KM1_UBER_BLACK = 10000;
var KMDUOI20_UBER_BLACK = 16000;
var KMTREN20_UBER_BLACK = 14000;
var TGCHO_UBER_BLACK = 4000;
function getElement(ele){
    return document.getElementById(ele);
}
function LayLoaiXe(){
    var ketQua;
    var uberX = getElement('uberX').checked;
    var uberSUV = getElement('uberSUV').checked;
    var uberBlack = getElement('uberBlack').checked;
    if (uberX)
    {
        ketQua = 'uberX';
    }
    else if (uberSUV){
        ketQua = 'uberSUV';
    }
    else if (uberBlack){
        ketQua = 'uberBlack';
    }
    return ketQua;
}

function TinhTien(){
    var laySoKM  = document.getElementById('soKM').value;
    laySoKM = parseFloat(laySoKM);
    var layThoiGianCho  = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);
    // console.log(laySoKM);
    // console.log(layThoiGianCho);    
    var divThanhTien  = document.getElementById('divThanhTien');
    divThanhTien.style.display = 'block';
    var spanTien = document.getElementById('xuatTien');
    var loaiXe = LayLoaiXe();
    
    var thanhTien = 0;
    switch (loaiXe){
        case 'uberX':
            if (laySoKM<=1){
                thanhTien = laySoKM*KM1_UBERX+layThoiGianCho*TGCHO_UBERX;

            } else if (laySoKM>1&&laySoKM<=20){
                thanhTien = 1*KM1_UBERX +(laySoKM-1)*KMDUOI20_UBERX +layThoiGianCho*TGCHO_UBERX;
            }
            else if(laySoKM>20){
                thanhTien = 1*KM1_UBERX +20*KMDUOI20_UBERX +(laySoKM-21)*KMTREN20_UBERX+layThoiGianCho*TGCHO_UBERX;
            }

            break;
        case 'uberSUV':
            if (laySoKM<=1){
                thanhTien = laySoKM*KM1_UBER_SUV+layThoiGianCho*TGCHO_UBER_SUV;

            } else if (laySoKM>1&&laySoKM<=20){
                thanhTien = 1*KM1_UBER_SUV+(laySoKM-1)*KMDUOI20_UBER_SUV +layThoiGianCho*TGCHO_UBER_SUV;
            }
            else if(laySoKM>20){
                thanhTien = 1*KM1_UBER_SUV+20*KMDUOI20_UBER_SUV+ (laySoKM-21)*KMTREN20_UBER_SUV+layThoiGianCho*TGCHO_UBER_SUV;
            }
            break;
        case 'uberBlack':
            if (laySoKM<=1){
                thanhTien = laySoKM*KM1_UBER_BLACK+layThoiGianCho*TGCHO_UBER_BLACK;

            } else if (laySoKM>1&&laySoKM<=20){
                thanhTien = 1*KM1_UBER_BLACK+(laySoKM-1)*KMDUOI20_UBER_BLACK +layThoiGianCho*TGCHO_UBER_BLACK;
            }
            else if(laySoKM>20){
                thanhTien = 1*KM1_UBER_BLACK+20*KMDUOI20_UBER_BLACK+(laySoKM-21)*KMTREN20_UBER_BLACK+layThoiGianCho*TGCHO_UBER_BLACK ;
            }
            break;
        default:   
            var divThanhTien  = document.getElementById('divThanhTien');
            divThanhTien.style.display = 'none';
            alert('Vui lòng chọn loại xe');
            break;
    }
   
     spanTien.innerHTML = thanhTien;
     return thanhTien;
}
function renderHoaDon(){
    var contentHTML ="";
    var laySoKM  = document.getElementById('soKM').value;
    laySoKM = parseFloat(laySoKM);
    var layThoiGianCho  = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);
    var loaiXe = LayLoaiXe();
    var thanhTien=0;
    thanhTien=TinhTien();
    switch(loaiXe)
    {
        case 'uberX':
            if (laySoKM<=1){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM} km</td>
                          <td>${KM1_UBERX}</td>
                          <td>${KM1_UBERX}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBERX}</td>
                          <td>${TGCHO_UBERX * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if (laySoKM>1&&laySoKM<=20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBERX}</td>
                          <td>${KM1_UBERX}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-1} km</td>
                          <td>${KMDUOI20_UBERX}</td>
                          <td>${KMDUOI20_UBERX*(laySoKM-1)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBERX}</td>
                          <td>${TGCHO_UBERX * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if(laySoKM>20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBERX}</td>
                          <td>${KM1_UBERX}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>19 km</td>
                          <td>${KMDUOI20_UBERX}</td>
                          <td>${KMDUOI20_UBERX*19}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-20}</td>
                          <td>${KMTREN20_UBERX}</td>
                          <td>${KMTREN20_UBERX*(laySoKM-20)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBERX}</td>
                          <td>${TGCHO_UBERX * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            break;
        case 'uberSUV':
            if (laySoKM<=1){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM} km</td>
                          <td>${KM1_UBER_SUV}</td>
                          <td>${KM1_UBER_SUV}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_SUV}</td>
                          <td>${TGCHO_UBER_SUV * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if (laySoKM>1&&laySoKM<=20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBER_SUV}</td>
                          <td>${KM1_UBER_SUV}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-1} km</td>
                          <td>${KMDUOI20_UBER_SUV}</td>
                          <td>${KMDUOI20_UBER_SUV*(laySoKM-1)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_SUV}</td>
                          <td>${TGCHO_UBER_SUV * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if(laySoKM>20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBER_SUV}</td>
                          <td>${KM1_UBER_SUV}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>19 km</td>
                          <td>${KMDUOI20_UBER_SUV}</td>
                          <td>${KMDUOI20_UBER_SUV*19}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-20}</td>
                          <td>${KMTREN20_UBER_SUV}</td>
                          <td>${KMTREN20_UBER_SUV*(laySoKM-20)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_SUV}</td>
                          <td>${TGCHO_UBER_SUV * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            break;
        case 'uberBlack':
            if (laySoKM<=1){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM} km</td>
                          <td>${KM1_UBER_BLACK}</td>
                          <td>${KM1_UBER_BLACK}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_BLACK}</td>
                          <td>${TGCHO_UBER_BLACK * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if (laySoKM>1&&laySoKM<=20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBER_BLACK}</td>
                          <td>${KM1_UBER_BLACK}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-1} km</td>
                          <td>${KMDUOI20_UBER_BLACK}</td>
                          <td>${KMDUOI20_UBER_BLACK*(laySoKM-1)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_BLACK}</td>
                          <td>${TGCHO_UBER_BLACK * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            else if(laySoKM>20){
                contentHTML+= `
                <tr>
                          <td>${loaiXe}</td>
                          <td>1 km</td>
                          <td>${KM1_UBER_BLACK}</td>
                          <td>${KM1_UBER_BLACK}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>19 km</td>
                          <td>${KMDUOI20_UBER_BLACK}</td>
                          <td>${KMDUOI20_UBER_BLACK*19}</td>
                        </tr>
                        <tr>
                          <td>${loaiXe}</td>
                          <td>${laySoKM-20}</td>
                          <td>${KMTREN20_UBER_BLACK}</td>
                          <td>${KMTREN20_UBER_BLACK*(laySoKM-20)}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${layThoiGianCho}</td>
                          <td>${TGCHO_UBER_BLACK}</td>
                          <td>${TGCHO_UBER_BLACK * layThoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${TinhTien()}</td>
                        </tr>
                
                `;
            }
            break;
    }
    console.log(contentHTML);
    document.getElementById('render-tbody').innerHTML = contentHTML;
    document.getElementById('hoa-don').style.display = 'block';
}

function TatHoaDon(){
    var hoaDon = document.getElementById('hoa-don');
    hoaDon.style.display = 'none';
}