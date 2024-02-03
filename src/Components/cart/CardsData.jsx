const CardsData = [
    {
      id: 1,
      dish: "Pant Coat",
      imgdata:"https://media.gq.com/photos/615236e6ad83201a3a86472b/master/w_1600%2Cc_limit/GQ_SUITGUIDE_LAYDOWNS_LAPELS_CELINE.jpg",
      address: "North India, Karnatka, Mughlai",
      delimg:"https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 1175 + order placed from here recently",
      price: 1350,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 2,
      dish: "Short dress for girls",
      imgdata:
        "https://i.pinimg.com/originals/b5/53/88/b55388bd5ad15a2839e58d6780f2fd8c.jpg",
      address: "Ramesh Nagar, New Dehi 110015",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 2525 + order placed from here recently",
      price: 1250,
      rating: "3.9",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 3,
      dish: "Shy Shander Shoes",
      imgdata:
        "data:image/jpeg;base64,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",
      address: "Moti Nagar new metro pillar 372",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 650 + order placed from here recently",
      price: 870,
      rating: "4.2",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 4,
      dish: "Unisex Muffler ",
      imgdata:
        "https://rukminim2.flixcart.com/image/850/1000/k3j1z0w0/muffler/5/p/p/free-pashmina-muffler-black-zacharias-original-imafmn96mztc2mhh.jpeg?q=90&crop=false",
      address: "Telangana ",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 300 + order placed from here recently",
      price: 270,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 5,
      dish: "Louis Vuitton purse for girls",
      imgdata: "https://m.media-amazon.com/images/I/61Bq5xM0qOL._SY695_.jpg",
      address: "Rameshwaram park near saka laka land, c0132",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "1050 + order placed from here recently",
      price: 2210,
      rating: "4.0",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 6,
      dish: "Red Shade ",
      imgdata:
        "https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-ng-master-catalog/default/dw9f19ee1d/images/new-packshot/Lips/l-absolu-rouge-drama-ultra-matte-lipstick-lips-3614273308311-lancome-makeup.jpg?sw=563&sh=563&sm=cut&sfrm=jpg&q=70",
      address: "Manglaa, karkhan road, West Bengal",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: " 1100 + order placed from here recently",
      price: 150,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 7,
      dish: "Garnier Face Wash",
      imgdata:
        "https://m.media-amazon.com/images/I/51UQbNeJRZL._AC_UF1000,1000_QL80_.jpg",
      address: "Kacha bazar, Ambala cantt near gurdwara",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: 300,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 8,
      dish: "Sun shades",
      imgdata:
        "https://assets.ajio.com/medias/sys_master/root/20230706/PdUA/64a661dfa9b42d15c939d2d2/-473Wx593H-466228508-black-MODEL.jpg",
      address: "Naangloi",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: 100,
      rating: "3.2",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
    {
      id: 9,
      dish: "Unisex stylish Chain",
      imgdata:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/necklace-chain/z/0/2/1-ff429-ab-chain-fashion-frill-original-imaggpg6je7mf4hp.jpeg?q=20&crop=false",
      address: "Bhatron wala yoyo, BasaiDaraPur",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "2525 + order placed from here recently",
      price: 100,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 0,
    },
  ];

export default CardsData;