function redirectFirstPd() {
    //countdown
    //
    let countdown;
    let remainingTime = 15; // seconds countdown
    let isCancelled = false; // Flag to track if countdown is cancelled

    console.log("cdown")

    // 更新倒计时显示
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) {
            return;
        }
        countdownElement.textContent = remainingTime;

        if (remainingTime <= 0 && !isCancelled) {
            window.location.href = countdownElement.getAttribute("href");
        } else if (!isCancelled) {
            remainingTime--;
            countdown = setTimeout(updateCountdown, 1000); // 每秒更新一次
        }
    }

    // 取消跳转
    function cancelRedirect() {
        isCancelled = true;
        clearTimeout(countdown); // 停止倒计时

        let cancelButton = document.getElementById('cancelRedirect');
        cancelButton.disabled = true; // 禁用取消按钮
        cancelButton.classList.add('disabled'); // 添加禁用样式
        cancelButton.textContent = 'Cancelled'; // 修改按钮文字
    }

    document.getElementById('cancelRedirect').addEventListener('click', cancelRedirect);
    updateCountdown(); // 页面加载后开始倒计时
}


redirectFirstPd();
