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
        "不鏽鋼濾心機": ["AF", "AH", "AHS", "AL", "ALA", "ALS", "AM"],
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
            "進出口": "3/4” PT, 1”PT-F/NPT-F",
            "排放口": "1/4” PT-F",
            "排氣口": "1/4” PT-F",
            "Oring材質": "EPDM (標準)",
            "Oring材質": "Viton, Teflon 包Viton (選購)",
            "設計壓力": "10kg/cm<sup>2</sup> (150psi)",
            "操作壓力": "7kg/cm<sup>2</sup> (100psi)",
            "表面處理": "外部拋光, 內部酸洗 (標準)",
            "表面處理": "X-Ray, EP電解 (選購)"
        }
    },
    "ALA": {
        "series": "ALA",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式過濾器 - A款"
    },
    "AHS": {
        "series": "AHS",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式過濾器 - 高壓款"
    },
    "AF": {
        "series": "AF",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "單支裝",
        "subtitle": "濾心式水塔過濾器"
    },
    "AL": {
        "series": "AL",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "3~7支裝",
        "subtitle": "濾心式過濾器"
    },
    "AH": {
        "series": "AH",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 1,
        "title": "3~7支裝",
        "subtitle": "濾心式過濾器 - 高壓款"
    },
    "AM": {
        "series": "AM",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "title": "大流量多支裝",
        "subtitle": "濾心式過濾器"
    },

    // 不鏽鋼袋濾機
    "PL": {
        "series": "PL",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 1,
        "title": "單袋式",
        "subtitle": "濾袋式過濾器"
    },
    "PH": {
        "series": "PH",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 1,
        "title": "單袋式 - 高壓款",
        "subtitle": "濾袋式過濾器"
    },
    "PHT": {
        "series": "PHT",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "title": "上入式",
        "subtitle": "濾袋式過濾器"
    },
    "PM": {
        "series": "PM",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "title": "大流量多袋式",
        "subtitle": "濾袋式過濾器"
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