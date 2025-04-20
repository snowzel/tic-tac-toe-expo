# Expo 〇×ゲーム

![〇×ゲーム画面](https://storage.googleapis.com/zenn-user-upload/cea68fe0b44b-20250420.png)

## 概要

このプロジェクトは、WindowsパソコンとExpoを使ってAndroid向けの〇×ゲーム（Tic-Tac-Toe）を開発したチュートリアルアプリケーションです。React Nativeの基本概念を学ぶための教材として作成されました。

## 機能

- シンプルな〇×ゲームの基本機能
- 2人プレイヤー対戦モード
- 勝敗判定と引き分け検出
- ゲームリセット機能

## 使用技術

- React Native
- Expo
- JavaScript / JSX

## 環境構築

### 前提条件

- Node.js (バージョン18.x以上)
- npm または yarn
- Android Studio (Android開発用)
- スマートフォンまたはエミュレータ

### インストール手順

1. リポジトリをクローン
```bash
git clone https://github.com/snowzel/tic-tac-toe-expo.git
cd tic-tac-toe-expo
```

2. 依存パッケージのインストール
```bash
npm install
# または
yarn install
```

3. アプリの起動
```bash
npx expo start
```

4. Expo Goアプリでスキャン、またはエミュレータで実行
   - 表示されるQRコードをExpo Goアプリでスキャン
   - または「a」キーを押してAndroidエミュレータで実行

## プロジェクト構造

```
TicTacToeGame/
├── app/                  # アプリケーションのメインコード
│   └── index.js          # アプリのエントリーポイント
├── assets/               # 画像やフォントなどのアセット
├── components/           # 再利用可能なコンポーネント
│   └── ui/               # UIコンポーネント
│       ├── Board.jsx     # ゲームボード
│       └── Game.jsx      # ゲームロジック
├── constants/            # 定数やテーマなど
└── hooks/                # カスタムReactフック
```

## 開発者向け情報

このプロジェクトは教育目的で作成されたものです。以下の記事で解説しています。

- [WindowsとExpoでAndroid用〇×ゲームを作る方法](https://zenn.dev/articles/cc0e3fe042ceec)


## 拡張アイデア

- AIプレイヤーの追加
- スコア記録機能
- 対戦履歴の表示
- テーマカスタマイズ
- サウンドエフェクト

## ライセンス

MIT License

Copyright (c) 2025 snowzel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
