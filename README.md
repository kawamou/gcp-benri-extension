# gcp-benri-extension
## 概要
GCPをより便利に利用するためのChrome拡張です。
現状は、GCPヘッダの色を変更することができます。

**ヘッダカラーの変更**

<img width="911" alt="image" src="https://user-images.githubusercontent.com/18514782/168275833-cbccb8f5-6bbf-45af-a238-015c5e164612.png">

**設定画面**

<img width="850" alt="image" src="https://user-images.githubusercontent.com/18514782/168275903-bac509e9-a980-4d34-8681-f5ca332d1a65.png">

## セットアップ
`npm run build`で吐き出された`dist`以下を、`chrome://extensions`のデベロッパーモードより投入すればOKです（`パッケージ化されていない拡張機能を読み込む`）。

## 開発の進め方
```sh
# ビルド方法
npm run build

# Tailwind CSSの反映方法
npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
```
