﻿$(function () {

    var json =
        [{
            "name": "大厅（在线人数：2）",
            "code":"ZKCH",
            "icon": "icon-th",
            "child": [
                {
                    "name": "￥@￥",
                    "icon": "icon-minus-sign",
                    "code":"GZZKCH",
                    "parentCode": "ZKCH",
                    "child": []
                },
                {
                    "name": "&@&",
                    "icon": "",
                    "code":"BJZKCH",
                    "parentCode": "ZKCH",
                    "child": []
                }
            ]
        }, {
            "name": "我的好友",
            "code":"ZKKJ",
            "icon": "icon-th",
            "child": [
                {
                    "name": "好友1",
                    "code":"GZZKKJ",
                    "icon": "icon-minus-sign",
                    "parentCode": "ZKKJ",
                    "child": []
                },
            ]
        }];


    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data[i].icon == "icon-th") {
                $("#rootUL").append("<li data-name='" + data[i].code + "'><span><i class='" + data[i].icon + "'></i> " + data[i].name + "</span></li>");
            } else {
                var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                    "<li data-name='" + data[i].code + "'>" +
                    "<span>" +
                    "<i class='" + data[i].icon + "'></i> " +
                    data[i].name +
                    "</span>" +
                    "</li>")
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $("li[data-name='" + child.parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + child.parentCode + "'] > ul").append(
                    "<li data-name='" + child.code + "'>" +
                    "<span>" +
                    "<i class='" + child.icon + "'></i> " +
                    child.name +
                    "</span>" +
                    "</li>")
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }

    }

    tree(json)


});