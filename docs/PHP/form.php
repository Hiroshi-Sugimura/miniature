<?php 
error_reporting (E_ALL & ~E_NOTICE & ~E_WARNING & ~E_STRICT & ~E_DEPRECATED);
//
$mail_sys = "s2233025@cco.kanagawa-it.ac.jp";	// 管理者のメールアドレス
$from_name = "サンプル株式会社";	// メール送信者の表示
$from_mail = "s2233025@cco.kanagawa-it.ac.jp";	// メール送信者のメールアドレス（返信先）
$user_mail = "item2";	// 利用者にメールを送る場合のメールアドレス項目
//---
$title = "お問い合わせフォーム";
$subject = "お問い合わせ有難うございます\n";
$body = "お問い合わせ有難うございます。
以下の内容で承りました。
\n";
$subject_sys = "お問い合わせがありました\n";
$body_sys = "\n";
$footer = "\n------------
サンプル株式会社
http://〜〜〜〜〜.com/
------------
";
//------------------------------------------------

?>

<?php
// フォームが送信された場合
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームデータを取得
    $name = htmlspecialchars(trim($_POST["name"]));  // 名前
    $telephonenumber = htmlspecialchars(trim($_POST["telephonenumber"]));
    $email = htmlspecialchars(trim($_POST["email"]));  // メールアドレス
    $Inquirydetails = htmlspecialchars(trim($_POST["Inquirydetails"]));  // 内容
    $message = htmlspecialchars(trim($_POST["message"]));  // メッセージ

    // メール送信先
    $to = "s2233025@cco.kanagawa-it.ac.jp";  // 送信先のメールアドレス
    $subject = "お問い合わせフォームからのメッセージ";  // メールの件名

    // メールの内容
    $email_content = "お名前: $name\n";
    $email_content = "電話番号: $telephonenumber\n";
    $email_content .= "メールアドレス: $email\n";
    $email_content = "お問い合わせ内容: $Inquirydetails\n";
    $email_content .= "メッセージ:\n$message\n";

    // メールのヘッダー情報
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";

    // メール送信
    if (mail($to, $subject, $email_content, $headers)) {
        // メール送信成功時のメッセージ
        echo "<p>お問い合わせありがとうございます。確認の後、返信いたします。</p>";
    } else {
        // メール送信失敗時のメッセージ
        echo "<p>申し訳ありませんが、メールの送信に失敗しました。後ほど再度お試しください。</p>";
    }
}
?>