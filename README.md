<h1 style="display: flex; align-items: center; gap: 12px;">
  <img width="100" height="100" alt="pfp" src="https://github.com/user-attachments/assets/a0ee24be-6977-474e-a914-79076e22bb7a" />
  Block Page
</h1>

A lightweight, configurable **block page** that can be redirected to on *blocked content* being accessed. Designed to be simple, fast, and easy to customize.

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
