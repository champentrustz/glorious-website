export const rolePlayJobsData = [
    {
        name: 'treasure_job',
        label: 'งานเก็บสมบัติ',
        required_items: [{
            name: 'oxygen_tank',
            amount: 1
        }],
        items_drop: ['black_pearl', 'pearl'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่ได้รับไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '90%',
            right: '0',
            bottom: '27%',
            top: '0',
        }
    },
    {
        name: 'rice_job',
        label: 'งานเกี่ยวข้าว',
        required_items: [{
            name: 'sickle',
            amount: 1
        }],
        items_drop: ['head_rice'],
        items_process: ['rice'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '83%',
            right: '0',
            bottom: '36%',
            top: '0',
        }
    },
    {
        name: 'cherry_job',
        label: 'งานเก็บเชอร์รี่',
        required_items: [{
            name: 'basket',
            amount: 1
        }],
        items_drop: ['cherry'],
        items_process: ['cherry_box'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '60%',
            right: '0',
            bottom: '42%',
            top: '0',
        }
    },
    {
        name: 'drive_job',
        label: 'งานขับรถ',
        required_items: [{
            name: 'money',
            amount: 1000
        }],
        items_drop: ['reward_box'],
        items_craft: ['blueprint_dagger', 'blueprint_poolcue', 'blueprint_machete'],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่ได้รับไปขายที่ !จุดขาย ECONOMY และสามารถนำกล่องรางวัลไปเป็นวัตถุดิบในการคราฟ "พิมพ์เขียวอาวุธ"`,
        positions: {
            left: '0',
            right: '45%',
            bottom: '0',
            top: '30%',
        }
    },
    {
        name: 'crystal_job',
        label: 'งานเก็บคริสตัล',
        required_items: [{
            name: 'money',
            amount: 1000
        }],
        items_drop: ['crystal', 'rune_parts'],
        items_craft: ['rune_weapon_atk_1', 'rune_weapon_vampire_1', 'rune_weapon_bleeding_1'],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่ได้รับไปขายที่ !จุดขาย ECONOMY และสามารถนำกล่องรางวัลไปเป็นวัตถุดิบในการคราฟ "พิมพ์เขียวอาวุธ"`,
        positions: {
            left: '83%',
            right: '0',
            bottom: '45%',
            top: '0',
        }
    },
    {
        name: 'sand_job',
        label: 'งานตักทราย',
        required_items: [{
            name: 'shovel',
            amount: 1
        }],
        items_drop: ['sand'],
        items_process: ['glass_sand'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '10%',
            right: '0',
            bottom: '55%',
            top: '0',
        }
    },
    {
        name: 'beach_job',
        label: 'งานทำความสะอาด',
        required_items: [{
            name: 'sack_bag',
            amount: 1
        }],
        items_drop: ['plastic'],
        items_process: ['recycle_material'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '0',
            right: '20%',
            bottom: '50%',
            top: '0',
        }
    },
    {
        name: 'gold_job',
        label: 'งานร่อนทอง',
        required_items: [{
            name: 'panning',
            amount: 1
        }],
        items_drop: ['gold'],
        items_process: ['gold_ingot'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '0',
            right: '43%',
            bottom: '40%',
            top: '0',
        }
    },
    {
        name: 'mine_job',
        label: 'งานเหมือง',
        required_items: [{
            name: 'rock_drill',
            amount: 1
        }],
        items_drop: ['copper'],
        items_process: ['copper_ingot'],
        items_craft: [],
        type: 'economy',
        detail: `สามารถนำสิ่งของที่โพรเซสแล้วไปขายที่ !จุดขาย ECONOMY`,
        positions: {
            left: '70%',
            right: '0',
            bottom: '18%',
            top: '0',
        }
    },
    {
        name: 'shallow_job',
        label: 'งานตกปลา',
        required_items: [{
            name: 'fishing_rod',
            amount: 1
        },{
            name : 'bait',
            amount: 1
        }],
        items_drop: ['grouper', 'mackerel', 'trout', 'beltfish'],
        items_craft: [],
        type: 'economy',
        detail: 'สามารถนำสิ่งของที่ได้รับไปขายที่ขายปลาน้ำตื้น',
        positions: {
            left: '35%',
            right: '0',
            bottom: '60%',
            top: '0',
        }
    },
    {
        name: 'car_parts_job',
        label: 'งานซากรถ',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล`,
        positions: {
            left: '15%',
            right: '0',
            bottom: '0',
            top: '10%',
        }
    },
    {
        name: 'steel_job',
        label: 'งานตัดเหล็ก',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล`,
        positions: {
            left: '0',
            right: '80%',
            bottom: '0',
            top: '25%',
        }
    },

    {
        name: 'wood_job',
        label: 'งานตัดไม้',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล`,
        positions: {
            left: '0',
            right: '15%',
            bottom: '37%',
            top: '0',
        }
    },
    {
        name: 'stone_job',
        label: 'งานทุบหิน',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล`,
        positions: {
            left: '60%',
            right: '0',
            bottom: '28%',
            top: '0',
        }
    },


    {
        name: 'deep_fish_job',
        label: 'งานตกปลาน้ำลึก',
        required_items: [{
            name: 'fishing_rod',
            amount: 1
        },{
            name : 'baits',
            amount: 1
        }],
        items_drop: ['nibbler', 'smokey_chromis', 'sea_bass', 'porgy', 'tuna', 'sunfish', 'striped_bonito', 'skate', 'lobster', 'octopus'],
        items_craft: [],
        detail: 'สามารถนำสิ่งของที่ได้รับไปขายที่ขายปลาน้ำลึก',
        type: 'economy',
        positions: {
            left: '-10%',
            right: '0',
            bottom: '-75%',
            top: '0',
        }
    },

    {
        name: 'hunting_job',
        label: 'งานล่าสัตว์',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล`,
        positions: {
            left: '30%',
            right: '0',
            bottom: '-90%',
            top: '0',
        }
    },

    {
        name: 'garbage_job',
        label: 'งานเก็บขยะ',
        required_items: [{
            name: 'mule',
            amount: 1
        }],
        items_drop: ['money'],
        items_process: [],
        items_craft: [],
        type: 'economy',
        detail: `จำนวนของขยะจะเก็บได้มากเท่าไหร่ขึ้นอยู่กับน้ำหนักสูงสุดของรถโล (ทำได้วันละ 1 ครั้ง)`,
        positions: {
            left: '0',
            right: '25%',
            bottom: '0',
            top: '15%',
        }
    },
]