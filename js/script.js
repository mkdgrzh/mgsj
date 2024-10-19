// 外部JavaScript代码

// 网页切换按钮js部分代码
const pages = ['zgPage1.html', 'zgPage2.html', 'zgPage3.html']; // 共三个HTML页面
let currentPageIndex = 0; // 起始于第一页

function goToPage(index) {
  // 在localStorage中设置当前页面索引
  localStorage.setItem('currentPageIndex', index);
  window.location.href = pages[index];
}

function goToNextPage() {
  // 从localStorage中获取当前页面索引
  let currentPageIndex = parseInt(localStorage.getItem('currentPageIndex'), 10);
  if (currentPageIndex < pages.length - 1) {
    goToPage(currentPageIndex + 1);
  } else {
    // 如果是最后一页，就跳转到第一页
    goToPage(0);
  }
}

function goToPreviousPage() {
  // 从localStorage中获取当前页面索引
  let currentPageIndex = parseInt(localStorage.getItem('currentPageIndex'), 10);
  if (currentPageIndex > 0) {
    goToPage(currentPageIndex - 1);
  } else {
    // 如果是第一页，就跳转到最后一页
    goToPage(pages.length - 1);
  }
}

// 在页面加载时初始化currentPageIndex
document.addEventListener('DOMContentLoaded', (event) => {
  // 如果没有保存的索引，就从第一页开始
  if (!localStorage.getItem('currentPageIndex')) {
    localStorage.setItem('currentPageIndex', 0);
  }
});


// 侧边栏JS代码
var navIcon = document.getElementById("nav-icon");
var sidebar = document.getElementById("sidebar");

navIcon.onmouseover = function() {
    sidebar.style.width = "250px";
}

sidebar.onmouseleave = function() {
    sidebar.style.width = "0";
}

var navIcon = document.getElementById("nav-icon");
    var sidebar = document.getElementById("sidebar");

// 显示侧边栏
function openSidebar() {
    sidebar.style.width = "250px";
}

// 隐藏侧边栏
function closeSidebar() {
    sidebar.style.width = "0";
}

// 鼠标移动到图标上时打开侧边栏
navIcon.onmouseover = openSidebar;

// 鼠标离开侧边栏时关闭侧边栏
sidebar.onmouseleave = closeSidebar;

// 点击图标也能够打开/关闭侧边栏
navIcon.onclick = function() {
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        openSidebar();
    } else {
        closeSidebar();
    }
};


// 监听页面加载事件
document.addEventListener('DOMContentLoaded', (event) => {
    // 监听滚轮事件
    window.addEventListener('scroll', () => {
        // 获取图片元素
        const image = document.querySelector('.main-content img');
        // 添加滚动后的样式类
        image.classList.add('img-scrolled');
        // 获取滚动提示元素
        const scrollPrompt = document.querySelector('.scroll-prompt');
        // 滚动时隐藏提示
        scrollPrompt.style.opacity = 0;
    });
});

// 获取当前日期
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
// 创建艺术字展示容器
    var dateContainer = document.getElementById("dateContainer");
// 在容器中显示日期
    dateContainer.textContent = year + "年" + month + "月" + day + "日";
