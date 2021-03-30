import { Monster } from '../models/monster';

export const Monsters: Array<Monster> = [
    {
        id: 1,
        name: 'gozila',
        image: 'https://image.thanhnien.vn/768/uploaded/sangdt/2021_01_17/kong_upzd.jpg',
        detail: 'Hello godzilla',
        spells: [
            {
                id: 1,
                name: 'Bay',
                icon: 'https://image.freepik.com/free-icon/magic-hat_318-1428.jpg'
            },
            {
                id: 2,
                name: 'Biến hình',
                icon: 'https://cdn.icon-icons.com/icons2/390/PNG/512/magic-swirl_38219.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Minotaur ',
        image: 'https://static1.ohman.vn/YanNews/2167221/201810/top-5-con-quai-vat-khung-khiep-va-dang-so-nhat-trong-than-thoai-hy-lap-20181005-033448.jpg',
        detail: 'Minotaur hay nhân ngưu là một quái vật nửa người nửa bò trong thần thoại Hy Lạp.',
        spells: [
            {
                id: 1,
                name: 'Chạy nhanh',
                icon: 'https://icons.iconarchive.com/icons/chanut/role-playing/1024/Destructive-Magic-icon.png'
            },
            {
                id: 2,
                name: 'Xuyên tường',
                icon: 'https://cdn2.iconfinder.com/data/icons/magic-realated-solid/64/magic-21-512.png'
            }
        ]
    }
]
