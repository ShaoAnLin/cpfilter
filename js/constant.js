define('constant', function(){
    var constant = {};

    constant.HOUSING = ["過濾器", "濾材", "機械設備", "磁力設備", "空調濾網"];

    constant.CATEGORIES = {
        "過濾器": ["不鏽鋼濾心機", "不鏽鋼袋濾機", "純PP濾殼、塑膠濾殼", "過濾器配件", "鈦過濾器"],
        "濾材": ["濾心", "濾袋", "陽極袋", "壓濾機濾布", "砂紙"],
        "機械設備": [],
        "磁力設備": [],
        "空調濾網": []
    }

    constant.SUBGROUPS = {
        "過濾器": {
            "不鏽鋼濾心機": [],
            "不鏽鋼袋濾機": [],
            "純PP濾殼、塑膠濾殼": [],
            "過濾器配件": [],
            "鈦過濾器": []
        },
        "濾材": {
            "濾心": ["摺疊式濾心", "囊式濾心", "熔噴式濾心", "纏繞式濾心", "活性碳濾心",
                    "不鏽鋼濾心", "空壓機濾心"],
            "濾袋": [],
            "陽極袋": [],
            "壓濾機濾布": [],
            "砂紙": [],
        },
        "機械設備": {
            "自動逆洗設備": []
        },
        "磁力設備": {
            "磁選機": [],
            "磁力棒": [],
            "磁力板": []
        },
        "空調濾網": {
            "紙框": [],
            "中高效袋式": [],
            "中效濾網": [],
            "高效率Hepa": [],
            "不織布濾棉": []
        }
    }

    constant.SERIES = {
        "過濾器": {
            "不鏽鋼濾心機": ["ALS", "ALA", "AHS", "AF", "AL", "AH", "AM", "SGS", "ALF",
                "AHP", "ALSH", "SL", "SLS"],
            "不鏽鋼袋濾機": ["PL", "PH", "PHT", "PM", "PHP"],
            "純PP濾殼、塑膠濾殼": ["塑膠濾殼", "純PP濾殼-222型", "純PP濾殼-226型"],
            "過濾器配件": ["沖孔籃", "壓袋器", "撐開架", "金屬浮球"],
            "鈦過濾器": ["鈦過濾器"]
        },
        "濾材": {
            "濾心": {
                "摺疊式濾心": ["PP微孔摺疊式濾心",
                    "PES微孔摺疊式濾心",
                    "PTFE疏水性摺疊式濾心",
                    "PTFE親水性摺疊式濾心",
                    "PVDF微孔摺疊式濾心",
                    "尼龍微孔摺疊式濾心",
                    "特大流量摺疊式濾心",
                    "高流速摺疊式濾心",
                    "粗胖型摺疊式濾心"],
                "囊式濾心": ["囊式濾心"],
                "熔噴式濾心": ["PP熔噴式濾心", "PP工業型熔噴式濾心", "PP絕對型熔噴式濾心"],
                "纏繞式濾心": ["纏繞式濾心"],
                "活性碳濾心": ["活性碳棒濾心", "活性碳布濾心", "活性碳纖維濾心"],
                "不鏽鋼濾心": ["金屬摺疊濾心", "粉末燒結濾心", "平面燒結濾心"],
                "空壓機濾心": ["空壓機濾心"]
            },
            "濾袋": ["不織布過濾袋", "網布過濾袋", "絕對經度過濾袋", "吸油過濾袋", "PTFE過濾袋",
                "不鏽鋼過濾袋", "除塵過濾袋"],
            "陽極袋": ["陽極袋"],
            "壓濾機濾布": ["壓濾機濾布"],
            "砂紙": ["砂紙"]
        },
        "機械設備": {
            "自動逆洗設備": null
        },
        "磁力設備": {
            "磁選機": null,
            "磁力棒": null,
            "磁力板": null
        },
        "空調濾網": {
            "紙框": null,
            "中高效袋式": null,
            "中效濾網": null,
            "高效率Hepa": null,
            "不織布濾棉": null
        }
    }
    /*
        Product details:
            housing, category, subgroup, series
            title, subtitle
            images: # of images in addition to the main images (0 <= x <= 4)
            hideSeries: show series name or not

        Shown on the right side of product images
            range: 適用範圍 (could be a string or an array of strings)
            specUpper: show spec here or not

        Shown under the product images
            spec: 規格, key-value pair
            feature: 特色, string array
            modelImgs: 型號選購
            componentImgs: 各部零件
            sizeImgs: 尺寸規格(mm)
            specImgs: 規格
            conditionImgs: 操作條件
            dataImgs: 數據圖表
    */
    constant.ITEMS = {
        // ========== 過濾器 ========== //
        // 不鏽鋼濾心機
        "ALS": {
            "series": "ALS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 3,
            "title": "單支裝",
            "subtitle": "濾心式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316",
                "進出口": "3/4”PT, 1”PT-F/NPT-F",
                "排放口": "1/4”PT-F",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部拋光, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "機台循環、PCW過濾、化學品製程",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "ALA": {
            "series": "ALA",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "單支裝",
            "subtitle": "濾心式過濾器 - A款",
            "spec": {
                "本體材質": "SUS304, SUS316",
                "進出口": "3/4”PT, 1”PT-F/NPT-F",
                "排放口": "1/4”PT-F",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "機台循環、PCW過濾、化學品製程",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AHS": {
            "series": "AHS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "單支裝",
            "subtitle": "濾心式過濾器 - 高壓款",
            "spec": {
                "本體材質": "SUS304, SUS316",
                "進出口": "1/2”~1.5”牙口, 法蘭",
                "排放口": "1/2”PT-M",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "15kg/cm² (225psi)",
                "操作壓力": "10kg/cm² (150psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "機台循環、PCW過濾、化學品製程",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AF": {
            "series": "AF",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "單支裝",
            "subtitle": "濾心式水塔過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316",
                "進出口": "3/4”~1”PT-M",
                "排放口": "3/4”PT-M",
                "排氣口": "3/4”~1”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "水塔過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AL": {
            "series": "AL",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "3~7支裝",
            "subtitle": "濾心式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "1”~4”牙口, 法蘭, 衛生級接頭",
                "排放口": "3/4”PT-M",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、化學品製程、PCW過濾、飲料業、循環過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AH": {
            "series": "AH",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "3~7支裝",
            "subtitle": "濾心式過濾器 - 高壓款",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "1”~4”牙口, 法蘭, 衛生級接頭",
                "排放口": "3/4”PT-M",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "15kg/cm² (225psi)",
                "操作壓力": "10kg/cm² (150psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AM": {
            "series": "AM",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 3,
            "title": "大流量多支裝",
            "subtitle": "濾心式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "2”~14”法蘭, 衛生級接頭",
                "排放口": "1”PT-F",
                "排氣口": "2”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "SGS": {
            "series": "SGS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 2,
            "title": "濾心式過濾器",
            "subtitle": "",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "1”~2”Clamp",
                "排放口": "1/4”PT-F",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "拋光研磨",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "製藥業、飲料業、化學品製程、CDA/N2、空氣過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "AHP": {
            "series": "AHP",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 0,
            "title": "濾心式過濾器",
            "subtitle": ""
        },
        "ALF": {
            "series": "ALF",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 3,
            "title": "濾心式過濾器",
            "subtitle": "",
            "spec": {
                "本體材質": "SUS304, SUS316",
                "進出口": "1”PTF",
                "排放口": "1/4”PTF",
                "排氣口": "1/4”PTF",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(集水頭)": "外部電解/內部酸洗",
                "表面處理(桶身)": "外部拋光/內部酸洗"
            }
        },
        "ALSH": {
            "series": "ALSH",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "濾心式過濾器",
            "subtitle": ""
        },
        "SL": {
            "series": "SL",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "衛生級濾心式過濾器",
            "subtitle": "",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "2”Clamp 衛生級夾接頭",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Silicone, Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "內外拋光 400mesh",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "SLS": {
            "series": "SLS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 4,
            "title": "衛生級單支裝",
            "subtitle": "濾心式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316,SUS316L",
                "進出口": "1”Clamp衛生級夾接頭",
                "排放口": "1/4”PT-F",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Silicone ,Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "內外拋光 400mesh",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "製造業、化學品製程、飲料業、超純水過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },

        // 不鏽鋼袋濾機
        "PL": {
            "series": "PL",
            "housing": "過濾器",
            "category": "不鏽鋼袋濾機",
            "images": 1,
            "title": "單袋式",
            "subtitle": "濾袋式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "1/2”~3”牙口, 法蘭, 衛生級接頭",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、PCW過濾、循環過濾、飲料業、化學品製程、回收水過濾、電著塗裝過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "PH": {
            "series": "PH",
            "housing": "過濾器",
            "category": "不鏽鋼袋濾機",
            "images": 1,
            "title": "單袋式 - 高壓款",
            "subtitle": "濾袋式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "1/2”~3”牙口, 法蘭, 衛生級接頭",
                "排放口": "3/4”PT-M",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "15kg/cm² (225psi)",
                "操作壓力": "10kg/cm² (150psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、PCW過濾、循環過濾、化學品製程、回收水過濾、飲料業",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "PHT": {
            "series": "PHT",
            "housing": "過濾器",
            "category": "不鏽鋼袋濾機",
            "images": 3,
            "title": "上入式",
            "subtitle": "濾袋式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "2”~2.5”牙口, 法蘭, 衛生級接頭",
                "排放口": "1/4”PT-F",
                "排氣口": "1/4”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "15kg/cm² (225psi)",
                "操作壓力": "10kg/cm² (150psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "石化製程、化學品製程、高溫、高壓、高黏度過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "PM": {
            "series": "PM",
            "housing": "過濾器",
            "category": "不鏽鋼袋濾機",
            "images": 3,
            "title": "大流量多袋式",
            "subtitle": "濾袋式過濾器",
            "spec": {
                "本體材質": "SUS304, SUS316, SUS316L",
                "進出口": "2”~15”法蘭",
                "排放口": "2”PT-M",
                "排氣口": "1/2”PT-F",
                "Oring材質(標準)": "EPDM",
                "Oring材質(選購)": "Viton, Teflon包Viton",
                "設計壓力": "10kg/cm² (150psi)",
                "操作壓力": "7kg/cm² (100psi)",
                "表面處理(標準)": "外部電解, 內部酸洗",
                "表面處理(選購)": "X-Ray, EP電解"
            },
            "range": "RO前置過濾、PCW過濾、循環過濾、飲料業、化學品製程、回收水過濾、電著塗裝過濾",
            "modelImgs": 1,
            'componentImgs': 1,
            "sizeImgs": 1
        },
        "PHP": {
            "series": "PHP",
            "housing": "過濾器",
            "category": "不鏽鋼袋濾機",
            "images": 0,
            "title": "濾袋式過濾器",
            "subtitle": ""
        },

        "塑膠濾殼": {
            "series": "塑膠濾殼",
            "housing": "過濾器",
            "category": "純PP濾殼、塑膠濾殼",
            "images": 0,
            "title": "塑膠濾殼",
            "subtitle": "標準型/大流量",
            "hideSeries": true,
            "range": "RO前置過濾、PCW過濾、機台循環過濾",
            "specImgs": 1
        },
        "純PP濾殼-222型": {
            "series": "純PP濾殼-222型",
            "housing": "過濾器",
            "category": "純PP濾殼、塑膠濾殼",
            "images": 0,
            "title": "222型",
            "subtitle": "純PP濾殼",
            "hideSeries": true,
            "spec": {
                "規格": "10”、20”",
                "材質": "底座/桶身-純PP",
                "固定鋼架": "不鏽鋼",
                "密封圈": "EPDM",
                "進出口": "3/4”NPT、1”NPT",
                "最高工作壓力": "0.6 Mpa at 20°C",
                "最高操作溫度": "60°C"
            },
            "specUpper": true
        },
        "純PP濾殼-226型": {
            "series": "純PP濾殼-226型",
            "housing": "過濾器",
            "category": "純PP濾殼、塑膠濾殼",
            "images": 0,
            "title": "226型",
            "subtitle": "純PP濾殼",
            "hideSeries": true,
            "spec": {
                "規格": "10”、20”",
                "材質": "底座/桶身-純PP",
                "密封圈": "EPDM、Silicone、Viton",
                "進出口": "DN40、JIS40A",
                "最高工作壓力": "0.6 Mpa at 20°C",
                "最高操作溫度": "60°C"
            },
            "specUpper": true
        },

        // 過濾器配件
        "沖孔籃": {
            "series": "沖孔籃",
            "housing": "過濾器",
            "category": "過濾器配件",
            "images":   1,
            "title": "沖孔籃",
            "subtitle": "Bag Basket",
            "hideSeries": true,
            "spec": {
                "材質": "SUS304, SUS316, SUS316L",
                "尺寸": "B#1-ø171.5mm*350mmL、B#2-ø171.5mm*730mmL、B#3-ø97.5mm*200mmL、B#4-ø97.5mm*310mmL"
            },
            "range": "適用機型：PL / PH / PHT / PM"
        },
        "壓袋器": {
            "series": "壓袋器",
            "housing": "過濾器",
            "category": "過濾器配件",
            "images": 0,
            "title": "壓袋器",
            "subtitle": "Bag Pressing",
            "hideSeries": true,
            "spec": {
                "材質": "SUS304, SUS316, SUS316L",
                "尺寸": "B#1、B#2- ø179mm、B#3、B#4- ø120mm"
            },
            "range": "適用機型：PL / PH",
        },
        "撐開架": {
            "series": "撐開架",
            "housing": "過濾器",
            "category": "過濾器配件",
            "images": 0,
            "title": "撐開架",
            "subtitle": "Bag Bracket",
            "hideSeries": true,
            "spec": {
                "材質": "SUS304, SUS316, SUS316L",
                "尺寸": "B#1-ø153mm*ø135mm*340mmL、B#2-ø153mm*ø135mm*720mmL"
            },
            "range": "適用機型：PL / PH / PHT / PM",
        },
        "金屬浮球": {
            "series": "金屬浮球",
            "housing": "過濾器",
            "category": "過濾器配件",
            "images": 0,
            "title": "金屬浮球",
            "subtitle": "Float ball",
            "hideSeries": true
        },

        "鈦過濾器": {
            "series": "鈦過濾器",
            "housing": "過濾器",
            "category": "鈦過濾器",
            "images": 0,
            "title": "標準濾心型",
            "subtitle": "鈦過濾器",
            "hideSeries": true,
            "range": "化學品製程、高抗腐蝕性製程、電鍍製程",
            "spec": {
                "材質": "桶身全部為鈦金屬所製作---為高耐腐蝕過濾器。",
                "耐壓": "7kg/cm²---適用於各種化學液體過濾。",
                "濾心": "採單支固定式濾心桿---無濾心鬆脫問題，確保過濾效果。",
                "腳座": "可調式或固定式---可配合現場安裝調整高度。",
                "O-Ring": "Viton or EPDM---可配合藥液選定材質。",
                "出入口": "法蘭式或管牙式---可配合安裝需求來選定。"
            }
        },

        // ========== 濾材 ========== //
        // 濾心
        "囊式濾心": {
            "series": "囊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "囊式濾心",
            "images": 0,
            "title": "囊式濾心",
            "subtitle": "濾心",
            "hideSeries": true,
            "specImgs": 1
        },
        // 濾心 - 摺疊式
        "PP微孔摺疊式濾心": {
            "series": "PP微孔摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "PP微孔摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "酸鹼液、溶劑等澄清過濾、光刻膠、光阻劑、顯影液等終端過濾、墨水、塗料、油墨、膠黏劑等終端過濾",
            "feature": [
                "超細纖維膜及內外支撐層摺疊而成，外殼中心桿及端蓋採用熱熔焊接技術加工成型",
                "不含任何膠合劑，無洩漏，無二次污染",
                "濾心採用摺疊式，膜過濾面積大，容雜量大，壓差低，使用壽命長，具有廣泛的化學相容性"
            ],
            "specImgs": 2,
            "dataImgs": 1,
            "modelImgs": 1
        },
        "PES微孔摺疊式濾心": {
            "series": "PES微孔摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "PES微孔摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "超純水製備終端過濾、高純化學品如酮、脂、醇等終端過濾",
            "specImgs": 1,
            "dataImgs": 1
        },
        "PTFE疏水性摺疊式濾心": {
            "series": "PTFE疏水性摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "PTFE疏水性摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "極性溶劑過濾、高純氣體過濾、腐蝕性液體、強氧化性液體過濾",
            "specImgs": 1,
            "dataTmgs": 1
        },
        "PTFE親水性摺疊式濾心": {
            "series": "PTFE親水性摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "PTFE親水性摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "高溫液體過濾、強腐蝕性液體過濾、無菌原料藥等除菌過濾",
            "specImgs": 1,
            "dataTmgs": 1
        },
        "PVDF微孔摺疊式濾心": {
            "series": "PVDF微孔摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "PVDF微孔摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "強溶劑過濾、高粘度液體過濾、強氧化性液體過濾、溫度較高液體過濾",
            "specImgs": 1,
            "dataTmgs": 1
        },
        "尼龍微孔摺疊式濾心": {
            "series": "尼龍微孔摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "尼龍微孔摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "feature": [
                "超細纖維膜及內外支撐層摺疊而成",
                "外殼中心桿及端蓋採用熱熔焊接技術加工成型",
                "不含任何膠合劑，無洩漏，無二次污染",
                "濾心採用摺疊式，膜過濾面積大，容雜量大，壓差低，使用壽命長",
                "具有廣泛的化學相容性"
            ],
            "range": [
                "酸鹼液、溶劑等澄清過濾",
                "光刻膠、光阻劑、顯影液等終端過濾",
                "墨水、塗料、油墨、膠黏劑等終端過濾"
            ],
            "specImgs": 1,
            "dataImgs": 1
        },
        "特大流量摺疊式濾心": {
            "series": "特大流量摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "特大流量摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "feature": [
                "濾心一端開口，流體流動方式由內到外",
                "濾心的大直徑設計增加了有效過濾面積，可以大大減少濾心數量和減少外殼尺寸",
                "在許多應用中，由於流量大、過濾壽命長，可以降低設備投資和人力成本"
            ],
            "range": "化學品過濾、電廠冷凝水過濾、油漆、塗料過濾、RO保安過濾、海水淡化預處理",
            "specImgs": 1
        },
        "高流速摺疊式濾心": {
            "series": "高流速摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "高流速摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "range": "PCW過濾、RO前置過濾、化學品製程、飲料業",
            "specImgs": 1
        },
        "粗胖型摺疊式濾心": {
            "series": "粗胖型摺疊式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "摺疊式濾心",
            "images": 0,
            "title": "粗胖型摺疊式濾心",
            "subtitle": "摺疊式濾心",
            "hideSeries": true,
            "specImgs": 1
        },
        // 濾心 - 熔噴式
        "PP熔噴式濾心": {
            "series": "PP熔噴式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "熔噴式濾心",
            "images": 0,
            "title": "PP熔噴式濾心",
            "subtitle": "熔噴式濾心",
            "hideSeries": true,
            "range": [
                "電子產品的鍍液、蝕刻液、藥液、淨水的過濾",
                "各類精密過濾的預過濾",
                "化學工業領域的藥劑、溶劑的過濾和水處理",
                "釀造業、飲料業製造過程中的過濾",
                "RO、UF前的預先過濾、工業用的各種水處理"
            ],
            "feature": [
                "採用聚丙烯為原料",
                "經過加熱熔融噴絲牽引形成一定孔徑梯度的深層過濾濾心，整體一次性生產而成",
                "外疏內密結構，可將大小不同的污染物均勻攔截在濾心內外層",
                "常用於液體的預過濾",
                "耐酸鹼",
                "納污能力強",
                "流量大",
                "化學相容性好",
                "多層過濾",
                "無任何黏合劑"
            ],
            "specImgs": 1,
            "dataTmgs": 1
        },
        "PP工業型熔噴式濾心": {
            "series": "PP工業型熔噴式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "熔噴式濾心",
            "images": 0,
            "title": "PP工業型熔噴式濾心",
            "subtitle": "熔噴式濾心",
            "hideSeries": true,
            "range": "PCB、電鍍業、RO前置過濾、回收水過濾、化學品製程、石化製程、飲料業",
            "feature": [
                "濾心採用三層式結構設計，將PP原料熔融後，以高溫高壓直接噴絲成型",
                "由於濾心為外疏內密結構，可將大小不同的污染物均勻攔截在濾心內外層",
                "有極優良的深度過濾效果及污染物累積量，能夠維持穩定的流量、壓差及使用壽命",
                "纖維結構穩定，可確保過濾品質，適用於精密工業製程",
                "由PP超細纖維製成，濾效可達90%，過濾效果顯著",
                "三層式濾心結構，容雜量高，使用壽命長",
                "中心及表面經特殊處理不掉纖維，與其他廠牌相比壽命增加30%",
                "100%純PP製作，有極優良的化學相容性，不會萃取出其他物質"
            ],
            "specImgs": 1
        },
        "PP絕對型熔噴式濾心": {
            "series": "PP絕對型熔噴式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "熔噴式濾心",
            "images": 0,
            "title": "PP絕對型熔噴式濾心",
            "subtitle": "熔噴式濾心",
            "hideSeries": true,
            "range": "塗料油漆行業、陶瓷電容行業、光學薄膜行業、壓克力行業、紡織行業、線路板覆銅板行業、化學藥劑與膠水過濾",
            "feature": [
                "濾心細纖維從外到內緊密交織固定，不因外在泵浦壓力過大或濾心壓差過高導致污染物釋出",
                "濾效可達99%",
                "因過濾效果極為顯著，適用於製程要求嚴格之產業",
                "日本最新纖維技術，濾效高達99%，確保過濾品質",
                "漸進式絕對孔徑結構，提高濾心容雜量，使用壽命長，長期保持濾效穩定",
                "採用聚烯烴(PP&PE)材質，抗強酸強鹼、硬度強、耐高壓、最大壓差可達到0.55Mpa"
            ],
            "specImgs": 1,
            "dataImgs": 1
        },
        "纏繞式濾心": {
            "series": "纏繞式濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "纏繞式濾心",
            "images": 0,
            "title": "纏繞式濾心",
            "subtitle": "濾心",
            "hideSeries": true,
            "feature": [
                "採用紡織纖維紗按特定工藝緊密纏繞在多孔骨架上，控制濾層纏繞密度及濾孔形狀而製成不同過濾精度的濾心",
                "外疏內密的蜂窩結構，具有良好的深層過濾效果，能有效的除去液體中的懸浮物、鐵銹、顆粒等雜質",
                "濾心可用多種材料製成以適應各種液體過濾的需求",
                "耐酸鹼、容雜量大",
                "流量大、化學相容性好",
                "深層過濾、無任何黏合劑"
            ],
            "range": [
                "工業用水、自來水、食品飲料用水等前置過濾",
                "顯影液、蝕刻液、電鍍液、有機溶劑等預處理",
                "冷卻迴圈水、鍋爐供水、超純水過濾",
                "酸鹼液、樹脂、膠黏劑、塗料、石墨、墨水、照相沖洗液等預過濾"
            ],
            "specImgs": 1
        },
        // 濾心 - 活性碳
        "活性碳棒濾心": {
            "series": "活性碳棒濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "活性碳濾心",
            "images": 0,
            "title": "碳棒式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "feature": [
                "主要用於表面處裡，電鍍製程，PCB藥液過濾",
                "高品質的碳布增強吸收效率和濾心的去汙能力",
                "具有濾除渣質以及吸附氯、臭氣、異味異色的雙重效果",
                "高強度的PP聚丙烯軸增強濾心的結構強度"
            ],
            "specImgs": 1,
            "range": "PCB、電鍍業、RO前置過濾、化學品製程、一般用水過濾"
        },
        "活性碳布濾心": {
            "series": "活性碳布濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "活性碳濾心",
            "images": 0,
            "title": "碳布式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "feature": [
                "主要用於飲用水，純水設備，和內循環過濾使用",
                "經濟型活性碳濾心，碳含量高，壽命長",
                "採用高效活性碳經連續高強度擠壓成型增加濾心耐久性",
                "高孔隙度設計，防止過早堵塞",
                "有效去除液體中的餘氯、異味及有機物"
            ],
            "range": "PCB、電鍍業、RO前置過濾、化學品製程、飲料業、製酒業、一般用水過濾",
            "specImgs": 1
        },
        "活性碳纖維濾心": {
            "series": "活性碳纖維濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "活性碳濾心",
            "images": 0,
            "title": "碳纖式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "feature": [
                "Made in Japan",
                "專為電鍍工業和化學品工業設計製造的高濾效及高吸附力的雙效濾心產品",
                "具高效的活性碳吸附和過濾固態微粒的功能，不論高分子量或低分子量的有機物，其吸附力較一般濾心高5-10倍",
                "選擇性吸附不純物，保持光澤，加強鍍金，鍍銀質量安定",
                "具備極高的脫色能力"
            ],
            "specImgs": 1
        },
        // 濾心 - 不鏽鋼
        "平面燒結濾心": {
            "series": "平面燒結濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "不鏽鋼濾心",
            "images": 2,
            "title": "平面燒結濾心",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true
        },
        "金屬摺疊濾心": {
            "series": "金屬摺疊濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "不鏽鋼濾心",
            "images": 1,
            "title": "金屬摺疊濾心",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true,
            "feature": [
                "採用進口不銹鋼燒結製造，屬於多孔深度型過濾式材料",
                "孔徑呈梯形，由粗到細，具備絕對過濾和納污量高、開孔率高的特點，軟性雜質攔阻效果佳",
                "可以摺疊成形，增加過濾面積，增大壽命和流量",
                "最大耐受壓差：5bar，以上特規製作",
                "最大操作溫度：480°C"
            ]
        },
        "粉末燒結濾心": {
            "series": "粉末燒結濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "不鏽鋼濾心",
            "images": 0,
            "title": "粉末燒結濾心",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true,
            "feature": [
                "不銹鋼粉末通過模具壓制後高溫燒結而成，具有機械強度高，耐高溫、耐腐蝕性能好",
                "孔徑分佈均勻，濾效高",
                "最大耐受壓差：3bar，以上特規製作",
                "最大操作溫度：480°C"
            ],
            "specImgs": 1
        },
        "空壓機濾心": {
            "series": "空壓機濾心",
            "housing": "濾材",
            "category": "濾心",
            "subgroup": "空壓機濾心",
            "images": 0,
            "title": "空壓機濾心",
            "subtitle": "濾心",
            "hideSeries": true,
            "specImgs": 1
        },

        // 濾袋
        "不織布過濾袋": {
            "series": "不織布過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "不織布過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "表面經特殊燒毛處理，能有效防止纖維脫落汙染濾液",
                "蓬鬆、均勻的三層過濾層對固體及膠體顆粒有極高的捕捉能力",
                "高強度的長纖維使濾袋的過濾效率穩定，使用壽命更長。",
                "攔截率高", "納污能力強", "流量大", "耐壓高"
            ],
            "specImgs": 1,
            "conditionImgs": 1
        },
        "網布過濾袋": {
            "series": "網布過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "網布過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "容雜能力強、流量大、耐壓高、操作方便、攔截率高、適用範圍廣",
                "過濾袋可以反覆取出清洗，延長使用週期",
                "適用於一些雜質含量高的液體過濾"
            ],
            "specImgs": 1,
            "conditionImgs": 1
        },
        "絕對經度過濾袋": {
            "series": "絕對經度過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "絕對經度過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "對需求絕對精度過濾的應用，絕對濾袋是一個高性能表現的新選擇",
                "絕對的梯度深層過濾提供了極高的過濾效率(99.98%以上)，並且使用壽命長",
                "與其他過濾技術相比，絕對濾袋秉承了低操作成本且容易換袋的特性",
                "極高的過濾效率，高達99.998%",
                "100%焊接結構，杜絕液體從針孔洩漏",
                "獨特設計環口，對壓力有自動反應的密封邊緣，當壓力增大，領環的密封亦同時增進，保證絕無旁漏",
                "同時具備長效及絕對精度的特性，隨著流向一層比一層精密，以至於雜質被逐級去除而不會有任何一層被提早堵塞"
            ],
            "range": "食品、飲料、製藥、微電子、化工、油墨及水處理行業"
        },
        "吸油過濾袋": {
            "series": "吸油過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "吸油過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "高效的吸油能力，可快速吸附高於自身材料重量的各類油脂",
                "多層複合深層過濾結構",
                "雙層效用，吸油與攔截雜質",
                "廣泛的過濾材料化學相容性",
                "容渣量大，使用壽命長"
            ],
            "specImgs": 1
        },
        "PTFE過濾袋": {
            "series": "PTFE過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "PTFE過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "持續工作溫度250度以上，瞬間溫度280度",
                "完全不怕酸鹼和氧化，幾乎不可燃，唯一不會老化的纖維",
                "滿足最惡劣的環境，具有極長的使用壽命"
            ],
            "specImgs": 1
        },
        "不鏽鋼過濾袋": {
            "series": "不鏽鋼過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "不鏽鋼過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "採用不變形的不銹鋼紡絲SUS304或SUS316材質，按照指定的規格編織成網，經熱定型後成為單絲網",
                "強度高，不會因壓力的變化而產生變形",
                "單絲編織構成了光滑的表面，易清洗，可多次反覆使用。"
            ]
        },
        "除塵過濾袋": {
            "series": "除塵過濾袋",
            "housing": "濾材",
            "category": "濾袋",
            "images": 0,
            "title": "除塵過濾袋",
            "subtitle": "濾袋",
            "hideSeries": true,
            "feature": [
                "除塵濾袋是袋式除塵機運行過程中的心臟，通常圓筒型的脈衝式濾袋垂直地懸掛在除塵機中，含塵氣體由進風口進入除塵機，經過灰斗的導流板，使氣體中的部分大顆粒粉塵受慣性力的作用被分離出來，直接落入灰斗，含塵氣體進入箱體的濾袋過濾區，絕大多數粉塵被捕集在濾袋的外表面，而乾淨的氣體通過濾料進入濾袋內部，淨化後的氣體經過濾袋口進入上箱體後，再由出風口排出。濾袋內部的籠架用來支撐濾袋，防止濾袋塌陷，同時它有助於塵餅的清除和重新分佈。",
                "工業粉塵在濃度達到一定程度後(即爆炸極限)如遇靜電放電火花或外界點火等因素，則極易導致爆炸和火災。如：麵粉塵、化工性粉塵、煤粉塵等如遇靜電放電都有爆炸的可能。在袋式除塵領域，如這些粉塵需用濾袋來收集，則要求製作針刺氈防靜電除塵器的濾料具有防靜電性能。我司吸收國外技術，根據國內高爐煤氣、煤磨收塵和水泥廠煤磨收塵、及其他行業的需要開發並生產了永久防靜電針刺過濾氈。"
            ],
            "spec": {
                "1、壓克力除塵濾袋": "壓克力針刺氈，化學名均聚丙烯腈，用它為原料經針刺製成氈，經過特殊的抗水處理，從而得到壓克力中抗水解針刺過濾氈。透氣量14M3/M2·min@200Pa，瞬間操作溫度140℃，正常操作溫度120℃。針刺氈以壓克力機織布為基布增強縱橫強力。具有優良的耐化學性和抗水解性，廣泛應用於瀝青、乾燥器、煤磨、電廠燒結機等煙氣的收塵。",
                "2、PPS除塵濾袋": "PPS針刺氈是採用PPS纖維(聚苯硫醚)經三維針刺而成的一種過濾材料，可在160℃左右溫度長期使用。PPS纖維也稱聚苯硫醚纖維，由於其特殊的分子結構，而具有很好的化學穩定性和強度完整保持特性，在含硫較高的煙氣環境中效果尤為凸顯，適用於燃煤鍋爐、電力、垃圾焚燒等酸性較高的煙氣過濾環境。",
                "3、芳綸濾袋": "芳綸(俗名:芳香族聚醯胺纖維)，長期耐溫204℃，瞬間耐溫240℃，耐鹼性能很強，耐酸性能中等，是處理180~220℃高溫性氣體的良好材料。芳綸針刺濾料，廣泛應用於鋼鐵、水泥、電力、化工等行業，是一種理想的煙氣除塵過濾材料。",
                "4、P84耐高溫除塵濾袋": "P84針刺氈採用P84纖維三維針刺而成，P84纖維(聚亞醯胺纖維)具有很好的耐高溫性能，耐高溫達260℃，且P84纖維截面呈不規格葉狀，可以大大提高過濾效果。纖維本身還有一定的抗水解、抗氧化性。該產品耐溫性好、過濾效果好，廣泛地適用於混凝土攪拌、水泥、垃圾焚燒、燃煤鍋爐等複雜情況條件下使用。",
                "5、PTFE除塵濾袋": "PTFE針刺氈是採用PTFE(聚四氟乙烯纖維)經三維針刺而成的一種過濾材料。PTFE纖維為大分子線性結構，因而具有極強的耐溫、耐磨、耐腐、耐化學穩定性，廣泛適用於鋼鐵、電力、垃圾焚燒等各種惡劣的煙氣過濾環境。",
                "6、玻纖濾袋": "玻纖是一種結構合理、性能較好的耐高溫過濾材料。它不僅具有玻纖織布耐高溫、耐腐蝕、尺寸穩定、伸長收縮率極小、強度高的優點，而且氈層纖維承單纖維，三維微孔結構，孔隙率高，對氣體過濾阻力小，是一種較高速、高效的高溫過濾材料。與其它耐高溫化纖氈相比，具有價格低、運行阻力低、過濾精度高、耐溫更高等特殊優點。適用於鋼鐵、冶金、炭黑、發電、水泥、化工等行業高溫煙氣過濾。",
                "7、覆膜濾袋": "以上各種材質濾袋均可以提供相應的覆膜濾袋。PTFE微孔膜可以有效濾除2.5um粒徑的粉塵，是解決PM2.5的首選方案，也是保證各種情況排放濃度在10mg/Nm3之下的重要途徑。我司與世界知名PTFE微孔膜廠家合作，選用高透低阻三微孔膜研發生產了各種材質的覆膜濾袋，可滿足客戶的超淨排放。",
                "8、防靜電除塵濾袋": "防靜電除塵濾袋用濾布均採用防靜電滌綸針刺氈製作，具有極好的防靜電性能，用於麵粉塵、化工性粉塵、煤粉塵等如遇靜電放電有爆炸可能的行業，是目前防爆收塵的最理想選擇。"
            }
        },

        "陽極袋": {
            "series": "陽極袋",
            "housing": "濾材",
            "category": "陽極袋",
            "images": 0,
            "title": "陽極袋/濾心袋",
            "subtitle": "",
            "hideSeries": true,
            "spec": {
                "材質": "PP, PET 織布",
                "陽極袋規格": "配合鈦籃尺寸、規格，客製化製作",
                "濾心袋規格": "10”-40”",
                "精度": "依電鍍性質選用適合材質之布料"
            },
            "range": "電鍍製程(鍍銅, 錫, 鎳, 金, 銀, 鉻)"
        },
        "壓濾機濾布": {
            "series": "壓濾機濾布",
            "housing": "濾材",
            "category": "壓濾機濾布",
            "images": 0,
            "title": "壓濾機濾布",
            "subtitle": "",
            "hideSeries": true,
            "feature": [
                "板框式壓濾機用高壓力使用物料經過濾布進行壓榨，節省乾燥時間和成本。可依照不同需求，提共不同透氣度與不同織法之布款。"
            ],
            "spec": {
                "材質": "PP(Polyproylene)、PE、NYLON、PPS、棉",
                "纖維": "單絲、複絲、短襪 織法:平織、斜織、緞紋、亂紋織",
                "尺寸": "皆依客戶需求製作",
                "表面處裡": "壓光、絲光"
            }
        },
        "砂紙": {
            "series": "砂紙",
            "housing": "濾材",
            "category": "砂紙",
            "images": 0,
            "title": "砂紙",
            "subtitle": "",
            "hideSeries": true,
            "range": "軟基材型，最適合容易堵塞的塗漆面乾式研磨",
            "feature": [
                "底紙以乳膠處理後製成，研磨效果好",
                "柔軟性佳，手工研磨彎曲面最為合適",
                "研磨完成面效果較為細緻滑溜",
                "上砂時嚴選砂粒粒度，研磨時比較一般耐久使用"
            ]
        },

        // ========== 機械設備 ========== //
        "自動逆洗設備": {
            "series": null,
            "housing": "機械設備",
            "category": "自動逆洗設備",
            "images": 0,
            "title": "自動清洗刮刀式過濾器",
            "subtitle": "SCF",
            "spec": {
                "本體材質": "碳鋼、不鏽鋼304、316L、雙相不鏽鋼",
                "濾網材質": "AISI 316L, 321, Monel 400",
                "最大工作壓力": "20 Barg",
                "最大工作溫度": "200°C",
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

        // ========== 磁力設備 ========== //
        "磁選機": {
            "series": null,
            "housing": "磁力設備",
            "category": "磁選機",
            "images": 1,
            "title": "全自動濕式磁選機",
            "subtitle": "",
            "range": "濕式磁選機用來處理食品、化工、醫藥、汽車、回收、機械加工及光電產業、半導體產業與廢水汙泥裡含鐵雜質處理",
            "feature": [
                "濕式磁選機採永久磁鐵設計，可連續作業，自動分離鐵類與非鐵類。",
                "全自動濕式磁選機可以免去耗費人力清除鐵屑，可以自行設定分選出來的鐵屑及物料的排除時間。",
                "針對光電產業、半導體產業、各類溼式原料含鐵雜質，可擷取至3%以下的含鐵量。"
            ]
        },
        "磁力棒": {
            "series": null,
            "housing": "磁力設備",
            "category": "磁力棒",
            "images": 0,
            "title": "磁力棒",
            "subtitle": "",
            "range": "適用機型：PL/PH/PHT/PM",
            "spec": {
                "材質": "SUS304, SUS316, SUS316L",
                "高斯": "3000-12000"
            }
        },
        "磁力板": {
            "series": null,
            "housing": "磁力設備",
            "category": "磁力板",
            "images": 0,
            "title": "磁力板",
            "subtitle": ""
        },

        // ========== 空調濾網 ========== //
        "紙框": {
            "series": null,
            "housing": "空調濾網",
            "category": "紙框",
            "images": 1,
            "title": "紙框",
            "subtitle": "",
            "spec": {
                "濾材": "人纖(Synthetic Microfiber), 玻纖(Glass Fiber), 活性碳(Carbon Filter)",
                "濾效": "人纖35%, 65%, 85%, 95% (AFI)",
                "厚度": "1”, 2”, 4”"
            }
        },
        "中高效袋式": {
            "series": null,
            "housing": "空調濾網",
            "category": "中高效袋式",
            "images": 0,
            "title": "中高效袋式",
            "subtitle": "",
            "spec": {
                "濾材": "人纖(Synthetic Microfiber), 玻纖(Glass Fiber)",
                "濾效": "45%, 65%, 85%, 95% (NBS)",
                "外框": "鍍鋅鐵, 木框, 鋁框, 不鏽鋼框",
                "框體": "平面型, 單凸法蘭型"
            }
        },
        "中效濾網": {
            "series": null,
            "housing": "空調濾網",
            "category": "中效濾網",
            "images": 0,
            "title": "中效濾網",
            "subtitle": "",
            "spec": {
                "濾材": "人纖(Synthetic Microfiber)",
                "濾效": "45%, 65%, 85%, 95% (NBS)",
                "袋數": "3B, 4B, 5B, 6B, 8B, 10B, 12B",
                "袋深": "12”, 15”, 18”, 22”, 24”, 30”, 36”",
                "外框": "鍍鋅鐵"
            }
        },
        "高效率Hepa": {
            "series": null,
            "housing": "空調濾網",
            "category": "高效率Hepa",
            "images": 0,
            "title": "高效率HEPA/ULPA",
            "subtitle": "",
            "spec": {
                "濾材": "玻纖(Glass Fiber), 特殊玻纖",
                "濾效": "HEPA(0.3μm時達99.97%), DOP ULPA(0.3μm時達99.99%), DOP",
                "外框": "鍍鋅鐵, 木框, 鋁框, 不鏽鋼框",
                "框體": "平面型, 單凸法蘭型",
                "耐高溫型HEPA": "最高操作溫度250°C"
            }
        },
        "不織布濾棉": {
            "series": null,
            "housing": "空調濾網",
            "category": "不織布濾棉",
            "images": 0,
            "title": "不織布濾棉",
            "subtitle": "",
            "spec": {
                "濾材": "PP不織布(Non-Woven), 活性碳不織布",
                "厚度(mm)": "3, 5, 10, 15, 20, 25, 30"
            }
        }
    }

    constant.POPULAR_PRODUCTS = ["AH", "ALS", "AM"];

    constant.getItemIdStr = function(item){
        return item.series ? item.series : item.category;
    }

    constant.getImgPath = function(item, type){
        var imgPath = 'img/products/{0}/{1}/'.format(item.housing, item.category);
        if (item.subgroup){
            imgPath += item.subgroup + "/";
        }

        if (type == 'main'){
            if (item.series){
                imgPath += item.series + "/" + item.series;
            } else {
                imgPath += item.category;
            }
            return imgPath;
        } else {
            if (item.series){
                imgPath += item.series + "/";
            }
            if (type){
                imgPath += type;
            }
            return imgPath;
        }
    }

    constant.getHousingAndCategory = function(category, subgroup){
        var result = {};
        if (subgroup){
            for (var housing in this.SUBGROUPS){
                for (var cat in this.SUBGROUPS[housing]){
                    if (this.SUBGROUPS[housing][cat].indexOf(subgroup) != -1){
                        result.category = cat;
                        result.housing = housing;
                        return result;
                    }
                }
            }
        }
        if (category){
            for (var key in this.CATEGORIES){
                if (this.CATEGORIES[key].indexOf(category) != -1){
                    result.category = category;
                    result.housing = key;
                    return result;
                }
            }
        }
        return result;
    }

    return constant;
})