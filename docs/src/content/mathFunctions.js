export const mathFunctions = {
    "Basic Arithmetic": [
      {
        name: "addInt",
        description: "Add two integers",
        parameters: [
          { name: "a", type: "Int", description: "First integer" },
          { name: "b", type: "Int", description: "Second integer" }
        ],
        returnType: "Int",
        example: "val sum = math.addInt(5, 3) // Returns 8",
        code: `fun addInt(a: Int, b: Int): Int{
                  return a+b
              }`
      },
      {
        name: "addFloat",
        description: "Add two floating point numbers",
        parameters: [
          { name: "a", type: "Float", description: "First float" },
          { name: "b", type: "Float", description: "Second float" }
        ],
        returnType: "Float",
        example: "val sum = math.addFloat(5.2f, 3.7f) // Returns 8.9f",
        code: `fun addFloat(a: Float, b: Float): Float{
      return a + b
  }`
      },
      {
        name: "addDouble",
        description: "Add two double precision numbers",
        parameters: [
          { name: "a", type: "Double", description: "First double" },
          { name: "b", type: "Double", description: "Second double" }
        ],
        returnType: "Double",
        example: "val sum = math.addDouble(5.25, 3.75) // Returns 9.0",
        code: `fun addDouble(a: Double, b: Double): Double{
      return a + b
  }`
      }
    ],
    "Triangle": [
      {
        name: "triangleArea (with height and base)",
        description: "Calculate the area of a triangle using height and base",
        parameters: [
          { name: "height", type: "Float", description: "Height of the triangle" },
          { name: "base", type: "Float", description: "Base of the triangle" }
        ],
        returnType: "Float",
        example: "val area = math.triangleArea(10f, 5f) // Returns 25f",
        code: `fun triangleArea(height: Float, base: Float): Float{
      val area = (0.5 * height * base).toFloat()
      return area
  }`
      },
      {
        name: "triangleArea (with 3 sides)",
        description: "Calculate the area of a triangle using the lengths of its three sides (Heron's formula)",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" }
        ],
        returnType: "Float",
        example: "val area = math.triangleArea(3f, 4f, 5f) // Returns 6f",
        code: `fun triangleArea(sideA: Float, sideB: Float, sideC: Float): Float{
      val perimeter = sideA + sideB + sideC
      val semiPerimeter = perimeter/2
  
      val area = sqrt(semiPerimeter * (semiPerimeter - sideA) 
          * (semiPerimeter - sideB) * (semiPerimeter - sideC))
  
      return area
  }`
      },
      {
        name: "trianglePerimeter",
        description: "Calculate the perimeter of a triangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" }
        ],
        returnType: "Float",
        example: "val perimeter = math.trianglePerimeter(3f, 4f, 5f) // Returns 12f",
        code: `fun trianglePerimeter(sideA: Float, sideB: Float, sideC: Float): Float{
      return sideA + sideB + sideC
  }`
      },
      {
        name: "triangleAngles",
        description: "Calculate the angles of a triangle in degrees",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of first side" },
          { name: "sideB", type: "Float", description: "Length of second side" },
          { name: "sideC", type: "Float", description: "Length of third side" },
          { name: "showLogs", type: "Boolean", description: "Whether to print calculation logs", default: "true" }
        ],
        returnType: "Triple<Float, Float, Float>?",
        example: "val angles = math.triangleAngles(3f, 4f, 5f) // Returns (36.9f, 53.1f, 90.0f)",
        code: `fun triangleAngles(sideA: Float, sideB: Float, sideC: Float, showLogs: Boolean = true): Triple<Float, Float, Float>? {
      if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
          println("Error: The given side lengths do not form a valid triangle.")
          return null
      }
  
      val cosAlpha = (sideB.pow(2) + sideC.pow(2) - sideA.pow(2)) / (2 * sideB * sideC)
      val sinAlpha = sqrt(1 - cosAlpha.pow(2))
      val alphaRad = atan2(sinAlpha, cosAlpha)
  
      val cosBeta = (sideA.pow(2) + sideC.pow(2) - sideB.pow(2)) / (2 * sideA * sideC)
      val sinBeta = sqrt(1 - cosBeta.pow(2))
      val betaRad = atan2(sinBeta, cosBeta)
  
      val cosTheta = (sideA.pow(2) + sideB.pow(2) - sideC.pow(2)) / (2 * sideA * sideB)
      val sinTheta = sqrt(1 - cosTheta.pow(2))
      val thetaRad = atan2(sinTheta, cosTheta)
  
      val alphaDeg = alphaRad.toDegrees()
      val betaDeg = betaRad.toDegrees()
      val thetaDeg = thetaRad.toDegrees()
  
      if (showLogs){
          println("Angle opposite side a1: \${String.format("%.3f", alphaDeg)} degrees")
          println("Angle opposite side a2: \${String.format("%.3f", betaDeg)} degrees")
          println("Angle opposite side l: \${String.format("%.3f", thetaDeg)} degrees")
  
          val angleSum = alphaDeg + betaDeg + thetaDeg
          println("Sum of angles: \${String.format("%.3f", angleSum)} degrees")
      }
  
      return Triple(alphaDeg, betaDeg, thetaDeg)
  }`
      }
    ],
    "Pythagorean Theorem": [
      {
        name: "pythagor",
        description: "Calculate the hypotenuse of a right triangle using the Pythagorean theorem",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the first leg" },
          { name: "sideB", type: "Float", description: "Length of the second leg" }
        ],
        returnType: "Float",
        example: "val hypotenuse = math.pythagor(3f, 4f) // Returns 5f",
        code: `fun pythagor(sideA: Float, sideB: Float): Float {
      val hypotenuse = sideA.pow(2) + sideB.pow(2)
      return sqrt(hypotenuse)
  }`
      },
      {
        name: "pythagorCathetus",
        description: "Calculate a leg of a right triangle when given the other leg and the hypotenuse",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the known leg" },
          { name: "hypotenuse", type: "Float", description: "Length of the hypotenuse" }
        ],
        returnType: "Float",
        example: "val leg = math.pythagorCathetus(3f, 5f) // Returns 4f",
        code: `fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
      val sideB = hypotenuse.pow(2) - sideA.pow(2)
      return sqrt(sideB)
  }`
      }
    ],
    "Square": [
      {
        name: "squareArea",
        description: "Calculate the area of a square",
        parameters: [
          { name: "side", type: "Float", description: "Length of the side" }
        ],
        returnType: "Float",
        example: "val area = math.squareArea(5f) // Returns 25f",
        code: `fun squareArea(side: Float): Float{
      return side.pow(2)
  }`
      },
      {
        name: "squarePerimeter",
        description: "Calculate the perimeter of a square",
        parameters: [
          { name: "side", type: "Float", description: "Length of the side" }
        ],
        returnType: "Float",
        example: "val perimeter = math.squarePerimeter(5f) // Returns 20f",
        code: `fun squarePerimeter(side: Float): Float{
      return side * 4
  }`
      }
    ],
    "Rectangle": [
      {
        name: "rectArea",
        description: "Calculate the area of a rectangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the rectangle" },
          { name: "sideB", type: "Float", description: "Width of the rectangle" }
        ],
        returnType: "Float",
        example: "val area = math.rectArea(5f, 3f) // Returns 15f",
        code: `fun rectArea(sideA: Float, sideB: Float): Float{
      return sideA * sideB
  }`
      },
      {
        name: "rectPerimeter",
        description: "Calculate the perimeter of a rectangle",
        parameters: [
          { name: "sideA", type: "Float", description: "Length of the rectangle" },
          { name: "sideB", type: "Float", description: "Width of the rectangle" }
        ],
        returnType: "Float",
        example: "val perimeter = math.rectPerimeter(5f, 3f) // Returns 16f",
        code: `fun rectPerimeter(sideA: Float, sideB: Float): Float{
      return (sideA + sideB) * 2
  }`
      }
    ],
    "Circle": [
      {
        name: "circleArea",
        description: "Calculate the area of a circle",
        parameters: [
          { name: "radius", type: "Float", description: "Radius of the circle" }
        ],
        returnType: "Float",
        example: "val area = math.circleArea(5f) // Returns 78.54f",
        code: `fun circleArea(radius: Float): Float{
      return PI.toFloat() * (radius.pow(2))
  }`
      },
      {
        name: "circleLengthR",
        description: "Calculate the circumference of a circle using radius",
        parameters: [
          { name: "radius", type: "Float", description: "Radius of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = math.circleLengthR(5f) // Returns 31.42f",
        code: `fun circleLengthR(radius: Float): Float{
      return 2 * PI.toFloat() * radius
  }`
      },
      {
        name: "circleLengthD",
        description: "Calculate the circumference of a circle using diameter",
        parameters: [
          { name: "diameter", type: "Float", description: "Diameter of the circle" }
        ],
        returnType: "Float",
        example: "val circumference = math.circleLengthD(10f) // Returns 31.42f",
        code: `fun circleLengthD(diameter: Float): Float{
      return PI.toFloat() * diameter
  }`
      }
    ],
    "Utility": [
      {
        name: "Float.toDegrees",
        description: "Convert angle from radians to degrees",
        parameters: [],
        returnType: "Float",
        example: "val degrees = (PI/4).toFloat().toDegrees() // Returns 45f",
        code: `fun Float.toDegrees(): Float {
      return this * 180f / PI.toFloat()
  }`
      },
      {
        name: "Float.toRadians",
        description: "Convert angle from degrees to radians",
        parameters: [],
        returnType: "Float",
        example: "val radians = 45f.toRadians() // Returns 0.785f (π/4)",
        code: `fun Float.toRadians(): Float {
      return this * PI.toFloat() / 180f
  }`
      }
    ]
  };