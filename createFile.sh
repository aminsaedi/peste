# create string variable
name='---
title: "titlePlaceholder"
subtitle: "subTitlePlaceholder"
date: "datePlaceholder"
---

markdownPlaceholder
'

for i in {1..100}
do
    echo "$name" > "posts/$i.md"
done

