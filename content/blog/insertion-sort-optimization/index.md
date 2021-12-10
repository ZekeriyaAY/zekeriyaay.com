---
title: "Insertion Sort Optimization"
date: 2021-12-08T19:24:21+03:00
icon: "dev"
description: "Insertion sort complexity O(n^2) to O(nlogn) optimization"
summary: "Insertion sort algoritmasının karmaşıklığını O(n^2)'den O(nlogn)'e nasıl optimize edilir?"
slug: "insertion-sort-optimization"
---

Insertion sort algoritmasının çalışmasını okey taşlarını sıralamaya benzetebiliriz.
Karışık dizilen taşları en baştan başlayarak her taşı önceki taşlara göre sıraya koyarak ilerleniyor.

> İnternette klasik insertion sort algoritmaları için tonlarca kaynak olduğundan dolayı detayına girilmeyecektir ve bu algoritmanın temellerinin bilindiğini kabul ederek anlatım ilerliyecektir.\
> Eğer insertion sort ile ilgili temel bilgiye sahip değilseniz [Kaynakça](#karnakça) bölümündeki linkten öğrenebilir ve daha sonra bu yazıya devam edebilirsiniz.

## Klasik {{< katex >}}\\(O(n^2)\\) Insertion Sort Algoritması

Mantığına girmeden, karşılaştırma yapmak için klasik insertion sort algoritmasına ve karmaşıklıklarına değinerek başlayalım.

{{< figure src="classic-insertion-c.svg" >}}
{{< figure src="classic-insertion-out-c.svg" >}}


| **Zaman Karmaşası** |                           |
|:-------------------:|:-------------------------:|
|      *En İyi*       |  {{< katex >}}\\(O(n)\\) &bull; Zaten sıralanmış array gelirse kontrol için çalışmış olacak  |
|      *En Kötü*      | {{< katex >}}\\(O(n^2)\\) &bull; Ters sıralanmış array geldiği durum |
|      *Ortalama*     | {{< katex >}}\\(O(n^2)\\) |
| **Alan Karmaşası**  |  {{< katex >}}\\(O(1)\\) &bull; Array dışında ek olarak `key` değeri için alan kullanılıyor |
|   **Kararlılığı**   |           *İyi*           |



## Skip List ile Insertion Sort Algoritması

## Tree ile Insertion Sort Algoritması

## Kaynakça
- [Insertion Sort Algoritması](https://www.programiz.com/dsa/insertion-sort)

