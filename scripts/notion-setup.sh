#!/bin/bash

# prepare vitepress workspace
mkdir -p notion-locales/en/docs notion-locales/zh-HK/docs notion-locales/zh-CN/docs

# translate HK to CN
bun ./scripts/notion-setup.js

# autocorrect
bun run autocorrect --fix notion-locales/
