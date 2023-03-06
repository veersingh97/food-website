const meals = [
    {
      id: 1,
      title: 'Chicken Nuggets with Potato',
      info:
        'Vuctus nec ullam corper Mattis pulvi nar dapibus',
      price:'599',
      star:'4.9' ,
      type:"break-fast",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food5-free-img.png"
      
    },
    {
      id: 2,
      title: 'Spaghetti with Grilled Mackerel',
      info:
        'Consec tetur adipi elit Vuctus nec ullam corper',
      price:'499',
      star:'4.3'  ,
      type:"lunch",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-05.png"
    },
    {
      id: 3,
      title: 'Grilled Salmon Fillet with Salad',
      info:
        'Consec tetur adipi elit Vuctus nec ullam corper',
      price:'799',
      star:'4.1'  ,
      type:"dinner",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-06.png"
    },
    {
      id: 4,
      title: 'Grilled Mackerel Steak',
      info:
        'Consec tetur adipi elit Vuctus nec ullam corper',
      price:'999',
      star:'4.9'  ,
      type:"break-fast",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-06.png"
    },
    {
      id: 5,
      title: 'Chicken in Teriyaki Sauce',
      info:
        'Consec tetur adipi elit Vuctus nec ullam corper',
      price:'99',
      star:'5' ,
      type:"lunch",
      category:"Vegetarian" ,
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food3-free-img.png"
    },
    {
      id: 6,
      title: 'Grilled and Fried Chicken',
      info:
        'Mattis pulvi nar dapibus Vuctus nec ullam corper',
      price:'399',
      star:'4.7'  ,
      type:"dinner",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food6-free-img.png"
    },
    {
      id: 7,
      title: 'Kurkure Bucket',
      info:
        '5pcs kurkure chaap +5pcs kurkure spring roll',
      price:'299',
      star:'4'  ,
      type:"break-fast",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food5-free-img.png"
    },
    {
      id: 8,
      title: 'Tangy Slice Soya Chaap',
      info:
        'Sliced shaped soyabean chops marinated ',
      price:'219',
      star:'5'  ,
      type:"lunch",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-06.png"
    },
    {
      id: 9,
      title: 'Veg Slice Soya Chaap',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'49',
      star:'3.1'  ,
      type:"dinner",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food3-free-img.png"
    },
    {
      id: 10,
      title: 'Paneer Lababdar',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'149',
      star:'5'  ,
      type:"break-fast",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-05.png"
    },
    {
      id: 11,
      title: 'Paneer Tikka Masala',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'949',
      star:'4'  ,
      type:"lunch",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food3-free-img.png"
    },
    {
      id: 12,
      title: 'Joghan Rosh Chaap',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'849',
      star:'3.9'  ,
      type:"dinner",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food6-free-img.png"
    },
    {
      id: 13,
      title: 'Changezi Chaap',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'749',
      star:'3.6'  ,
      type:"break-fast",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food3-free-img.png"
    },
    {
      id: 14,
      title: 'Lahsuni Chaap Tikka',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'249',
      star:'3'  ,
      type:"lunch",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-05.png"
    },
    {
      id: 15,
      title: 'Mushroom Curry Masala',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'549',
      star:'4.6'  ,
      type:"dinner",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-06.png"
    },
    {
      id: 16,
      title: 'Aloo Onion Kulcha',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'449',
      star:'4.2'  ,
      type:"break-fast",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food5-free-img.png"
    },
    {
      id: 17,
      title: 'Veg Slice Soya Chaap',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'649',
      star:'4'  ,
      type:"lunch",
      category:"Non-Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2021/03/food-dish-05.png"
    },
    {
      id: 18,
      title: 'Krunchy Potato Fries ',
      info:
        'Fresh veggies marinated with hung curd and cooked ',
      price:'349',
      star:'3.9'  ,
      type:"dinner",
      category:"Vegetarian",
      img:"https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/food6-free-img.png"
    },
  ]
  export default meals;