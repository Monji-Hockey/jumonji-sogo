/**
 * 共通ヘッダー・フッターの読み込み
 * 各ページの #header-container, #footer-container に挿入する
 * パスは現在のページからの相対パス（inc/header.html）で読み込む
 */
(function () {
  function loadFragment(id, path) {
    var container = document.getElementById(id);
    if (!container) return;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          container.innerHTML = xhr.responseText;
        }
      }
    };
    xhr.send();
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadFragment('header-container', 'inc/header.html');
    loadFragment('footer-container', 'inc/footer.html');
  });
})();
