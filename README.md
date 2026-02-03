# Block Page

A lightweight, configurable **block page** that can be redirected to on *blocked content* being accessed. Designed to be simple, fast, and easy to customize.

> [!NOTE]
> This repo is purposefully **very** simple, this was originally a private project. Don't expect updates

![Block Page Desktop](https://github.com/user-attachments/assets/57332636-04a3-4089-9094-953077bb7718)

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

```text
example.com/?category=Adult%20Content&url=https://example.com
example.com/?url=https://example.com
example.com/?category=Adult%20Content&group=Guest&url=https://example.com
example.com/
