let copyBtn = document.getElementById('js-copy-btn');
copyBtn.addEventListener('click', click_copy_btn, false);

function click_copy_btn() {
  //コピーするテキストを取得
  let getTxt = document.getElementById('js-copy-txt').innerText;

  //取得したテキストをクリップボードに書き込み
  navigator.clipboard.writeText(getTxt);
}