var calendar2021 = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

const elements = {
  callPrev: document.getElementById("btn_prev"),
  callNext: document.getElementById("btn_next"),
  alltable: document.getElementsByClassName("calanderDiv"),
  inputTxt: document.getElementById("txt"),
  btnClick: document.getElementById("btnClick"),
};

let monthShow = 1;

elements.callNext.addEventListener("click", () => {
  elements.callPrev.disabled = false;
  monthShow++;
  if (monthShow <= elements.alltable.length) {
    // for (let i = 0; i < elements.alltable.length; i++) {
    //   elements.alltable[i].style.display = "none";
    // }
    let fieldArr = Array.prototype.slice.call(elements.alltable);
    fieldArr.forEach(function (el) {
      el.style.display = "none";
    });
    document.getElementById("month-" + monthShow).style.display = "block";
    if (monthShow == elements.alltable.length) {
      elements.callNext.disabled = true;
    }
  }
});

elements.callPrev.addEventListener("click", () => {
  elements.callNext.disabled = false;
  monthShow--;
  if (monthShow >= 1) {
    let fieldArr = Array.prototype.slice.call(elements.alltable);
    fieldArr.forEach(function (el) {
      el.style.display = "none";
    });
    document.getElementById("month-" + monthShow).style.display = "block";
    if (monthShow == 1) {
      elements.callPrev.disabled = true;
    }
  }
});

elements.btnClick.addEventListener("click", () => {
  let values = elements.inputTxt.value;
  if (values == calendar2021.jan[1])
    document.getElementById("jan-1").innerHTML = values;

  if (values == calendar2021.feb[1])
    document.getElementById("feb-1").innerHTML = values;

  if (values == calendar2021.feb[3])
    document.getElementById("feb-3").innerHTML = values;

  if (values == calendar2021.feb[17])
    document.getElementById("feb-17").innerHTML = values;

  if (values == calendar2021.mar[2])
    document.getElementById("mar-2").innerHTML = values;

  if (values == calendar2021.mar[6])
    document.getElementById("mar-6").innerHTML = values;

  if (values == calendar2021.mar[8])
    document.getElementById("mar-8").innerHTML = values;

  if (values == calendar2021.apr[1])
    document.getElementById("apr-1").innerHTML = values;

  if (values == calendar2021.may[10])
    document.getElementById("may-10").innerHTML = values;

  if (values == calendar2021.jun[6])
    document.getElementById("jun-6").innerHTML = values;

  if (values == calendar2021.jul[4])
    document.getElementById("jul-4").innerHTML = values;

  if (values == calendar2021.aug[1])
    document.getElementById("aug-1").innerHTML = values;

  if (values == calendar2021.aug[25])
    document.getElementById("aug-25").innerHTML = values;

  if (values == calendar2021.sep[1])
    document.getElementById("sep-1").innerHTML = values;

  if (values == calendar2021.oct[13])
    document.getElementById("oct-13").innerHTML = values;

  if (values == calendar2021.nov[2])
    document.getElementById("nov-2").innerHTML = values;

  if (values == calendar2021.dec[20])
    document.getElementById("dec-20").innerHTML = values;

  if (values == calendar2021.dec[30])
    document.getElementById("dec-30").innerHTML = values;
});
