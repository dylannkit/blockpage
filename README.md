# Block Page

A lightweight, configurable **block page** that can be redirected to on *blocked content* being accessed. Designed to be simple, fast, and easy to customize.

> [!NOTE]
> This repo is purposefully **very** simple, this was originally a private project. Don't expect updates

<img width="650" height="310" alt="Desktop Screenshot" src="https://github.com/user-attachments/assets/e2031d09-672b-4c3a-948b-be50086a7c10" />

## ✨ Features

- 🔗 **URL-based configuration** using query parameters
- 🧩 Supports multiple blocking contexts:
  - `?url=example` — blocked URL
  - `?group=example` — block by "user group"
  - `?category=example` — category that URL falls under
- ⚡ Minimal and lightweight
- 🎨 Easy to customize (css)
- 🌐 Works entirely client-side

## 🧪 Usage

You can control what the block page displays by passing query parameters in the URL.

### Examples

> [!NOTE]
> The url can also be used without any query parameters or without all query parameters, table of data will simply just not be shown or certain query parameters will be hidden.

- [/?category=Adult%20Content&url=https://example.com](https://dylannkit.github.io/blockpage/?category=Adult%20Content&url=https://example.com)
- [/?url=https://example.com](https://dylannkit.github.io/blockpage/?url=https://example.com)
- [/?category=Adult%20Content&group=Guest&url=https://example.com](https://dylannkit.github.io/blockpage/?category=Adult%20Content&group=Guest&url=https://example.com
)

MIT License

Copyright (c) [2026] [dylankit]

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
SOFTWARE.[^1].
