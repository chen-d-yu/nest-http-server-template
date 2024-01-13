// 依赖1：Brand 品牌
class Brand {
  public name: string
  public belongsToNationality: string
  public logo: string

  constructor(
    name: string,
    belongsToNationality: string,
    logo: string
  ) {
    console.log('🚀 ~ 初始化品牌')
    this.name = name
    this.logo = logo
    this.belongsToNationality = belongsToNationality
  }
}

// 依赖2：Engine 引擎
class Engine {
  public brakeType: string
  public cylinder: number
  constructor(brakeType: string, cylinder: number) {
    console.log('🚀 ~ 初始化引擎')
    this.brakeType = brakeType
    this.cylinder = cylinder
  }
}

class Car {
  // 自属性
  public color: string
  public type: string
  // 依赖属性
  public brandName: string
  public brandNBelongsToNationality: string
  public brandLogo: string
  public engineBrakeType: string
  public engineCylinder: number

  // 依赖类
  public brand: Brand
  public engine: Engine

  constructor(
    color: string,
    type: string,
    brandName: string,
    brandNBelongsToNationality: string,
    brandLogo: string,
    engineBrakeType: string,
    engineCylinder: number
  ) {
    console.log('🚀 ~汽车类初始化')

    this.color = color
    this.type = type

    this.brand = new Brand(
      brandName,
      brandNBelongsToNationality,
      brandLogo
    )
    this.engine = new Engine(engineBrakeType, engineCylinder)
  }

  run() {
    console.log('🚀 ~ 芜湖，跑起来了')
  }
}

// run-case
const car = new Car(
  '红色',
  '轿车',
  '宝马',
  '德国',
  'https://p8.itc.cn/images01/20210425/61183c2a47a649e88bc52821d2c8a5ef.jpeg',
  '汽油发动机',
  2
)

car.run()
