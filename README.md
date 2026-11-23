# 私の紹介HP

HTML / CSS / JavaScriptで作成した、レスポンシブなSNS紹介ページです。

## 写真の入れ方

`assets/images/` に、次の名前で写真を保存します。

- `profile.jpg`
- `music.jpg`
- `dog-x.jpg`
- `dog-instagram.jpg`
- `main-instagram.jpg`

詳細は `assets/images/README.txt` を参照してください。

## SNSリンクの変更方法

`js/links.js` の `profileLinks` を編集します。各キーに各SNSのURLを設定してください。

## 表示方法

VS CodeのLive Server拡張機能、またはローカルサーバーで `index.html` を開いてください。

PowerShell例:

```powershell
cd c:\myweb
python -m http.server 8000
```

ブラウザーで `http://localhost:8000` を開きます。
