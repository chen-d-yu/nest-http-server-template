// 依赖1：Brand 品牌
class Brand {
  public name: string
  public belongsToNationality: string
  constructor(name: string, belongsToNationality: string) {
    console.log('🚀 ~ 初始化品牌')
    this.name = name
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
    engineBrakeType: string,
    engineCylinder: number
  ) {
    console.log('🚀 ~汽车类初始化')

    this.color = color
    this.type = type

    this.brand = new Brand(brandName, brandNBelongsToNationality)
    this.engine = new Engine(engineBrakeType, engineCylinder)
  }

  run() {
    console.log('🚀 ~ 芜湖，跑起来了')
  }
}

// run-case
const car = new Car('红色', '轿车', '宝马', '德国', '汽油发动机', 2)

car.run()
