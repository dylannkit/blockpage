# Block Page

A lightweight, configurable **block page** that can be redirected to on *blocked content* being accessed. Designed to be simple, fast, and easy to customize.

> [!NOTE]
> This repo is purposefully **very** simple, this was originally a private project. Don't expect updates

## ✨ Features

- 🔗 **URL-based configuration** using query parameters
- 🧩 Supports multiple blocking contexts:
  - `?url=example` — block a specific URL
  - `?group=example` — block by group name
  - `?category=example` — block by category
- ⚡ Minimal and lightweight
- 🎨 Easy to customize (text, styles, layout)
- 🌐 Works entirely client-side

## 🧪 Usage

You can control what the block page displays by passing query parameters in the URL.

### Examples

```text
/block.html?url=example.com
/block.html?group=social-media
/block.html?category=adult
