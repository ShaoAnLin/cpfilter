define('constant', function(){
    var constant = {};

    constant.HOUSING = ["過濾器", "濾材", "機械設備"];

    constant.CATEGORIES = {
        "過濾器": ["不鏽鋼濾心機", "不鏽鋼袋濾機", "過濾器配件"],
        "濾材": ["不鏽鋼濾心"],
        "機械設備": ["自動逆洗設備", "磁選機"]
    }

    constant.SERIES = {
        "過濾器": {
            "不鏽鋼濾心機": ["ALS", "ALA", "AHS", "AF", "AL", "AH", "AM"],
            "不鏽鋼袋濾機": ["PL", "PH", "PHT", "PM"],
            "過濾器配件": [],
            "鈦過濾器": null
        },
        "濾材": {
            "不鏽鋼濾心": [],
            "陽極袋": null,
            "砂光紙": null
        },
        "機械設備": {
            "自動逆洗設備": null,
            "磁選機": null
        }
    }

    constant.ITEMS = {
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
        "鈦過濾器": {
            "series": null,
            "housing": "過濾器",
            "category": "鈦過濾器",
            "images": 1,
            "title": "鈦過濾桶",
            "subtitle": "標準濾心式",
            "specification": {
                "材質": "桶身全部為鈦金屬所製作---為高耐腐蝕過濾器。",
                "耐壓": "7kg/cm<sup>2</sup>---適用於各種化學液體過濾。",
                "濾心": "採單支固定式濾心桿---無濾心鬆脫問題，確保過濾效果。",
                "腳座": "可調式或固定式---可配合現場安裝調整高度。",
                "O-Ring": "Viton or EPDM---可配合藥液選定材質。",
                "出入口": "法蘭式或管牙式---可配合安裝需求來選定。"
            }
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
        },

        // ========== 機械設備 ========== //
        "自動逆洗設備": {
            "series": null,
            "housing": "機械設備",
            "category": "自動逆洗設備",
            "images": 0,
            "title": "自動清洗刮刀式過濾器",
            "subtitle": "SCF",
            "specification": {
                "本體材質": "碳鋼、不鏽鋼304、316L、雙相不鏽鋼",
                "濾網材質": "AISI 316L, 321, Monel 400",
                "最大工作壓力": "20 Barg",
                "最大工作溫度": "200<sub>o</sub>C",
                "過濾精度": "50 ~ 6000 micron",
                "電源": "220/380/440 VAC, 50/60 HZ, 三相",
                "控制電壓": "24 VAC, 12/24 VDC",
                "防水等級": "NEMA 1, 12 or 4",
                "防爆等級": "NEMA CL. 1, Div. 2 Gr. B, C, D"
            },
            "range": "工業廢水、化學液體、乳液、乳膠、油漆、海水、各種黏度的液體等",
            "feature": [
                "連續過濾不中斷製程。",
                "三階段清洗：渦流清洗、刮板清洗、自動反沖洗。",
                "楔型網不易阻塞、容易逆洗、微粒容易通過的精度比實際上更細。",
                "適合各種流體及高黏度液體達100000cps。",
                "適用於含固粒雜質1000p.p.m以下之液體。",
                "密閉過濾，防止危險液體外洩，操作安全，最高工作壓力20kg/cm²，最高溫度240°C。",
                "控制箱：採觸控式面板PLC控制，可線上修改設定參數。",
                "無一次性拋棄過濾耗材，節約耗材成本及環保問題。"
            ]
        },
        "磁選機": {
            "series": null,
            "housing": "機械設備",
            "category": "磁選機",
            "images": 2,
            "title": "全自動濕式磁選機",
            "subtitle": "",
            "range": "濕式磁選機用來處理食品、化工、醫藥、汽車、回收、機械加工及光電產業、半導體產業與廢水汙泥裡含鐵雜質處理。",
            "feature": [
                "濕式磁選機採永久磁鐵設計，可連續作業，自動分離鐵類與非鐵類。",
                "全自動濕式磁選機可以免去耗費人力清除鐵屑，可以自行設定分選出來的鐵屑及物料的排除時間。",
                "針對光電產業、半導體產業、各類溼式原料含鐵雜質，可擷取至3%以下的含鐵量。"
            ]
        }
    }

    constant.LATEST_PRODUCTS = ["AH", "陽極袋"];

    constant.getItemId = function(item){
        return item.series ? item.series : item.category;
    }

    constant.getItemIdStr = function(item){
        return item.series ? item.series + ' Series' : item.category;
    }

    constant.getImgPath = function(item, type){
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

    return constant;
})