function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.querySelectorAll('.toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            this.textContent = 'Hide Options';
        } else {
            details.classList.add('hidden');
            this.textContent = 'Show Options';
        }});
});
