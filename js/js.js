
function getData(api) {
    fetch(api)
        .then(resp => resp.json())
        .then(data => {
            build(data);
            click();
        });
}

getData('./api/normal.json');
var record = document.cookie;
changePic(record);

function changePic(record) {
    if (record.includes('cate1')) {
        getData('./api/cate1.json');
    }
    if (record.includes('cate2')) {
        getData('./api/cate2.json');
    }
    if (record.includes('cate3')) {
        getData('./api/cate3.json');
    }
    if (record.includes('cate4')) {
        getData('./api/cate4.json');
    }
}

function build(data) {
    let imgStr = '';
    const imgs = document.querySelector('.imgs');
    for (var i = 0; i < data.length; i += 1) {
        imgStr += `
        <div class="img_inner${i + 1}">
        <a class="cate${data[i].cate}" href="${data[i].url}" target="_blank" title="我是一個廣告拉">
        <img class="img_resp" src="./images/${data[i].src}" alt="我是你看不到的廣告拉" width="500" height="330">
        </a>
        </div>`;

    }
    imgs.innerHTML = imgStr;
}


function click() {
    document.querySelector(`.img_inner1`).addEventListener('click', function () {
        const now = new Date();
        const exp = new Date(now.setDate(now.getDate() + 1));
        document.cookie = `cate = ${this.childNodes[1].getAttribute('class')}; expires = ${exp.toUTCString()}`;
        getData('./api/cate1.json');
    })
    document.querySelector(`.img_inner2`).addEventListener('click', function () {
        const now = new Date();
        const exp = new Date(now.setDate(now.getDate() + 1));
        document.cookie = `cate = ${this.childNodes[1].getAttribute('class')}; expires = ${exp.toUTCString()}`;
        getData('./api/cate2.json');
    })
    document.querySelector(`.img_inner3`).addEventListener('click', function () {
        const now = new Date();
        const exp = new Date(now.setDate(now.getDate() + 1));
        document.cookie = `cate = ${this.childNodes[1].getAttribute('class')}; expires = ${exp.toUTCString()}`;
        getData('./api/cate3.json');
    })
    document.querySelector(`.img_inner4`).addEventListener('click', function () {
        const now = new Date();
        const exp = new Date(now.setDate(now.getDate() + 1));
        document.cookie = `cate = ${this.childNodes[1].getAttribute('class')}; expires = ${exp.toUTCString()}`;
        getData('./api/cate4.json');
    })

}

