<?php
header('Content-Type: application/json; charset=utf-8');

$data = [
    'categories' => [
        'Light Arms',
        'Heavy Arms',
        'Uniforms',
        'Medical Equipment',
        'Vehicles'
    ],
    'items' => [
        [
            'id' => 'ammunition',
            'name' => 'Патрон 7.62',
            'category' => 'Light Arms',
            'bmats' => 80,
            'emats' => 5,
            'rmats' => 0,
            'time' => 4,
            'icon' => 'RifleAmmoItemIcon.webp'
        ],
        [
            'id' => 'rifle',
            'name' => 'Арґенті Р.II',
            'category' => 'Light Arms',
            'bmats' => 100,
            'emats' => 0,
            'rmats' => 0,
            'time' => 5,
            'icon' => 'RifleIcon.webp'
        ],
        [
            'id' => 'machinegun',
            'name' => 'KRN886-127 Ґаст',
            'category' => 'Light Arms',
            'bmats' => 120,
            'emats' => 0,
            'rmats' => 0,
            'time' => 9,
            'icon' => 'MGCItemIcon.png'
        ],
        [
            'id' => 'artshell',
            'name' => '150мм Артилерійський заряд',
            'category' => 'Heavy Arms',
            'bmats' => 70,
            'emats' => 50,
            'rmats' => 0,
            'time' => 15,
            'icon' => 'HeavyArtilleryAmmoItemIcon.webp'
        ],
        [
            'id' => 'mortar',
            'name' => 'Мортира Кремарі',
            'category' => 'Heavy Arms',
            'bmats' => 0,
            'emats' => 0,
            'rmats' => 120,
            'time' => 24,
            'icon' => 'MortarItemIcon.webp'
        ],
        [
            'id' => 'mortarShell',
            'name' => 'Вибуховий заряд для мортири',
            'category' => 'Heavy Arms',
            'bmats' => 70,
            'emats' => 80,
            'rmats' => 0,
            'time' => 19,
            'icon' => 'MortarAmmoIcon.webp'
        ],
        [
            'id' => 'shrapnellShell',
            'name' => 'Осколковий заряд для мортири',
            'category' => 'Heavy Arms',
            'bmats' => 90,
            'emats' => 60,
            'rmats' => 0,
            'time' => 17,
            'icon' => 'MortarAmmoIconShrapnel.webp'
        ],
        [
            'id' => 'tankUniform',
            'name' => 'Уніформа танкіста',
            'category' => 'Uniforms',
            'bmats' => 120,
            'emats' => 0,
            'rmats' => 0,
            'time' => 11,
            'icon' => 'TankUniformCIcon.png'
        ],
        [
            'id' => 'FlakVest',
            'name' => 'Велійський бронежилет',
            'category' => 'Uniforms',
            'bmats' => 150,
            'emats' => 0,
            'rmats' => 0,
            'time' => 14,
            'icon' => 'ArmourUniformC.png'
        ],
        [
            'id' => 'medicuniform',
            'name' => 'Уніформа медика',
            'category' => 'Uniforms',
            'bmats' => 150,
            'emats' => 0,
            'rmats' => 0,
            'time' => 11,
            'icon' => 'MedicUniformCIcon.png'
        ],
        [
            'id' => 'medpack',
            'name' => 'Медична сумка',
            'category' => 'Medical Equipment',
            'bmats' => 80,
            'emats' => 0,
            'rmats' => 0,
            'time' => 9,
            'icon' => 'FirstAidKitItem.png'
        ],
        [
            'id' => 'bandage',
            'name' => 'Бинт',
            'category' => 'Medical Equipment',
            'bmats' => 70,
            'emats' => 0,
            'rmats' => 0,
            'time' => 5,
            'icon' => 'BandagesItemIcon.webp'
        ],
        [
            'id' => 'bloodplasma',
            'name' => 'Плазма крові',
            'category' => 'Medical Equipment',
            'bmats' => 70,
            'emats' => 0,
            'rmats' => 0,
            'time' => 10,
            'icon' => 'BloodPlasmaItemIcon.webp'
        ],
        [
            'id' => '150mmarty',
            'name' => '150мм гармата "Громовиця"',
            'category' => 'Vehicles',
            'bmats' => 0,
            'emats' => 0,
            'rmats' => 150,
            'time' => 68,
            'icon' => 'HeavyArtilleryCIcon.webp'
        ],
        [
            'id' => 'Bardiche',
            'name' => '86К-а Бардиш',
            'category' => 'Vehicles',
            'bmats' => 0,
            'emats' => 0,
            'rmats' => 165,
            'time' => 47,
            'icon' => 'MediumTank2CIcon.webp'
        ],
        [
            'id' => 'hauler',
            'name' => 'R-1 Перевізник',
            'category' => 'Vehicles',
            'bmats' => 100,
            'emats' => 0,
            'rmats' => 0,
            'time' => 10,
            'icon' => 'TruckVehicleIcon.webp'
        ]
    ]
];

echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
