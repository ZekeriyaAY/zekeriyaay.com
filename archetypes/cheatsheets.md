---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
icon: "dev"
description: ""
summary: ""
group: "Code"
slug: "{{ .File.BaseFileName }}"
---
