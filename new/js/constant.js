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
        "不鏽鋼濾心機": ["AH", "ALA"],
        "不鏽鋼袋濾機": ["PL"],
        "純PP濾殼": [],
        "過濾器配件": []
    },
    "濾材": {
        "不鏽鋼濾心": [],
        "PP囊式濾心": [],
        "活性碳濾心": [],
        "陽極帶": null,
        "壓濾機濾布": []
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
    "AH": {
        "series": "AH",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "title": "3~7支裝",
        "sub-title": "濾心式過濾器 - 高壓款"
    },
    "ALA": {
        "series": "ALA",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "title": "單支裝",
        "sub-title": "濾心式過濾器 - A款"
    },

    // 不鏽鋼袋濾機
    "PL": {
        "series": "PL",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "title": "單袋式",
        "sub-title": "濾袋式過濾器"
    },

    // ========== 濾材 ========== //
    "陽極袋": {
        "series": "陽極袋",
        "housing": "濾材",
        "category": null,
        "images": 0,
        "title": "陽極袋/濾心袋",
        "sub-title": ""
    }
}