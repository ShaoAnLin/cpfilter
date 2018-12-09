var HOUSING = ["過濾器", "濾材", "機械設備", "磁力設備", "空調濾網"];
var CATEGORIES = {
    "過濾器": ["不鏽鋼濾心機", "不鏽鋼袋濾機", "純PP濾殼", "過濾器配件"],
    "濾材": ["不鏽鋼濾心", "PP囊式濾心", "活性碳濾心"],
    "機械設備": ["自動濾洗設備", "磁選機"],
    "磁力設備": [],
    "空調濾網": []
}
var SERIES = {
    "過濾器": {
        "不鏽鋼濾心機": ["ALS", "ALA", "AHS", "AF", "AL", "AH", "AM"],
        "不鏽鋼袋濾機": ["PL", "PH", "PHT", "PM"],
        "純PP濾殼": [],
        "過濾器配件": []
    },
    "濾材": {
        "不鏽鋼濾心": [],
        "PP囊式濾心": [],
        "活性碳濾心": [],
        "陽極袋": null,
        "壓濾機濾布": [],
        "砂光紙": null
    },
    "機械設備": {
        "自動濾洗設備": [],
        "磁選機": []
    },
    "磁力設備": {
        "磁力設備": []
    },
    "空調濾網": {
        "磁力設備": []
    }
}
var ITEMS = {
    // ========== 過濾器 ========== //
    // 不鏽鋼濾心機
    "ALS": {
        "series": "ALS",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 4,
        "title": "單支裝",
        "subtitle": "濾心式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316",
            "進出口": "3/4”PT, 1”PT-F/NPT-F",
            "排放口": "1/4”PT-F",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部拋光, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "機台循環、PCW過濾、化學品製程",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "ALA": {
        "series": "ALA",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式過濾器 - A款",
        "specification": {
            "本體材質": "SUS304, SUS316",
            "進出口": "3/4”PT, 1”PT-F/NPT-F",
            "排放口": "1/4”PT-F",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "機台循環、PCW過濾、化學品製程",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "AHS": {
        "series": "AHS",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式過濾器 - 高壓款",
        "specification": {
            "本體材質": "SUS304, SUS316",
            "進出口": "1/2”~1.5”牙口, 法蘭",
            "排放口": "1/2”PT-M",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "15kg/cm<sup>2</sup> (225psi)",
            "操作壓力": "10kg/cm<sup>2</sup> (150psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "機台循環、PCW過濾、化學品製程",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "AF": {
        "series": "AF",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式水塔過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316",
            "進出口": "3/4”~1”PT-M",
            "排放口": "3/4”PT-M",
            "排氣口": "3/4”~1”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "水塔過濾",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "AL": {
        "series": "AL",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "3~7支裝",
        "subtitle": "濾心式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "1”~4”牙口, 法蘭, 衛生級接頭",
            "排放口": "3/4”PT-M",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、化學品製程、PCW過濾、飲料業、循環過濾",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "AH": {
        "series": "AH",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "3~7支裝",
        "subtitle": "濾心式過濾器 - 高壓款",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "1”~4”牙口, 法蘭, 衛生級接頭",
            "排放口": "3/4”PT-M",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "15kg/cm<sup>2</sup> (225psi)",
            "操作壓力": "10kg/cm<sup>2</sup> (150psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "AM": {
        "series": "AM",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "title": "大流量多支裝",
        "subtitle": "濾心式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "2”~14”法蘭, 衛生級接頭",
            "排放口": "1”PT-F",
            "排氣口": "2”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },

    // 不鏽鋼袋濾機
    "PL": {
        "series": "PL",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 1,
        "title": "單袋式",
        "subtitle": "濾袋式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "1/2”~3”牙口, 法蘭, 衛生級接頭",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、PCW過濾、循環過濾、飲料業、化學品製程、回收水過濾、電著塗裝過濾",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "PH": {
        "series": "PH",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 1,
        "title": "單袋式 - 高壓款",
        "subtitle": "濾袋式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "1/2”~3”牙口, 法蘭, 衛生級接頭",
            "排放口": "3/4”PT-M",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "15kg/cm<sup>2</sup> (225psi)",
            "操作壓力": "10kg/cm<sup>2</sup> (150psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "PHT": {
        "series": "PHT",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "title": "上入式",
        "subtitle": "濾袋式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "2”~2.5”牙口, 法蘭, 衛生級接頭",
            "排放口": "1/4”PT-F",
            "排氣口": "1/4”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "15kg/cm<sup>2</sup> (225psi)",
            "操作壓力": "10kg/cm<sup>2</sup> (150psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "石化製程、化學品製程、高溫、高壓、高黏度過濾",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },
    "PM": {
        "series": "PM",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "title": "大流量多袋式",
        "subtitle": "濾袋式過濾器",
        "specification": {
            "本體材質": "SUS304, SUS316, SUS316L",
            "進出口": "2”~15”法蘭",
            "排放口": "2”PT-M",
            "排氣口": "1/2”PT-F",
            "Oring材質(標準)": "EPDM",
            "Oring材質(選購)": "Viton, Teflon 包Viton",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理(標準)": "外部電解, 內部酸洗",
            "表面處理(選購)": "X-Ray, EP電解"
        },
        "range": "RO前置過濾、PCW過濾、循環過濾、飲料業、化學品製程、回收水過濾、電著塗裝過濾",
        "modelImgs": 1,
        'componentImgs': 1,
        "sizeImgs": 2
    },

    // ========== 濾材 ========== //
    "陽極袋": {
        "series": null,
        "housing": "濾材",
        "category": "陽極袋",
        "images": 0,
        "title": "陽極袋/濾心袋",
        "subtitle": ""
    },
    "砂光紙": {
        "series": null,
        "housing": "濾材",
        "category": "砂光紙",
        "images": 0,
        "title": "砂光紙",
        "subtitle": ""
    }
}
var LATEST_PRODUCTS = ["AH", "陽極袋"];

var getItemId = function(item){
    return item.series ? item.series : item.category;
}

var getItemIdStr = function(item){
    return item.series ? item.series + ' Series' : item.category;
}

var getImgPath = function(item, type){
    if (type == 'main'){
        return 'img/products/{0}/{1}/{2}{3}'
            .format(item.housing, item.category,
                item.series ? item.series + "/" : "",
                item.series ? item.series : item.category);
    } else if (type == 'detail'){
        return 'img/products/{0}/{1}/{2}'
            .format(item.housing, item.category,
                item.series ? item.series + "/" : "");
    } else {
        return 'img/products/{0}/{1}/{2}{3}'
            .format(item.housing, item.category,
                item.series ? item.series + "/" : "",
                type ? type : '');
    }
}