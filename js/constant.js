define('constant', function(){
    var constant = {};

    constant.HOUSING = ["過濾器", "濾材", "機械設備", "磁力設備", "空調濾網"];

    constant.CATEGORIES = {
        "過濾器": ["不鏽鋼濾心機", "不鏽鋼袋濾機", "純PP濾殼、塑膠濾殼", "過濾器配件", "鈦過濾器"],
        "濾材": ["不鏽鋼濾心", "PP囊式濾心", "活性碳濾心", "陽極袋", "壓濾機濾布", "砂紙", "空壓機濾心"],
        "機械設備": [],
        "磁力設備": [],
        "空調濾網": []
    }

    constant.SERIES = {
        "過濾器": {
            "不鏽鋼濾心機": ["ALS", "ALA", "AHS", "AF", "AL", "AH", "AM",
                "AGS", "AHP", "ALF", "ALSH", "SCL", "SCS"], // no info
            "不鏽鋼袋濾機": ["PL", "PH", "PHT", "PM",
                "PHP"], // no info
            "純PP濾殼、塑膠濾殼": ["塑膠濾殼", "純PP濾殼-222型", "純PP濾殼-226型"],
            "過濾器配件": ["沖孔籃", "壓袋器", "撐開架", "金屬浮球"],
            "鈦過濾器": ["鈦過濾器"]
        },
        "濾材": {
            "不鏽鋼濾心": ["金屬摺疊", "粉末燒結",
                "平面濾心", "平面濾籃"], // no info
            "PP囊式濾心": ["PP囊式濾心"],
            "活性碳濾心": ["碳棒式", "碳布式", "碳纖式"],
            "陽極袋": ["陽極袋"],
            "壓濾機濾布": ["壓濾機濾布"],
            "砂紙": ["砂紙"],
            "空壓機濾心": ["空壓機濾心"]
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
        "AGS": {
            "series": "AGS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 2,
            "title": "濾心式過濾器",
            "subtitle": ""
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
            "subtitle": ""
        },
        "ALSH": {
            "series": "ALSH",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "濾心式過濾器",
            "subtitle": ""
        },
        "SCL": {
            "series": "SCL",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 1,
            "title": "衛生級濾心式過濾器",
            "subtitle": ""
        },
        "SCS": {
            "series": "SCS",
            "housing": "過濾器",
            "category": "不鏽鋼濾心機",
            "images": 4,
            "title": "衛生級濾心式過濾器",
            "subtitle": ""
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
                "Oring材質(選購)": "Viton, Teflon 包Viton",
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
            "specImg": 1
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
            "title": "鈦過濾桶",
            "subtitle": "標準濾心式",
            "hideSeries": true,
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
        "金屬摺疊": {
            "series": "金屬摺疊",
            "housing": "濾材",
            "category": "不鏽鋼濾心",
            "images": 1,
            "title": "金屬摺疊",
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
        "粉末燒結": {
            "series": "粉末燒結",
            "housing": "濾材",
            "category": "不鏽鋼濾心",
            "images": 0,
            "title": "粉末燒結",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true,
            "feature": [
                "不銹鋼粉末通過模具壓制後高溫燒結而成，具有機械強度高，耐高溫、耐腐蝕性能好",
                "孔徑分佈均勻，濾效高",
                "最大耐受壓差：3bar，以上特規製作",
                "最大操作溫度：480°C"
            ]
        },
        "平面濾心": {
            "series": "平面濾心",
            "housing": "濾材",
            "category": "不鏽鋼濾心",
            "images": 1,
            "title": "平面濾心",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true
        },
        "平面濾籃": {
            "series": "平面濾籃",
            "housing": "濾材",
            "category": "不鏽鋼濾心",
            "images": 0,
            "title": "平面濾籃",
            "subtitle": "不鏽鋼濾心",
            "hideSeries": true
        },

        "PP囊式濾心": {
            "series": "PP囊式濾心",
            "housing": "濾材",
            "category": "PP囊式濾心",
            "images": 0,
            "title": "PP囊式濾心",
            "subtitle": "",
            "hideSeries": true
        },
        "碳棒式": {
            "series": "碳棒式",
            "housing": "濾材",
            "category": "活性碳濾心",
            "images": 0,
            "title": "碳棒式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "spec": {
                "活性碳種類": "椰殼碳棒",
                "中柱材質": "PP",
                "濾材公稱精度": "5μm",
                "最高操作溫度": "52°C (125°F)",
                "最大工作壓差": "4.5bar at 25°C",
                "建議更換壓差": "2.1bar (31psi)"
            },
            "feature": [
                "主要用於表面處裡，電鍍製程，PCB藥液過濾",
                "高品質的碳布增強吸收效率和濾心的去汙能力",
                "具有濾除渣質以及吸附氯、臭氣、異味異色的雙重效果",
                "高強度的PP聚丙烯軸增強濾心的結構強度"
            ]
        },
        "碳布式": {
            "series": "碳布式",
            "housing": "濾材",
            "category": "活性碳濾心",
            "images": 0,
            "title": "碳布式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "spec": {
                "活性碳種類": "椰殼碳粉 Polyester 纖維布",
                "中柱材質": "PP",
                "濾材公稱精度": "5μm",
                "最高操作溫度": "52°C (125°F)",
                "最大工作壓差": "4.5bar at 25°C",
                "建議更換壓差": "2.1bar (31psi)"
            },
            "feature": [
                "主要用於飲用水，純水設備，和內循環過濾使用",
                "經濟型活性碳濾心，碳含量高，壽命長",
                "採用高效活性碳經連續高強度擠壓成型增加濾心耐久性",
                "高孔隙度設計，防止過早堵塞",
                "有效去除液體中的餘氯、異味及有機物"
            ]
        },
        "碳纖式": {
            "series": "碳纖式",
            "housing": "濾材",
            "category": "活性碳濾心",
            "images": 0,
            "title": "碳纖式",
            "subtitle": "活性碳濾心",
            "hideSeries": true,
            "spec": {
                "活性碳種類": "椰殼碳粉 Polyester 纖維布",
                "中柱材質": "PP",
                "濾材公稱精度": "5μm",
                "最高操作溫度": "52°C (125°F)",
                "最大工作壓差": "4.5bar at 25°C",
                "建議更換壓差": "2.1bar (31psi)"
            },
            "feature": [
                "Made in Japan",
                "專為電鍍工業和化學品工業設計製造的高濾效及高吸附力的雙效濾心產品",
                "具高效的活性碳吸附和過濾固態微粒的功能，不論高分子量或低分子量的有機物，其吸附力較一般濾心高5-10倍",
                "選擇性吸附不純物，保持光澤，加強鍍金，鍍銀質量安定",
                "具備極高的脫色能力"
            ]
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
        "空壓機濾心": {
            "series": "空壓機濾心",
            "housing": "濾材",
            "category": "空壓機濾心",
            "images": 0,
            "title": "空壓機濾心",
            "subtitle": "",
            "hideSeries": true,
            "specImg": 1
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
            "range": "濕式磁選機用來處理食品、化工、醫藥、汽車、回收、機械加工及光電產業、半導體產業與廢水汙泥裡含鐵雜質處理。",
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

    constant.LATEST_PRODUCTS = ["AH", "陽極袋"];

    constant.getItemIdStr = function(item){
        return item.series ? item.series : item.category;
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