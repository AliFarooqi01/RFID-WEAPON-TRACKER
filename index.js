const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
'use strict'; $(document).ready(function () {
    function generateData(baseval, count, yrange) {
        var i = 0; var series = []; while (i < count) { var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;; var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15; series.push([x, y, z]); baseval += 86400000; i++; }
        return series;
    }
    if ($('#s-col').length > 0) {
        var sCol = { chart: { height: 350, type: 'bar', toolbar: { show: false, } }, plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' }, }, dataLabels: { enabled: false }, stroke: { show: true, width: 2, colors: ['transparent'] }, series: [{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }, { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }], xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], }, yaxis: { title: { text: '$ (thousands)' } }, fill: { opacity: 1 }, tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } } }
        var chart = new ApexCharts(document.querySelector("#s-col"), sCol); chart.render();
    }
    if ($('#radial-chart').length > 0) {
        var radialChart = { chart: { height: 350, type: 'radialBar', toolbar: { show: false, } }, plotOptions: { radialBar: { dataLabels: { name: { fontSize: '22px', }, value: { fontSize: '16px', }, total: { show: true, label: 'Total', formatter: function (w) { return 249 } } } } }, series: [44, 55, 67, 83], labels: ['Apples', 'Oranges', 'Bananas', 'Berries'], }
        var chart = new ApexCharts(document.querySelector("#radial-chart"), radialChart); chart.render();
    }
});
