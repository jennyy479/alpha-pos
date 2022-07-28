const alphaPos = new AlphaPos()
const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function () {
  // 1. 取得店員選擇的飲料品項、甜度和冰塊
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')

  // 2. 如果沒有選擇飲料品項，跳出提示
  if (!drinkName) {
    alert('Please choose at lease one item.')
  }
  return
  // 3. 建立飲料實例，並取得飲料價格
  const drink = new Drink(drinkName, sugar, ice)
  console.log(drink)
  console.log(drink.price())
  // const drink = new Drink(drinkName, sugar, ice)
  // console.log(drink)
  // console.log(drink.price())
  // 4. 將飲料實例產生成左側訂單區的畫面
})