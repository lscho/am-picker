## Amaze picker 多级联动选择器插件

[demo地址](https://lscho.github.io/am-picker/docs/demo.html "demo地址")

###使用说明

**1. 获取**

- 直接下载：[下载地址](https://github.com/lscho/am-picker/archive/master.zip)

**2. 引入文件**
依赖于amaze ui框架，需要先引入框架文件
```javascript
    <link rel="stylesheet" type="text/css" href="../dist/amazeui.min.css">
    <script type="text/javascript" src="../dist/jquery.min.js"></script>
    <script type="text/javascript" src="../dist/amazeui.min.js"></script>
    <script type="text/javascript" src="../dist/amazeui.picker.js"></script>
```

**3. 开始使用**

```html
 <select class="am-select" id="s6" data-am-selected data-am-picker="{url:'s2.json',next:'#s7',refurl:'s4.json?city=%value%'}">
</select>
```

##文档

####参数详解
  **url**：远程地址[demo:使用远程数据]
    页面加载时如果参数中存在url，则当前select的option会从该地址获取，并触发一次选择操作

 **next**：关联元素[demo:普通实例]
    如果select触发选择操作，并且data-am-picker参数中配置了next和refurl，那么next元素的option会从refurl中获取，并触发一次选择操作

  **refurl**：关联元素的远程地址[demo:普通实例]
    如果select触发选择操作，并且data-am-picker参数中配置了next和refurl，那么next元素的option会从refurl中获取，并触发一次选择操作

####使用说明

```html
<select class="am-select" id="s6" data-am-selected data-am-picker="{url:'s2.json',next:'#s7',refurl:'s4.json?city=%value%'}">
</select>
``` 
正确配置next和refurl即可开启多级联动


##License

MIT © 2015 - 2016 AllMobilize Inc.