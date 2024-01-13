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

  constructor(color: string, type: string, public brand: Brand, public engine: Engine) {
    console.log('🚀 ~汽车类初始化')

    this.color = color
    this.type = type
  }

  run() {
    console.log('🚀 ~ 芜湖，跑起来了')
  }
}

class Container {
  private dependencies: { [key: string]: any } = {}

  register(key: string, dependency: any) {
    this.dependencies[key] = dependency
  }

  getDependency(key: string) {
    if (this.dependencies[key]) {
      return this.dependencies[key]
    }

    throw new Error(`依赖 ${key}未被注册到IoC容器中`)
  }
}

// run-case
const container = new Container()

container.register(
  'brand',
  new Brand('宝马', '德国', 'https://p8.itc.cn/images01/20210425/61183c2a47a649e88bc52821d2c8a5ef.jpeg')
)
container.register('engine', new Engine('汽油发动机', 4))

const car = new Car('红色', '轿车', container.getDependency('brand'), container.getDependency('engine'))
car.run()
